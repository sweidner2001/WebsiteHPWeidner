'use client';
import Image from 'next/image';
import React from 'react';

interface IAboutProps {
    title?: string;
    subtitle?: string;
    name: string;
    description1: string;
    description2: string;
    imageSrc: string;
    imageAlt?: string;
    onlyRoundImage?: boolean;
    showHeading?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}

const AboutMe: React.FC<IAboutProps> = ({...aboutProbs}) => {
    const {
        title = 'Über mich',
        subtitle,
        name,
        description1,
        description2,
        imageSrc,
        imageAlt = 'Naturheilpraxis',
        onlyRoundImage = false,
        showHeading = true,
        buttonText = 'Mehr erfahren',
        onButtonClick
    } = aboutProbs;

    return (

        <div className="container mx-auto px-6">
            {/* Header */}
            {showHeading &&
            <div className="text-center mb-16">
                <h2 className="text-3xl font-light text-gray-800 mb-4">{title}</h2>
                <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
            </div>
            }

            {/* Content */}
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:gap-14 gap-4">
                {/* Runder Kreis kleiner als lg Breakpoint */}
                <div className={`${!aboutProbs.onlyRoundImage ? 'lg:hidden' : ''} lg:flex-1 flex justify-center items-center`}>
                    <div className="px-8 py-8 w-96 h-96 lg:w-120 lg:h-120 md:w-110 md:h-110 rounded-full flex items-center justify-center overflow-hidden aspect-square flex-shrink-0">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-green-100 to-green-100 flex items-center justify-center relative overflow-hidden">
                            <Image
                                src={aboutProbs.imageSrc}
                                alt={aboutProbs.imageAlt || 'Naturheilpraxis'}
                                fill
                                className="object-cover object-[35%_70%]"
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
                            alt={aboutProbs.imageAlt || 'Naturheilpraxis'}
                            fill
                            className="object-cover object-[35%_70%]"
                            quality={100}
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="lg:flex-1">
                    <h2 className="text-3xl font-light text-gray-800 mb-6">{name}</h2>
                    {subtitle && <p className="text-sm text-green-600 mb-4 font-light">{subtitle}</p>}
                    <p className="text-gray-600 mb-4 font-light">
                        {description1}
                    </p>
                    <p className="text-gray-600 font-light mb-8">
                        {description2}
                    </p>
                    {onButtonClick &&
                    <button
                        onClick={onButtonClick}
                        className="text-base px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 font-light cursor-pointer"
                    >
                        {buttonText}
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