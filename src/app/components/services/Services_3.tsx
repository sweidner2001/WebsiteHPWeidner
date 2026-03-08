import React from 'react';

interface IService {
    title: string;
    description: string;
    icon: React.ReactNode;
    theme: 'dark-green' | 'earth' | 'light' | 'dark';
    grid: string; // alle grid-placement klassen zusammen
    size: 'small' | 'medium' | 'large';
}

const services: IService[] = [
    // ── Groß (2) ──────────────────────────────────────────────
    {
        title: 'Pflanzenheilkunde',
        description: 'Heilpflanzen begleiten die Menschheit seit Jahrtausenden. In meiner Praxis setze ich gezielt pflanzliche Wirkstoffe ein – als Tees, Tinkturen oder Extrakte – um die natürlichen Heilungsprozesse Ihres Körpers sanft zu unterstützen. Jede Anwendung wird individuell auf Ihre Konstitution und Beschwerden abgestimmt. Dabei greife ich auf ein umfassendes Wissen klassischer und moderner Phytotherapie zurück.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>),
        theme: 'earth',
        // col 1–5 (5 von 12), row 1–3
        grid: 'md:col-start-1 md:col-span-5 md:row-start-1 md:row-span-2',
        size: 'large',
    },
    {
        title: 'Homöopathie',
        description: 'Die klassische Homöopathie behandelt den Menschen in seiner Gesamtheit – körperlich, geistig und seelisch. Nach einer ausführlichen Anamnese wähle ich das individuell passende Mittel aus, das Ihre Selbstheilungskräfte gezielt aktiviert. Die sanfte Wirkweise eignet sich für alle Altersgruppen. Besonders bei chronischen Beschwerden zeigt die Homöopathie beeindruckende Ergebnisse.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>),
        theme: 'dark-green',
        // col 8–12 (5 von 12), row 3–5 → versetzt nach rechts & tiefer
        grid: 'md:col-start-8 md:col-span-5 md:row-start-3 md:row-span-2',
        size: 'large',
    },

    // ── Mittel (3) ──────────────────────────────────────────────
    {
        title: 'Neuraltherapie',
        description: 'Durch gezielte Injektionen von Lokalanästhetika werden Störfelder im Körper behandelt und das vegetative Nervensystem reguliert. Besonders bei chronischen Schmerzen zeigt diese Methode schnelle und nachhaltige Wirkung.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
        theme: 'dark-green',
        // col 6–9 (4 von 12), row 1–2
        grid: 'md:col-start-6 md:col-span-4 md:row-start-1 md:row-span-2',
        size: 'medium',
    },
    {
        title: 'Ausleitende Verfahren',
        description: 'Schröpfen, Cantharidenpflaster und weitere klassische Ausleitungsverfahren helfen dem Körper, Stoffwechselprodukte und Belastungen gezielt abzubauen. Diese bewährten Methoden regen Durchblutung und Lymphfluss an.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>),
        theme: 'earth',
        // col 1–4 (4 von 12), row 4–5
        grid: 'md:col-start-1 md:col-span-4 md:row-start-3 md:row-span-2',
        size: 'medium',
    },
    {
        title: 'Ernährungsberatung',
        description: 'Eine ausgewogene, auf Ihre persönlichen Bedürfnisse abgestimmte Ernährung ist die Basis für Ihre Gesundheit. Ich erstelle individuelle Ernährungskonzepte, die wissenschaftliche Erkenntnisse mit naturheilkundlichen Prinzipien verbinden.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>),
        theme: 'dark',
        // col 5–8 (4 von 12), row 5–6
        // grid: 'md:col-start-5 md:col-span-4 md:row-start-5 md:row-span-2 md:self-start',
        grid: 'md:col-start-4 md:col-span-6 md:row-start-5 md:row-span-2 md:self-start',
        size: 'medium',
    },

    // ── Klein (4) ──────────────────────────────────────────────
    {
        title: 'Akupunktur',
        description: 'Die traditionelle chinesische Akupunktur setzt feine Nadeln an definierten Punkten, um den Energiefluss im Körper zu harmonisieren.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v18M9 6l3-3 3 3M9 18l3 3 3-3" /></svg>),
        theme: 'light',
        // col 10–12 (3 von 12), row 1–2
        grid: 'md:col-start-5 md:col-span-3 md:row-start-3 md:row-span-2',
        size: 'small',
    },
    {
        title: 'Darmgesundheit',
        description: 'Ein gesunder Darm ist die Grundlage für das gesamte Wohlbefinden und ein starkes Immunsystem.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>),
        theme: 'dark',
        // col 6–8 (3 von 12), row 3–4
        grid: 'md:col-start-10 md:col-span-3 md:row-start-1 md:row-span-2 ',
        size: 'small',
    },
    {
        title: 'Infusionstherapie',
        description: 'Hochdosierte Vitamin- und Mineralstoffinfusionen stärken das Immunsystem und fördern die Regeneration.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
        theme: 'light',
        // col 5–7 (3 von 12), row 4
        // grid: 'md:col-start-9 md:col-span-3 md:row-start-5 md:row-span-1',
        grid: 'md:col-start-10 md:col-span-3 md:row-start-5 md:row-span-1',
        size: 'small',
    },
    {
        title: 'Eigenbluttherapie',
        description: 'Die Eigenbluttherapie nutzt körpereigene Substanzen zur gezielten Immunstimulation und Selbstheilung.',
        icon: (<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
        theme: 'earth',
        // col 1–3 (3 von 12), row 6
        // grid: 'md:col-start-2 md:col-span-3 md:row-start-5 md:row-span-2 md:self-start',
        grid: 'md:col-start-1 md:col-span-3 md:row-start-5 md:row-span-2 md:self-start',
        size: 'small',
    },
];

const themeClasses: Record<IService['theme'], { card: string; title: string; text: string; line: string; icon: string }> = {
    'dark-green': {
        card: 'bg-[#1a3a2e] hover:bg-[#1f4535]',
        title: 'text-white',
        text: 'text-emerald-100/60',
        line: 'bg-emerald-500',
        icon: 'border-emerald-700 text-emerald-300',
    },
    'earth': {
        card: 'bg-[#8B5E3C] hover:bg-[#9d6b46]',
        title: 'text-white',
        text: 'text-amber-100/70',
        line: 'bg-amber-300',
        icon: 'border-amber-600 text-amber-100',
    },
    'light': {
        card: 'bg-stone-50 hover:bg-white border border-stone-200',
        title: 'text-gray-800',
        text: 'text-gray-400',
        line: 'bg-[#1a3a2e]',
        icon: 'border-stone-300 text-[#1a3a2e]',
    },
    'dark': {
        card: 'bg-[#1c1c1b] hover:bg-[#252523]',
        title: 'text-white',
        text: 'text-stone-400',
        line: 'bg-stone-600',
        icon: 'border-stone-700 text-stone-300',
    },
};

const Services_3 = () => {
    return (
        <section id="leistungen" className="py-24 bg-stone-200">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#2d6a4f] mb-4 font-light">Naturheilkunde</p>
                    <h2 className="text-4xl font-light text-gray-800 mb-5 tracking-wide">Meine Leistungen</h2>
                    <div className="w-12 h-px bg-[#2d6a4f] mx-auto mb-6"></div>
                    <p className="text-gray-500 font-light max-w-xl mx-auto text-sm leading-relaxed">
                        Jede Behandlung ist individuell auf Sie abgestimmt – für nachhaltige Gesundheit auf natürlichem Weg.
                    </p>
                </div>

                {/*
                    12-Spalten-Grid, jede Row = 120px.
                    Kacheln überlappen Zeilen-Grenzen versetzt → keine durchgehenden Linien.
                */}
                <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[120px] gap-3">
                    {services.map((service, index) => {
                        const t = themeClasses[service.theme];
                        return (
                            <div
                                key={index}
                                className={`group rounded-2xl p-6 flex flex-col justify-between
                                    transition-all duration-500 cursor-default min-h-[180px]
                                    ${service.grid} ${t.card}`}
                            >
                                {/* Icon oben links */}
                                {/*<div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${t.icon}`}>*/}
                                {/*    {service.icon}*/}
                                {/*</div>*/}

                                {/* Unten: Titel → Linie → Text */}
                                <div>
                                    <h3 className={`text-xl font-light tracking-wide mb-2 ${t.title}`}>
                                        {service.title}
                                    </h3>
                                    <div className={`h-px mb-3 w-6 group-hover:w-14 transition-all duration-500 ${t.line}`} />
                                    <p className={`text-sm font-light leading-relaxed ${t.text}`}>
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

export default Services_3;
