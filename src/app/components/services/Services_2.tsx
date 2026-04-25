import React from 'react';
import {SectionHeader, ISectionHeaderProps} from '@/app/components/ui/SectionHeader';
import {useLazy} from "@/app/hooks/useLazy";

interface IService {
    title: string;
    description: string[];
    icon: React.ReactNode;
    theme: 'dark-green' | 'earth' | 'light' | 'dark' | 'light_2' | 'rose' | 'rose_2';
    span: string; // tailwind col/row span classes
}

const services: IService[] = [
    {
        title: 'Akupunktur',
        description: ['Traditionelle chinesische Medizin zur Harmonisierung des Energieflusses. Schmerz ist der Schrei nach fließender Energie. Akkupunktur trägt damit zur und Linderung verschiedener Beschwerden bei.'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        theme: 'dark',
        span: 'lg:col-span-2 md:col-span-3 md:row-span-1 lg:order-1 md:order-1 order-1',
    },
    {
        title: 'Osteopathie (Cranio-Sacral)',
        description: [  //Alternativer Pfeil: \u2794
            'Die Cranio-Sacrale-Osteopathie ist ein Teilgebiet der Osteopathie. Diese sanfte Behandlungsform wirkt sehr tief auf Körper und Seele. Sie eignet sich folglich zur Behandlung einer Vielzahl an Beschwerden wie beispielsweise Schlafstörungen, Kopfschmerzen, Bandscheibenproblemen, Gelenkbeschwerden, Konzentrationsschwierigkeiten, Stress und Erschöpfungszuständen. Es wird eine tiefe Entspannung gefördert.',
            '\u27A4 Wenn die Gelenke frei sind, macht der Körper den Rest!'
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        theme: 'light',
        span: 'lg:col-span-4 md:col-span-6 md:row-span-1 lg:order-2 md:order-3 order-2',
    },
    {
        title: 'Dorn- und Breusstherapie',
        description: ['Eine schonende Wirbelsäulen- und Gelenkbehandlung zur Korrektur von Fehlstellungen und Entlastung des Bewegungsapparates nach ihrem Begründer Dieter Dorn.'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        theme: 'light',
        span: 'lg:col-span-2 md:col-span-3 md:row-span-1 lg:order-3 md:order-2 order-3',
    },
    {
        title: 'Schröpfkopfbehandlung',
        description: ['Schröpfen zählt zu den traditionellen Ausleitungsverfahren in der Naturheilkunde. Durch Unterdruck lösen sich Muskelverspannungen und Verklebungen der Faszien. Die Durchblutung des Körpers wird gefördert und damit der Abtransport von Schlacken begünstigt.'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v18M9 6l3-3 3 3M9 18l3 3 3-3" />
            </svg>
        ),
        theme: 'dark-green',
        span: 'lg:col-span-4 md:col-span-6 md:row-span-1 lg:order-4 md:order-4 order-4',
    },
    {
        title: 'Phytotherapie',
        description: ['Die Pflanzenheilkunde ist so alt wie die Menschheit und hat einen hohen Stellenwert in der Medizin. Der Einsatz von Heilpflanzen bewirkt eine natürliche Unterstützung von körperlichen und seelischen Prozessen.'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        theme: 'earth',
        span: 'lg:col-span-2 md:col-span-3 md:row-span-1 lg:order-5 md:order-5 order-5',
    },
    {
        title: 'Homöopathie',
        description: ['Durch natürliche Wirkstoffe in homöopathischen Verdünnungen - den sogenannten Potenzen - wird neben Symptomen und akuten Beschwerden auch der Mensch als Ganzes behandelt. Durch Individuell abgestimmte homöopathische Mittel werden dabei die körpereigenen Selbstheilungskräfte aktiviert.'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        theme: 'light',
        span: 'lg:col-span-4 md:col-span-6 md:row-span-1 lg:order-6 md:order-7 order-6',
    },
    {
        title: 'Spagyrik',
        description: ['Speziell aufbereitete Essenzen aus Pflanzen, die Körper, Geist und Seele ansprechen und das natürliche Gleichgewicht wieder herstellen.'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        theme: 'light',
        span: 'lg:col-span-2 md:col-span-3 md:row-span-1 lg:order-7 md:order-5 order-7',
    },
    {
        title: 'Kinderheilkunde',
        description: ['Sanfte naturheilkundliche Begleitung von Kindern zur Förderung einer gesunden Entwicklung.'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        theme: 'dark',
        span: 'lg:col-span-2 md:col-span-3 md:row-span-1 lg:order-8 md:order-8 order-8',
    },
    {
        title: 'Frauenheilkunde',
        description: ['Natürliche Unterstützung für hormonelle Balance und Wohlbefinden in allen Lebensphasen der Frau.'],
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        theme: 'rose',
        span: 'lg:col-span-2 md:col-span-3 md:row-span-1 lg:order-9 md:order-9 order-9',
    },
];

const themeClasses: Record<IService['theme'], { card: string; icon: string; title: string; text: string; line: string; num: string }> = {
    'dark-green': {
        // #1f4535
        card: 'bg-[#255340] hover:bg-[#214b39]',
        icon: 'border-[#2d6a4f] text-emerald-200',
        title: 'text-white',
        text: 'text-emerald-100/70',
        line: 'bg-emerald-600',
        num: 'text-emerald-700',
    },
    'earth': {
        card: 'bg-[#8B5E3C] hover:bg-[#9d6b46]',
        icon: 'border-[#a87a55] text-amber-100',
        title: 'text-white',
        text: 'text-amber-100/70',
        line: 'bg-amber-400',
        num: 'text-amber-200/50',
    },
    'light': {
        card: 'bg-white hover:bg-white',
        icon: 'border-stone-300 text-[#1a3a2e]',
        title: 'text-gray-800',
        text: 'text-gray-500',
        line: 'bg-[#1a3a2e]',
        num: 'text-stone-300',
    },
    'dark': {
        card: 'bg-[#1c1c1b] hover:bg-[#252523]',
        icon: 'border-stone-600 text-stone-300',
        title: 'text-white',
        text: 'text-stone-300/80',
        line: 'bg-stone-500',
        num: 'text-stone-600',
    },
    // 'dark': {
    //     card: 'bg-[#2c2c2a] hover:bg-[#363633]',
    //     title: 'text-white',
    //     text: 'text-stone-300/73',
    //     // text: 'text-stone-400',
    //     line: 'bg-stone-500',
    //     icon: 'border-stone-600 text-stone-300',
    //     num: 'text-stone-600',
    // },
    'light_2': {
        card: 'bg-[#f5f0e8] hover:bg-white border border-stone-200',
        title: 'text-gray-800',
        text: 'text-gray-500',
        line: 'bg-[#4a6741]',
        icon: 'border-stone-300 text-[#4a6741]',
        num: 'text-stone-300',
    },
    'rose': {
        card: 'bg-[#6b3a4a] hover:bg-[#7d4458]',
        icon: 'border-[#9d6070] text-rose-100',
        title: 'text-white',
        text: 'text-rose-100/70',
        line: 'bg-rose-300',
        num: 'text-rose-800',
    },
    'rose_2': {
        card: 'bg-[#f3e0e6] hover:bg-[#FFEBF1] border border-rose-100',
        icon: 'border-rose-300 text-rose-500',
        title: 'text-rose-900',
        text: 'text-rose-700/70',
        line: 'bg-rose-400',
        num: 'text-rose-200',
    },
};

const sectionHeaderProbs: ISectionHeaderProps = {
    title: "Meine Leistungen",
    titleSize: 'text-4xl',
    description: "Jede Behandlung ist individuell auf Sie abgestimmt – für nachhaltige Gesundheit auf natürlichem Weg.",
}


const Services_2 = () => {
    useLazy();
    return (
        <section id="leistungen" className="py-24 bg-stone-100 lazy">
            {/*<section id="leistungen" className="py-24" style={{ background: 'linear-gradient(to bottom, #e7e5e4 0px, #f5f4f2 40px, #f5f4f2 100%)' }}>*/}
            <div className="container mx-auto md:px-16 sm:px-20 px-5 max-w-6xl">

                {/* Heading */}
                <SectionHeader {...sectionHeaderProbs} />

                {/* Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {services.map((service, index) => {
                        const t = themeClasses[service.theme];
                        return (
                            <div
                                key={index}
                                className={`group rounded-2xl p-7 flex flex-col justify-between transition-colors md:min-h-[220px] min-h-[200px] duration-500 cursor-default ${service.span} ${t.card}`}
                            >
                                {/* Top row: icon + number */}
                                {/*<div className="flex items-start justify-between">*/}
                                {/*    /!*<div className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${t.icon}`}>*!/*/}
                                {/*    /!*    {service.icon}*!/*/}
                                {/*    /!*</div>*!/*/}
                                {/*    <span className={`text-xs font-light tracking-widest ${t.num}`}>*/}
                                {/*        {String(index + 1).padStart(2, '0')}*/}
                                {/*    </span>*/}
                                {/*</div>*/}

                                {/* Bottom: line + title + description */}
                                <div>
                                    <h3 className={`text-xl font-light mb-2.5 tracking-wide ${t.title}`}>
                                        {service.title}
                                    </h3>
                                    <div className={`w-8 h-px mb-4 group-hover:w-14 transition-all duration-500 ${t.line}`}></div>
                                    <div className="space-y-2">
                                        {service.description.map((paragraph, idx) => (
                                            <p key={idx} lang="de" className={`text-base font-[350] text-justify hyphens-auto leading-relaxed ${t.text}`}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services_2;
