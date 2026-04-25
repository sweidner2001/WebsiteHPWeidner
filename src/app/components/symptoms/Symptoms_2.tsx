import React from 'react';
import {SectionHeader, ISectionHeaderProps} from '@/app/components/ui/SectionHeader';
import {useLazy} from "@/app/hooks/useLazy";
import Image from 'next/image';

interface ISymptom {
    title: string;
    icon: React.ReactNode;
}

interface ISymptomConfig {
    iconBgColor: string;
    iconBgColorHover: string;
}

const iconSize: number = 52

const symptoms: ISymptom[] = [
    {
        title: 'Beschwerden am Bewegungsapparat',
        icon: <Image src="/IconSymptoms/broken-bone.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Schmerzen aller Art',
        icon: <Image src="/IconSymptoms/pain.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Magen-Darm-Erkrankungen',
        icon: <Image src="/IconSymptoms/diarrhea.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Allergien',
        icon: <Image src="/IconSymptoms/antihistamines.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Infektanfälligkeit',
        icon: <Image src="/IconSymptoms/sick.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Herz-Kreislauf-Beschwerden',
        icon: <Image src="/IconSymptoms/dizzy.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Hauterkrankungen',
        icon: <Image src="/IconSymptoms/allergy.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Frauenbeschwerden',
        icon: <Image src="/IconSymptoms/stress.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Erschöpfungs\u00ADsyndrome',
        icon: <Image src="/IconSymptoms/tiredness.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
    {
        title: 'Schlafstörungen',
        icon: <Image src="/IconSymptoms/sleep-disorder.svg" alt="Bild" width={iconSize} height={iconSize} />,
    },
];


const sectionHeaderProbs: ISectionHeaderProps = {
    title: "Ich behandle und unterstütze bei …",
    className: 'md:mb-12 mb-10',
    // description: 'Mit einem ganzheitlichen Blick auf Ihren Körper finden wir gemeinsam den Weg zu mehr Wohlbefinden und nachhaltiger Gesundheit.',
    // classNameDescription: 'text-sm text-gray-500 font-light max-w-xl mx-auto'
}



const Symptoms_2: React.FC<ISymptomConfig> = ({...symptomsProbs}) => {
    useLazy();
    return (
        <section
            id="symptome"
            className="py-20 bg-gradient-to-b from-white to-stone-50"
        >
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

                {/* Heading */}
                <SectionHeader {...sectionHeaderProbs} />

                {/* Symptom Grid – Zentriertes Design */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-5 gap-4 max-w-6xl lg:mx-auto md:mx-16 sm:mx-4 mx-0">
                    {symptoms.map((symptom, index) => {
                        return (
                            <div
                                key={index}
                                // data-aos="soft-up"
                                // data-aos-delay={index * 50}
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
                                <h3 className="text-base font-light text-gray-800 leading-snug px-1 sm:px-2">
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
