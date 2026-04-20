import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "klaro/dist/klaro.min.css";
import AosProvider from "./components/AosProvider";
import KlaroProvider from "./components/KlaroProvider";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Naturheilpraxis Carola Weidner | Heilpraktikerin in Püchersreuth",
    template: "%s | Naturheilpraxis Carola Weidner",
  },
  description:
    "Naturheilpraxis Carola Weidner in Püchersreuth – Heilpraktikerin mit ganzheitlichem Ansatz. Naturheilkunde, Homöopathie, Akupunktur & mehr. Jetzt Termin vereinbaren!",
  keywords: [
    "Naturheilpraxis",
    "Heilpraktikerin",
    "Püchersreuth",
    "Naturheilkunde",
    "Homöopathie",
    "Akupunktur",
    "ganzheitliche Medizin",
    "Carola Weidner",
    "Naturheilpraxis Weidner",
    "Heilpraktiker Oberpfalz",
    "Heilpraktiker Weiden",
    "alternative Medizin",
    "Therapie natürlich",
  ],
  authors: [{ name: "Carola Weidner" }],
  creator: "Carola Weidner",
  metadataBase: new URL("https://www.naturheilpraxis-weidner.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Naturheilpraxis Carola Weidner | Heilpraktikerin in Püchersreuth",
    description:
      "Ganzheitliche Naturheilkunde in Püchersreuth. Heilpraktikerin Carola Weidner bietet individuelle Therapien – Homöopathie, Akupunktur und mehr.",
    url: "https://www.naturheilpraxis-weidner.de",
    siteName: "Naturheilpraxis Carola Weidner",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <KlaroProvider />
        <GoogleAnalytics />
        <AosProvider>
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
