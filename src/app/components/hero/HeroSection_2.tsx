'use client';
import Image from 'next/image';
import './hero_2.css';
import React from "react";

interface HeroSectionProps {
    onSectionClick: (sectionId: string) => void;
}

const HeroSection = ({ onSectionClick }: HeroSectionProps) => {
    return (
        <>

            {/* SVG clip-path Definition für elegante Bögen oben und unten */}
            <svg width="0" height="0">
                <defs>
                    {/* Nur oben ein Bogen, unten gerade */}
                    {/*
                        M 0,0.06 - Start links oben bei 6% von oben
                        Q 0.5,-0.02 1,0.06 - Bogen nach oben in der Mitte
                        L 1,1 - Gerade Linie nach rechts unten (100%)
                        L 0,1 - Gerade Linie nach links unten
                        Z - Pfad schließen
                    */}
                    <clipPath id="curve-clip-horizontal" clipPathUnits="objectBoundingBox">
                        {/*<path d="M 0,0.06 Q 0.5,-0.02 1,0.06 L 1,1 L 0,1 Z"/>*/}
                        {/*<path d="M 0,0.06 Q 0.5,-0.02 1,0.06 L 1,0.94 Q 0.5,1.02 0,0.94 Z"/>*/}
                        <path d="M 0,0.06 Q 0.5,-0.0 1,0.0 L 1,0.94 Q 0.5,1.02 0,0.94 Z"/>
                        {/*<path d="M 0,0.00 Q 0.5,-0.0 1,0.0 L 1,0.94 Q 0.5,1.02 0,0.94 Z"/>*/}
                    </clipPath>
                </defs>
            </svg>


            {/* SVG clip-path Definition für elegante Bögen oben und unten */}
            <svg width="0" height="0">
                <defs>
                    {/* Nur oben ein Bogen, unten gerade */}
                    {/*
                        M 0,0.06 - Start links oben bei 6% von oben
                        Q 0.5,-0.02 1,0.06 - Bogen nach oben in der Mitte
                        L 1,1 - Gerade Linie nach rechts unten (100%)
                        L 0,1 - Gerade Linie nach links unten
                        Z - Pfad schließen
                    */}
                    <clipPath id="curve-clip-horizontal-mobile" clipPathUnits="objectBoundingBox">
                        {/*<path d="M 0,0.06 Q 0.5,-0.02 1,0.06 L 1,1 L 0,1 Z"/>*/}
                        {/*<path d="M 0,0.06 Q 0.5,-0.02 1,0.06 L 1,0.94 Q 0.5,1.02 0,0.94 Z"/>*/}
                        <path d="M 0,0.03 Q 0.5,-0.0 1,0.0 L 1,0.96 Q 0.5,1.01 0,0.96 Z"/>
                        {/*<path d="M 0,0.00 Q 0.5,-0.0 1,0.0 L 1,0.94 Q 0.5,1.02 0,0.94 Z"/>*/}
                    </clipPath>
                </defs>
            </svg>

            {/* Trenn-Abschnitt mit Hintergrundbild */}
            {/*<section id="home" className="">*/}
            {/*    <div className="relative h-80 md:h-130 w-full overflow-visible">*/}
            <section id="home" className="md:flex md:flex-col">
                <div className="relative h-80 md:h-[calc(100vh-150px)] max-h-[650px] w-full overflow-visible">
                    {/* Bild-Container mit clip-path für abgerundete Kanten */}
                    <div className="absolute inset-0 image-clip-horizontal bg-green-500 ">
                        <Image
                            src="/img/Blumenwiese_1_zg.jpg"
                            alt="Naturheilpraxis"
                            fill
                            className="object-cover object-[50%_90%]"
                            quality={100}
                        />


                        {/* Text-Inhalt */}
                        {/*bg-black/20*/}
                        <div
                            className="absolute top-0 right-0 bottom-0 w-full md:w-3/5 lg:w-1/2 flex items-center pb-8 justify-center px-6  lg:px-12 bg-black/25 z-10">
                            {/* text-center*/}
                            <div className="max-w-2xl text-white lg:ml-0 sm:ml-4 ml-2">
                                <div
                                    className="text-4xl md:text-4xl font-normal md:font-medium leading-tight hanging-quote mb-0">
                                    Gesundheit ist nicht alles,<br className="hidden md:block"/> aber ohne Gesundheit ist
                                    alles nichts
                                </div>
                                {/*text-gray-600*/}
                                <p className="text-normal mb-6 leading-relaxed mt-2">
                                    - Arthur Schopenhauer (1788-1860) -
                                </p>

                            </div>
                        </div>
                    </div>
                    {/* Optionaler Text-Overlay */}
                    {/*<div className="absolute inset-0 flex items-center justify-center">*/}
                    {/*    <h2 className="text-3xl md:text-4xl font-light text-white text-center px-6">*/}
                    {/*        Ihr Zitat oder Text hier*/}
                    {/*    </h2>*/}
                    {/*</div>*/}
                </div>

                <div className="mt-10 md:my-3 flex justify-center">
                    <button
                        className="text-base px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 font-light cursor-pointer ring-1 ring-green-500"
                        onClick={() => onSectionClick('kontakt')}>
                        Termin anfragen
                    </button>
                </div >
            </section>
        </>
    );
};

export default HeroSection;
