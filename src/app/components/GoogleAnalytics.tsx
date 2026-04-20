'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// ⚠️ HIER Ihre Google Analytics Measurement ID eintragen:
// Format: G-XXXXXXXXXX  (zu finden unter analytics.google.com → Verwaltung → Datenstreams)
const GA_MEASUREMENT_ID = 'G-JDZNQ7S6SX';


// <!-- Google tag (gtag.js) -->
{/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-JDZNQ7S6SX"></script>*/}
{/*<script>*/}
{/*    window.dataLayer = window.dataLayer || [];*/}
{/*    function gtag(){dataLayer.push(arguments);}*/}
{/*    gtag('js', new Date());*/}

{/*    gtag('config', 'G-JDZNQ7S6SX');*/}
{/*</script>*/}


export default function GoogleAnalytics() {
    const [consented, setConsented] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            // Direkt den Klaro-Cookie lesen – nur wenn er existiert, hat der User bestätigt
            const match = document.cookie.match(/(?:^|;\s*)klaro=([^;]*)/);
            if (match) {
                try {
                    const consents = JSON.parse(decodeURIComponent(match[1]));
                    const hasConsent = !!consents['google-analytics'];
                    setConsented(hasConsent);

                    if (!hasConsent) {
                        // GA-Cookies bei Widerruf löschen
                        document.cookie.split(';').forEach((c) => {
                            const cookieName = c.trim().split('=')[0];
                            if (/^_ga/.test(cookieName) || cookieName === '_gid' || cookieName === '_gat') {
                                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
                            }
                        });
                    }
                } catch {
                    setConsented(false);
                }
            } else {
                // Kein Cookie vorhanden → User hat noch nicht bestätigt
                setConsented(false);
            }
        };

        checkConsent();

        // Polling alle 500ms, um Cookie-Änderungen mitzubekommen
        const interval = setInterval(checkConsent, 500);

        return () => clearInterval(interval);
    }, []);

    if (!consented) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        anonymize_ip: true,
                        cookie_flags: 'SameSite=None;Secure'
                    });
                `}
            </Script>
        </>
    );
}
