import React from 'react';
import {SectionHeading} from "@/app/components/ui/SectionHeading";
import {SectionHeader, ISectionHeaderProps} from '@/app/components/ui/SectionHeader';


interface ISymptom {
    title: string;
    icon: React.ReactNode;
}

interface ISymptomConfig {
    iconBgColor: string;
    iconBgColorHover: string;
}



const symptoms: ISymptom[] = [
    {
        title: 'Beschwerden am Bewegungsapparat',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M14.5 6.5a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 8.5v4.5m0 0l-2 4m2-4l2 4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M8 13h2m4 0h2" />
            </svg>
        ),
    },
    {
        title: 'Schmerzen aller Art',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
        ),
    },
    {
        title: 'Magen-Darm-Erkrankungen',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M9 3c0 0-3 2-3 6s2 5 2 8c0 2 1 4 4 4s4-2 4-4c0-3 2-4 2-8S15 3 15 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M9 3h6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M10 10c.5 1 1.5 1.5 2 1.5s1.5-.5 2-1.5" />
            </svg>
        ),
    },
    {
        title: 'Allergien',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 3c-1.5 3-5 4-5 8a5 5 0 0010 0c0-4-3.5-5-5-8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M8.5 17.5c.5 1.5 1.8 2.5 3.5 2.5s3-.5 3.5-2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 8v4" />
            </svg>
        ),
    },
    {
        title: 'Infektanfälligkeit',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" strokeWidth="1.3" strokeLinecap="round" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 2v2m0 16v2M2 12h2m16 0h2M5.636 5.636l1.414 1.414m9.9 9.9 1.414 1.414M5.636 18.364l1.414-1.414m9.9-9.9 1.414-1.414" />
                <circle cx="12" cy="12" r="2" strokeWidth="1.3" />
            </svg>
        ),
    },
    {
        title: 'Herz-Kreislauf-Beschwerden',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M3 12h3l2-6 3 12 2-8 2 4h4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 21C7 17 3 14 3 9.5A4.5 4.5 0 0112 7a4.5 4.5 0 019 2.5c0 4.5-4 7.5-9 11.5z" />
            </svg>
        ),
    },
    {
        title: 'Hauterkrankungen',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M6.5 6.5C5 8 4 10 4 12c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2-.7-3.8-2-5.2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M8 9c.5-.8 1.2-1.5 2-2m1-3c0 0 .5 2 2 3s3 1 3 1" />
                <circle cx="15" cy="5" r="1.5" strokeWidth="1.3" />
                <circle cx="9.5" cy="14.5" r="1" strokeWidth="1.3" />
                <circle cx="13.5" cy="16" r="1" strokeWidth="1.3" />
                <circle cx="11" cy="12" r="1" strokeWidth="1.3" />
            </svg>
        ),
    },
    {
        title: 'Frauenbeschwerden',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" strokeWidth="1.3" strokeLinecap="round" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 12v8m-3-3h6" />
            </svg>
        ),
    },
    {
        title: 'Erschöpfungssyndrome',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 3v3m6.366 1.634-2.12 2.12M21 12h-3M17.657 18.657l-2.122-2.122M12 21v-3m-5.535-.343 2.122-2.122M3 12h3M6.343 5.636l2.122 2.122" />
                <circle cx="12" cy="12" r="3" strokeWidth="1.3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M12 12 9 9" />
            </svg>
        ),
    },
    {
        title: 'Schlafstörungen',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3"
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
        ),
    },
];


const sectionHeaderProbs: ISectionHeaderProps = {
    title: "Ich behandle und unterstütze bei …",
    // description: 'Mit einem ganzheitlichen Blick auf Ihren Körper finden wir gemeinsam den Weg zu mehr Wohlbefinden und nachhaltiger Gesundheit.',
    // classNameDescription: 'text-sm text-gray-500 font-light max-w-xl mx-auto'
}



const Symptoms_2: React.FC<ISymptomConfig> = ({...symptomsProbs}) => {
    return (
        <section
            id="beschwerden"
            className="py-20 bg-gradient-to-b from-white to-stone-50"
        >
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Heading */}
                <SectionHeader {...sectionHeaderProbs} />

                {/* Symptom Grid – Zentriertes Design */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-5 gap-4 max-w-6xl lg:mx-auto md:mx-16 sm:mx-4 mx-0">
                    {symptoms.map((symptom, index) => {
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                                className="text-center pt-3 lg:pb-6 pb-3 group transition-all duration-300 hover:transform hover:scale-105"
                            >
                                {/* Runder Icon-Container */}
                                {/*bg-green-400/10  bg-green-300/20  */}
                                <div className={`w-20 h-20 rounded-full ${symptomsProbs.iconBgColor} mx-auto mb-5 flex items-center justify-center ${symptomsProbs.iconBgColorHover} transition-all duration-300`}>
                                {/*<div className="w-20 h-20 rounded-full bg-stone-100 mx-auto mb-5 flex items-center justify-center group-hover:bg-[#00a63e]/10 transition-all duration-300">*/}
                                    <div className="text-[#00a63e]">
                                        {symptom.icon}
                                    </div>
                                </div>

                                {/* Titel */}
                                <h3 className="text-base font-light text-gray-800 leading-snug px-2">
                                    {symptom.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export {
    Symptoms_2
}
export type {
    ISymptomConfig
}
