'use client';
import Image from 'next/image';
import './SeperatorSection.css';
import React from "react";
import {useLazy} from "@/app/hooks/useLazy";



const SeperatorSection = () => {
    useLazy();
    return (
        <>

            {/* SVG clip-path Definition für elegante Bögen oben und unten */}
            <svg width="0" height="0">
                <defs>
                    <clipPath id="curve-clip-seperator" clipPathUnits="objectBoundingBox">
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
                    <clipPath id="curve-clip-seperator-mobile" clipPathUnits="objectBoundingBox">
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
            <section id="home" className="md:flex md:flex-col  overflow-hidden pt-16 pb-20" style={{background: 'linear-gradient(to bottom, var(--color-stone-100, #f5f5f4) 0%, white 50%)' }}>
                <div className="relative h-80 md:h-[calc(100vh-150px)] max-h-[430px] w-full overflow-hidden lazy">
                    {/* Bild-Container mit clip-path für abgerundete Kanten */}
                    <div className="absolute inset-0 [clip-path:url(#curve-clip-seperator-mobile)] md:[clip-path:url(#curve-clip-seperator)] bg-green-50" >
                        <Image
                            src="/img/Blumenwiese_1_zg.jpg"
                            alt="Naturheilpraxis"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-[50%_90%]"
                            quality={100}
                        />


                        {/* Text-Inhalt */}
                        {/*bg-black/20*/}
                        <div
                            className="absolute top-0 right-0 bottom-0 w-full md:w-3/5 lg:w-1/2 flex items-center pb-8 justify-center px-6 lg:px-10 bg-black/25 z-10"
                            >
                            {/* text-center*/}
                            <div className="max-w-2xl text-white lg:ml-0 sm:ml-4 ml-2">
                                <div lang="de"
                                    className="text-3xl sm:text-4xl md:text-4xl font-normal md:font-normal leading-tight hanging-quote mb-0 ">
                                    Gesundheit ist nicht alles, <br className="hidden sm:block"/> aber ohne Gesund&shy;heit ist
                                    alles nichts
                                </div>
                                {/*text-gray-600*/}
                                <p className="text-normal mb-6 leading-relaxed mt-2">
                                    —  Arthur Schopenhauer (1788–1860)
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default SeperatorSection;
