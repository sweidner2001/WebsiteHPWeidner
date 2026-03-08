import React from 'react';

interface IService {
    title: string;
    description: string;
    icon: React.ReactNode;
    theme: 'dark-green' | 'earth' | 'light' | 'dark';
    span: string; // tailwind col/row span classes
}

const services: IService[] = [
    {
        title: 'Pflanzenheilkunde',
        description: 'Heilpflanzen begleiten die Menschheit seit Jahrtausenden. In meiner Praxis setze ich gezielt pflanzliche Wirkstoffe ein – als Tees, Tinkturen oder Extrakte – um die natürlichen Heilungsprozesse Ihres Körpers sanft zu unterstützen. Jede Anwendung wird individuell auf Ihre Konstitution und Beschwerden abgestimmt. Dabei greife ich auf ein umfassendes Wissen klassischer und moderner Phytotherapie zurück.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        theme: 'earth',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Homöopathie',
        description: 'Die klassische Homöopathie behandelt den Menschen in seiner Gesamtheit – körperlich, geistig und seelisch. Nach einer ausführlichen Anamnese wähle ich das individuell passende Mittel aus, das Ihre Selbstheilungskräfte gezielt aktiviert. Die sanfte Wirkweise eignet sich für alle Altersgruppen, vom Kleinkind bis ins hohe Alter. Besonders bei chronischen Beschwerden zeigt die Homöopathie beeindruckende Ergebnisse.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        theme: 'dark-green',
        span: 'md:col-span-2 md:row-span-1',
    },
    {
        title: 'Akupunktur',
        description: 'Die traditionelle chinesische Akupunktur setzt feine Nadeln an definierten Punkten, um den Energiefluss im Körper zu harmonisieren.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v18M9 6l3-3 3 3M9 18l3 3 3-3" />
            </svg>
        ),
        theme: 'light',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Ernährungsberatung',
        description: 'Eine ausgewogene, auf Ihre persönlichen Bedürfnisse abgestimmte Ernährung ist die Basis für Ihre Gesundheit. Ich erstelle individuelle Ernährungskonzepte, die wissenschaftliche Erkenntnisse mit naturheilkundlichen Prinzipien verbinden. Gemeinsam erarbeiten wir praxisnahe Lösungen für Ihren Alltag.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        theme: 'dark',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Ausleitende Verfahren',
        description: 'Schröpfen, Cantharidenpflaster und weitere klassische Ausleitungsverfahren helfen dem Körper, Stoffwechselprodukte und Belastungen gezielt abzubauen. Diese bewährten Methoden regen Durchblutung und Lymphfluss an und fördern die körpereigene Entgiftung nachhaltig.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        theme: 'earth',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Neuraltherapie',
        description: 'Durch gezielte Injektionen von Lokalanästhetika werden Störfelder im Körper behandelt und das vegetative Nervensystem reguliert. Besonders bei chronischen Schmerzen zeigt diese Methode schnelle und nachhaltige Wirkung.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        theme: 'dark-green',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Infusionstherapie',
        description: 'Hochdosierte Vitamin- und Mineralstoffinfusionen stärken das Immunsystem und fördern die Regeneration.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        theme: 'light',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Eigenbluttherapie',
        description: 'Die Eigenbluttherapie nutzt körpereigene Substanzen zur gezielten Immunstimulation und Selbstheilung.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        theme: 'dark',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        title: 'Darmgesundheit',
        description: 'Ein gesunder Darm ist die Grundlage für das gesamte Wohlbefinden und ein starkes Immunsystem.',
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        theme: 'earth',
        span: 'md:col-span-1 md:row-span-1',
    },
];

const themeClasses: Record<IService['theme'], { card: string; icon: string; title: string; text: string; line: string; num: string }> = {
    'dark-green': {
        card: 'bg-[#1a3a2e] hover:bg-[#1f4535]',
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
        num: 'text-amber-800',
    },
    'light': {
        card: 'bg-stone-100 hover:bg-white',
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
        text: 'text-stone-400',
        line: 'bg-stone-500',
        num: 'text-stone-700',
    },
};

const Services_2 = () => {
    return (
        <section id="leistungen" className="py-24 bg-stone-100">
            <div className="container mx-auto px-16 max-w-6xl">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#2d6a4f] mb-4 font-light">Naturheilkunde</p>
                    <h2 className="text-4xl font-light text-gray-800 mb-5 tracking-wide">Meine Leistungen</h2>
                    <div className="w-12 h-px bg-[#2d6a4f] mx-auto mb-6"></div>
                    <p className="text-gray-500 font-light max-w-xl mx-auto text-sm leading-relaxed">
                        Jede Behandlung ist individuell auf Sie abgestimmt – für nachhaltige Gesundheit auf natürlichem Weg.
                    </p>
                </div>

                {/* Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-3">
                    {services.map((service, index) => {
                        const t = themeClasses[service.theme];
                        return (
                            <div
                                key={index}
                                className={`group rounded-2xl p-7 flex flex-col justify-between transition-colors duration-500 cursor-default ${service.span} ${t.card}`}
                            >
                                {/* Top row: icon + number */}
                                {/*<div className="flex items-start justify-between">*/}
                                {/*    /!*<div className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${t.icon}`}>*!/*/}
                                {/*    /!*    {service.icon}*!/*/}
                                {/*    /!*</div>*!/*/}
                                {/*    /!*<span className={`text-xs font-light tracking-widest ${t.num}`}>*!/*/}
                                {/*    /!*    {String(index + 1).padStart(2, '0')}*!/*/}
                                {/*    /!*</span>*!/*/}
                                {/*</div>*/}

                                {/* Bottom: line + title + description */}
                                <div>
                                    <h3 className={`text-lg font-light mb-2 tracking-wide ${t.title}`}>
                                        {service.title}
                                    </h3>
                                    <div className={`w-8 h-px mb-4 group-hover:w-14 transition-all duration-500 ${t.line}`}></div>
                                    <p className={`text-xs font-light leading-relaxed line-clamp-3 ${t.text}`}>
                                        {service.description}
                                    </p>
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
