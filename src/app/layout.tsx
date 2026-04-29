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
    default: "Naturheilpraxis Carola Weidner | Heilpraktikerin im Landkreis Neustadt a.d. Waldnaab",
    template: "%s | Naturheilpraxis Carola Weidner",
  },
  description:
    "Naturheilpraxis Carola Weidner im Landkreis Neustadt a.d. Waldnaab – Heilpraktikerin mit ganzheitlichem Ansatz. Naturheilkunde, Osteopathie, Akupunktur, Dorn-und Breusstherapie & mehr.",
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
    title: "Naturheilpraxis Carola Weidner | Heilpraktikerin im Landkreis Neustadt a.d. Waldnaab",
    description:
        "Naturheilpraxis Carola Weidner im Landkreis Neustadt a.d. Waldnaab – Heilpraktikerin mit ganzheitlichem Ansatz. Naturheilkunde, Osteopathie, Akupunktur, Dorn-und Breusstherapie & mehr.",
    url: "https://www.naturheilpraxis-weidner.de",
    siteName: "Naturheilpraxis Carola Weidner",
    locale: "de_DE",
    type: "website",
  },
  icons: {
    // icon: [
    //   { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    //   { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    // ],
    // apple: "/favicon_io/apple-touch-icon.png",
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
    <html lang="de">
      <head>
        {/* Google Analytics Skript für die Google-Verifizierung */}
        <GoogleAnalytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <KlaroProvider />
        {/* <GoogleAnalytics /> entfernt, da wir es im <head> einbinden sollen */}
        <AosProvider>
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
