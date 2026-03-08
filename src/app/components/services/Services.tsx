import React from 'react';

interface IService {
    title: string;
    description: string;
    icon: React.ReactNode;
    size: 'small' | 'medium' | 'large';
}

const services: IService[] = [
    {
        title: 'Pflanzenheilkunde',
        description: 'Heilpflanzen begleiten die Menschheit seit Jahrtausenden. In meiner Praxis setze ich gezielt pflanzliche Wirkstoffe ein – als Tees, Tinkturen oder Extrakte – um die natürlichen Heilungsprozesse Ihres Körpers sanft zu unterstützen. Jede Anwendung wird individuell auf Ihre Konstitution und Beschwerden abgestimmt. Dabei greife ich auf ein umfassendes Wissen klassischer und moderner Phytotherapie zurück.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        size: 'large',
    },
    {
        title: 'Homöopathie',
        description: 'Die klassische Homöopathie behandelt den Menschen in seiner Gesamtheit – körperlich, geistig und seelisch. Nach einer ausführlichen Anamnese wähle ich das individuell passende Mittel aus, das Ihre Selbstheilungskräfte gezielt aktiviert. Die sanfte Wirkweise eignet sich für alle Altersgruppen, vom Kleinkind bis ins hohe Alter. Besonders bei chronischen Beschwerden zeigt die Homöopathie beeindruckende Ergebnisse.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        size: 'large',
    },
    {
        title: 'Ernährungsberatung',
        description: 'Eine ausgewogene, auf Ihre persönlichen Bedürfnisse abgestimmte Ernährung ist die Basis für Ihre Gesundheit. Ich erstelle individuelle Ernährungskonzepte, die wissenschaftliche Erkenntnisse mit naturheilkundlichen Prinzipien verbinden. Gemeinsam erarbeiten wir praxisnahe Lösungen für Ihren Alltag.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        size: 'medium',
    },
    {
        title: 'Ausleitende Verfahren',
        description: 'Schröpfen, Cantharidenpflaster und weitere klassische Ausleitungsverfahren helfen dem Körper, Stoffwechselprodukte und Belastungen gezielt abzubauen. Diese bewährten Methoden regen Durchblutung und Lymphfluss an und fördern die körpereigene Entgiftung nachhaltig.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        size: 'medium',
    },
    {
        title: 'Neuraltherapie',
        description: 'Durch gezielte Injektionen von Lokalanästhetika werden Störfelder im Körper behandelt und das vegetative Nervensystem reguliert. Besonders bei chronischen Schmerzen zeigt diese Methode schnelle und nachhaltige Wirkung.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        size: 'medium',
    },
    {
        title: 'Akupunktur',
        description: 'Die traditionelle chinesische Akupunktur setzt feine Nadeln an definierten Punkten, um den Energiefluss im Körper zu harmonisieren.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18M9 6l3-3 3 3M9 18l3 3 3-3" />
            </svg>
        ),
        size: 'small',
    },
    {
        title: 'Infusionstherapie',
        description: 'Hochdosierte Vitamin- und Mineralstoffinfusionen stärken das Immunsystem und fördern die Regeneration.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        size: 'small',
    },
    {
        title: 'Eigenbluttherapie',
        description: 'Die Eigenbluttherapie nutzt körpereigene Substanzen zur gezielten Immunstimulation und Selbstheilung.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        size: 'small',
    },
    {
        title: 'Darmgesundheit',
        description: 'Ein gesunder Darm ist die Grundlage für das gesamte Wohlbefinden und ein starkes Immunsystem.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        size: 'small',
    },
];

const sizeClasses: Record<IService['size'], string> = {
    large: 'md:col-span-2',
    medium: 'md:col-span-1',
    small: 'md:col-span-1',
};

const Services = () => {
    return (
        <section id="leistungen" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Heading */}
                <div className="text-center mb-20">
                    <p className="text-xs tracking-[0.3em] uppercase text-green-700 mb-4 font-light">Naturheilkunde</p>
                    <h2 className="text-4xl font-light text-gray-800 mb-5 tracking-wide">Meine Leistungen</h2>
                    <div className="w-12 h-px bg-green-600 mx-auto mb-6"></div>
                    <p className="text-gray-500 font-light max-w-xl mx-auto text-sm leading-relaxed">
                        Jede Behandlung ist individuell auf Sie abgestimmt – für nachhaltige Gesundheit auf natürlichem Weg.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group bg-stone-50 hover:bg-white transition-colors duration-500 p-8 lg:p-10 ${sizeClasses[service.size]}`}
                        >
                            {/* Icon + Nummer */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-10 h-10 rounded-full border border-green-200 flex items-center justify-center text-green-700 group-hover:border-green-500 group-hover:bg-green-50 transition-all duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-xs text-stone-300 font-light tracking-widest mt-1">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Trennlinie */}
                            <div className="w-8 h-px bg-green-300 mb-5 group-hover:w-14 transition-all duration-500"></div>

                            {/* Titel */}
                            <h3 className="text-lg font-light text-gray-800 mb-3 tracking-wide">
                                {service.title}
                            </h3>

                            {/* Beschreibung */}
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
