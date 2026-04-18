import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0d9c42] py-8 border-t border-green-600 mt-[1px]">
            <div className="container mx-auto px-6 text-center">
                <p className="text-white font-light">Naturheilpraxis Carola Weidner TEST</p>
                <div className="mt-2">
                    <Link href="/datenschutz"
                          className="text-white hover:text-green-200 text-sm font-light mx-2">Datenschutz</Link>
                    <Link href="/impressum"
                          className="text-white hover:text-green-200 text-sm font-light mx-2">Impressum</Link>
                </div>
            </div>
        </footer>
    );
}
