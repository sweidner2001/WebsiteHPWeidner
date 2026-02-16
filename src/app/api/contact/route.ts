import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as yup from 'yup';

// Validierungs-Schema (gleich wie im Frontend)
const contactSchema = yup.object({
    name: yup.string().trim().required("Name ist erforderlich.").max(50, "Name darf max. 50 Zeichen haben."),
    email: yup.string().trim().email("Ungültige Email-Adresse.").required("Email ist erforderlich.").max(40, "Email darf max. 40 Zeichen haben."),
    telefonnr: yup.string().trim()
        .required("Telefonnummer ist erforderlich.")
        .matches(/^[0-9+]+$/, "Telefonnummer darf nur Zahlen und + enthalten.")
        .max(25, "Telefonnummer darf max. 25 Zeichen haben."),
    message: yup.string().trim().required("Nachricht ist erforderlich.").max(700, "Nachricht darf max. 700 Zeichen haben."),
    honeypot: yup.string().optional(),
}).required();

// Rate-Limiting Map (IP -> letzte Anfrage-Zeit)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 Minute
const MAX_REQUESTS_PER_WINDOW = 2; // Max 2 Anfragen pro Minute

/**
 * Prüft Rate-Limiting für eine IP-Adresse
 */
function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const requests = rateLimitMap.get(ip) || [];

    // Entferne alte Anfragen außerhalb des Zeitfensters
    const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);

    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
        return false; // Rate-Limit erreicht
    }

    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);
    return true;
}

/**
 * POST-Handler für Kontaktformular
 */
export async function POST(request: NextRequest) {
    try {
        // IP-Adresse für Rate-Limiting
        const ip = request.headers.get('x-forwarded-for') ||
                   request.headers.get('x-real-ip') ||
                   'unknown';

        // Rate-Limiting prüfen
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Zu viele Anfragen. Bitte warten Sie einen Moment.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { name, email, telefonnr, message, honeypot } = body;

        // Honeypot-Check: Wenn das versteckte Feld ausgefüllt ist, ist es ein Bot
        if (honeypot) {
            // Fake-Erfolg zurückgeben, um Bots nicht zu informieren
            return NextResponse.json({ success: true });
        }

        // Validierung mit yup
        try {
            await contactSchema.validate(body, { abortEarly: false });
        } catch (validationError) {
            if (validationError instanceof yup.ValidationError) {
                return NextResponse.json(
                    { error: validationError.errors[0] || 'Ungültige Eingabe.' },
                    { status: 400 }
                );
            }
        }

        // Nodemailer Transporter konfigurieren
        // WICHTIG: Ersetze diese Werte durch deine echten SMTP-Daten in .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true für Port 465, false für andere Ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email-Inhalt
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `Neue Terminanfrage von ${name}`,
            html: `
                <h2>Neue Terminanfrage</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${telefonnr}</p>
                <p><strong>Nachricht:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p style="color: #666; font-size: 12px;">
                    Diese Nachricht wurde über das Kontaktformular auf Ihrer Website gesendet.
                </p>
            `,
            text: `
                Neue Terminanfrage
                
                Name: ${name}
                Email: ${email}
                Telefon: ${telefonnr}
                
                Nachricht:
                ${message}
            `,
        };

        // Email senden
        await transporter.sendMail(mailOptions);

        // User message:
        return NextResponse.json({
            success: true,
            message: 'Ihre Anfrage wurde erfolgreich gesendet.'
        });

    } catch (error) {
        // User message:
        console.error('Email-Fehler:', error);
        return NextResponse.json(
            { error: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.' },
            { status: 500 }
        );
    }
}
