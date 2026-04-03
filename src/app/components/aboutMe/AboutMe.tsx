'use client';
import Image from 'next/image';
import React from 'react';
import {SectionHeader, ISectionHeaderProps} from '@/app/components/ui/SectionHeader';

interface IAboutProps {
    title?: string;
    subtitle?: string;
    name: string;
    description?: (string | string[])[];        // wird ein Array im Array übergeben, werden die Texte als Bullet-Points gerendert
    imageSrc: string;
    imageAlt: string;
    onlyRoundImage?: boolean;
    showHeading?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}




const sectionHeaderProbs: ISectionHeaderProps = {
    title: "Über mich",
    className: 'mb-8',
}



// Hilfsfunktion für List-Rendering mit <br /> zwischen den Einträgen oder als Stichpunkte
const renderList = (list?: (string | string[])[], asBulletPoints: boolean = false) => {
    if (asBulletPoints) {
        return (
            <ul className="text-lg text-gray-600 font-light space-y-1">
                {list?.map((line, index) => {
                    // Wenn line ein Array ist, rendere es als verschachtelte Bullet-Points
                    if (Array.isArray(line)) {
                        return (
                            <li key={index}>
                                <ul className="ml-5 space-y-2">
                                    {line.map((subItem, subIndex) => (
                                        <li key={`${index}-${subIndex}`} className="flex items-center">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    }

                    // Normales Rendering für strings
                    return (
                        <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                            {line}
                        </li>
                    );
                })}
            </ul>
        );
    }

    return list?.map((line, index) => {
        // Wenn line ein Array ist, rendere es als Bullet-Points
        if (Array.isArray(line)) {
            return (
                <div key={index} className="mb-4">
                    <ul className="ml-5 space-y-1">
                        {line.map((subItem, subIndex) => (
                            <li key={`${index}-${subIndex}`} className="flex items-center text-gray-600 font-light">
                                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                                {subItem}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        // Normales Rendering für strings
        return (
            <p key={index} className="text-gray-600 mt-4 mb-1 font-light">
                {line}
            </p>
        );
    });
};

const AboutMe: React.FC<IAboutProps> = ({...aboutProbs}) => {
    return (

        <div className="container mx-auto px-6">
            {/* SVG clip-path Definition für "Über mich" Section */}
            <svg width="0" height="0">
                <defs>
                    {/* Ovale/Elliptische Form */}
                    <clipPath id="curve-clip-about" clipPathUnits="objectBoundingBox">
                        {/*
                            Ellipse mit smooth Kurven für ein Oval
                            M 0.5,0 - Start oben in der Mitte
                            Q 1,0 1,0.5 - Kurve nach rechts oben
                            Q 1,1 0.5,1 - Kurve nach rechts unten
                            Q 0,1 0,0.5 - Kurve nach links unten
                            Q 0,0 0.5,0 - Kurve nach links oben
                            Z - Pfad schließen
                        */}
                        <path d="M 0.5,0 Q 1,0 1,0.5 Q 1,1 0.5,1 Q 0,1 0,0.5 Q 0,0 0.5,0 Z"/>
                    </clipPath>
                </defs>
            </svg>


            {/* Header */}
            {/*{aboutProbs.showHeading && aboutProbs.title &&*/}
            {/*    <SectionHeading title={aboutProbs.title} />*/}
            {/*}*/}
            {aboutProbs.showHeading &&
                <SectionHeader {...sectionHeaderProbs} />
            }


            {/* Content */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:gap-14 gap-4">
                {/* Runder Kreis kleiner als lg Breakpoint */}
                <div className={`${!aboutProbs.onlyRoundImage ? 'lg:hidden' : ''} lg:flex-1 flex justify-center items-center`}>
                    <div className="px-8 py-8 w-96 h-96 lg:w-120 lg:h-120 md:w-110 md:h-110 rounded-full flex items-center justify-center overflow-hidden aspect-square flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-green-100 flex items-center justify-center relative overflow-hidden">
                            <Image
                                src={aboutProbs.imageSrc}
                                alt={aboutProbs.imageAlt}
                                fill
                                className="object-cover object-[35%_50%]"
                                quality={100}
                            />
                        </div>
                    </div>
                </div>

                {/* Ovales Bild ab lg Breakpoint */}
                <div className={`${!aboutProbs.onlyRoundImage ? 'lg:flex lg:flex-1' : ''} hidden  justify-center items-center`}>
                    <div className="relative h-96 md:h-120 w-96 md:w-120 bg-green-50 image-clip-about overflow-hidden">
                        <Image
                            src={aboutProbs.imageSrc}
                            alt={aboutProbs.imageAlt}
                            fill
                            className="object-cover object-[35%_70%]"
                            quality={100}
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="lg:flex-1">
                    <h2 className="text-3xl font-light text-gray-800 mb-6">{aboutProbs.name}</h2>
                    {aboutProbs.subtitle && <p className="text-sm text-green-600 mb-4 font-light">{aboutProbs.subtitle}</p>}

                    {aboutProbs.description && renderList(aboutProbs.description)}
                    {aboutProbs.onButtonClick &&
                    <button
                        onClick={aboutProbs.onButtonClick}
                        className="text-base px-8 mt-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 font-light cursor-pointer"
                    >
                        {aboutProbs.buttonText}
                    </button>
                    }
                </div>
            </div>
        </div>

    );
};
export {
    AboutMe,
}
export type {
    IAboutProps
}