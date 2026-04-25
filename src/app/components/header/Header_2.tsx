import React from "react";
import HeaderHeadingNP from "@/app/components/header/HeaderHeadingNP";
import Link from "next/link";


const Header_2: React.FC = () => {

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <HeaderHeadingNP/>
                <Link
                    href="/"
                    className="text-sm font-light text-green-600 hover:text-green-700 transition-colors"
                >
                    ← Zurück zur Startseite
                </Link>
            </div>
        </nav>
    );
};


export {
    Header_2,
}