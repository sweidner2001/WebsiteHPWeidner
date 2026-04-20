import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung der Naturheilpraxis Carola Weidner, Püchersreuth.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
