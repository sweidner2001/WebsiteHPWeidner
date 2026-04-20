import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum",
    description: "Impressum der Naturheilpraxis Carola Weidner, Püchersreuth.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
