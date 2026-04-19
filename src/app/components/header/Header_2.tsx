'use client';

import React from 'react';
import Image from 'next/image';

interface Header2Props {
    activeSection: string;
    isMenuOpen: boolean;
    onMenuToggle: (open: boolean) => void;
    onSectionClick: (sectionId: string) => void;
}

export default function Header2({ activeSection, isMenuOpen, onMenuToggle, onSectionClick }: Header2Props) {
    return (
        <>
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="h-1 shrink-0 flex items-center justify-center">
                        <Image
                            src="/img/Logo 1_blume.png"
                            alt="NH"
                            height={100}
                            width={0}
                            sizes="100vw"
                            className="h-12 w-auto"
                            priority
                        />
                    </div>
                    <span className="text-xl font-light text-gray-700">Naturheilpraxis Carola Weidner</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {['home', 'philosophie', 'leistungen', 'ueber-mich', 'kontakt'].map((item) => (
                        <button
                            key={item}
                            className={`capitalize transition-all duration-0 cursor-pointer ${
                                activeSection === item
                                    ? 'text-green-600 font-medium border-b-2 border-green-600'
                                    : 'text-gray-600 hover:text-green-500'
                            }`}
                            onClick={() => onSectionClick(item)}
                        >
                            {item.replace('-', ' ').replace('ueber', 'über')}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => onMenuToggle(!isMenuOpen)}
                >
                    <div className="space-y-1">
                        <span className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 w-6 bg-current ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden bg-white/40 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                    {['home', 'philosophie', 'leistungen', 'ueber-mich', 'kontakt'].map((item) => (
                        <button
                            key={item}
                            className={`capitalize text-left py-2 transition-colors ${
                                activeSection === item ? 'text-green-600 font-medium' : 'text-gray-600'
                            }`}
                            onClick={() => onSectionClick(item)}
                        >
                            {item.replace('-', ' ').replace('ueber', 'über')}
                        </button>
                    ))}
                </div>
            </div>
        </nav>

        {/* Spacer-Element: Reserviert Platz für die fixed Navigation */}
        <div className="py-9" aria-hidden="true"></div>
        </>
    );
}
