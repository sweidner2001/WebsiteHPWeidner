'use client';
import Image from 'next/image';
import './hero.css';
import React from "react";

interface HeroSectionProps {
    onSectionClick: (sectionId: string) => void;
}

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
    return (
        <>

            {/* SVG clip-path Definition für elegante Bögen */}
            <svg width="0" height="0">
                <defs>
                    {/*115% - Kontrollpunkt ist rechts außerhalb des Bildes (erzeugt Krümmung nach außen)*/}
                    {/*50% - Vertikal in der Mitte*/}
                    {/*20% - Endpunkt ist 20% von links (Bogen endet am linken Rand, nicht ganz am Ende)*/}
                    {/*100% - Endpunkt ist ganz unten*/}
                    <clipPath id="curve-clip" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0 L 1,0 Q 0.85,0.5 1,1 L 0,1 Z"/>
                        {/*<path d="M 0,0   L 0.85,0   Q 1,0.5 0.8,1   L 0,1   Z"/>*/}
                        {/*<path d="M 0,0   L 0.80,0   Q 1.1,0.5 0.2,1   L 0,1   Z"/>*/}
                        {/*<path d="M 0,0   L 0.80,0   Q 1.2,0.5 0,1   L 0,1   Z"/>*/}
                        {/*<path d="M 0,0   L 0.80,0   Q 1.1,0.5 0.0.5,1      L 0,1   Z"/>*/}
                        {/*<path d="M 0,0   L 0.85,0   Q 0.8,0.5 0.99,1   L 0,1   Z"/>*/}
                    </clipPath>
                </defs>
            </svg>

            <svg width="0" height="0">
                <defs>
                    {/*115% - Kontrollpunkt ist rechts außerhalb des Bildes (erzeugt Krümmung nach außen)*/}
                    {/*50% - Vertikal in der Mitte*/}
                    {/*20% - Endpunkt ist 20% von links (Bogen endet am linken Rand, nicht ganz am Ende)*/}
                    {/*100% - Endpunkt ist ganz unten*/}
                    <clipPath id="curve-clip-hor" clipPathUnits="objectBoundingBox">
                        <path d="M 0,0 L 1,0 Q 0.85,0.5 1,1 L 0,1 Z"/>
                        {/*<path d="M 0,0   L 0.85,0   Q 1,0.5 0.8,1   L 0,1   Z"/>*/}
                        {/*<path d="M 0,0   L 0.80,0   Q 1.1,0.5 0.2,1   L 0,1   Z"/>*/}
                        {/*<path d="M 0,0   L 0.80,0   Q 1.2,0.5 0,1   L 0,1   Z"/>*/}
                        {/*<path d="M 0,0   L 0.80,0   Q 1.1,0.5 0.0.5,1      L 0,1   Z"/>*/}
                        {/*<path d="M 0,0   L 0.85,0   Q 0.8,0.5 0.99,1   L 0,1   Z"/>*/}
                    </clipPath>
                </defs>
            </svg>


            {/* Hero Section mit organischem Bild-Container */}
            <section id="home" className="min-h-screen flex flex-col md:flex-row items-center relative md:overflow-visible overflow-hidden pt-16">
                {/* Organischer Bildcontainer mit Bogen-Form - nur auf md+ sichtbar */}
                <div
                    className="w-full md:absolute md:left-0 md:top-0 md:h-full md:w-1/3 lg:w-1/2 hidden sm:block sm:h-48 md:overflow-visible relative image-container-extended">
                    <div className="absolute left-0 top-0 h-full w-full bg-green-50 image-clip rounded-r-md">
                        <Image
                            src="/img/Zierkirsche_1_gespiegelt.jpg"
                            alt="Naturheilpraxis"
                            fill
                            className="object-cover"
                            quality={100}
                            priority
                        />
                    </div>
                </div>

                {/* Text-Inhalt */}
                <div
                    className="relative flex items-center justify-end w-full md:w-3/5 lg:w-1/2 md:ml-auto px-6 lg:px-2 py-12 md:py-0 z-10">
                    <div className="max-w-2xl pr-12">
                        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                            Ganzheitliche <span className="text-green-600">Naturheilkunde</span> für nachhaltige
                            Gesundheit
                        </h1>
                        <p className="text-base text-gray-600 mb-8 leading-relaxed">
                            Wir behandeln Ursachen, nicht Symptome. Mit natürlichen Verfahren aktivieren wir Ihre
                            Selbstheilungskräfte für langfristige Gesundheit.
                        </p>
                        <button
                            className="text-base px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 font-light cursor-pointer"
                            onClick={() => onSectionClick('kontakt')}>
                            Termin vereinbaren
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
