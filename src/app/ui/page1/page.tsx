'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Header2 from '../../components/header/Header_2';

const NaturheilpraxisWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Scroll-Funktionalität
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'philosophie', 'leistungen', 'ueber-mich', 'kontakt'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header2
                activeSection={activeSection}
                isMenuOpen={isMenuOpen}
                onMenuToggle={setIsMenuOpen}
                onSectionClick={scrollToSection}
            />

            {/* Hero Section mit organischem Bild-Container */}
            <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
                {/* Organischer Bildcontainer mit Bogen-Form */}
                <div className="absolute left-0 top-0 h-full w-1/2 overflow-visible">
                    <div
                        className="absolute left-0 top-0 h-full w-full bg-green-50"
                        style={{
                            clipPath: 'ellipse(80% 100% at 15% 55%)',
                            width: '100%'
                        }}
                    >
                        {/*<div className="w-full h-full flex items-center justify-center">*/}
                        {/*    <Image*/}
                        {/*        src="/img/Zierkirsche_1_gespiegelt.jpg"*/}
                        {/*        alt="Naturheilpraxis"*/}
                        {/*        width={400}*/}
                        {/*        height={400}*/}
                        {/*        className="rounded-full object-cover w-4/5 h-4/5"*/}
                        {/*        priority*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/* Text-Inhalt */}
                <div className="container mx-auto px-6 py-12 ml-auto w-full md:w-1/2 z-10">
                    <div className="max-w-md ml-auto">
                        <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                            Ganzheitliche <span className="text-green-600">Naturheilkunde</span> für nachhaltige
                            Gesundheit
                        </h1>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                        Wir behandeln Ursachen, nicht Symptome. Mit natürlichen Verfahren aktivieren wir Ihre Selbstheilungskräfte für langfristige Gesundheit.
                        </p>
                        <button
                            className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 font-light"
                            onClick={() => scrollToSection('kontakt')}
                        >
                            Termin vereinbaren
                        </button>
                    </div>
                </div>
            </section>

            {/* Philosophie Section */}
            <section id="philosophie" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light text-gray-800 mb-4">Unsere Philosophie</h2>
                        <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="text-center p-6">
                            <div className="w-24 h-24 rounded-full bg-green-50 mx-auto mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-light text-gray-800 mb-3">Ganzheitlicher Ansatz</h3>
                            <p className="text-gray-600 font-light">
                                Wir betrachten Körper, Geist und Seele als Einheit und behandeln den Menschen in seiner Gesamtheit.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-24 h-24 rounded-full bg-green-50 mx-auto mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-light text-gray-800 mb-3">Ursachenorientiert</h3>
                            <p className="text-gray-600 font-light">
                                Statt Symptome zu unterdrücken, suchen wir nach den tieferliegenden Ursachen von Beschwerden.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-24 h-24 rounded-full bg-green-50 mx-auto mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-light text-gray-800 mb-3">Nachhaltige Ergebnisse</h3>
                            <p className="text-gray-600 font-light">
                                Durch natürliche Verfahren erreichen wir langfristige Gesundheitserfolge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leistungen Section */}
            <section id="leistungen" className="py-20 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light text-gray-800 mb-4">Unsere Leistungen</h2>
                        <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'Pflanzenheilkunde', description: 'Behandlung mit Heilpflanzen und deren Extrakten zur Unterstützung der natürlichen Heilungsprozesse.' },
                            { title: 'Ernährungsberatung', description: 'Individuelle Ernährungspläne zur Stärkung des Immunsystems und Behandlung ernährungsbedingter Beschwerden.' },
                            { title: 'Ausleitende Verfahren', description: 'Methoden zur Entgiftung und Entschlackung des Körpers für mehr Vitalität und Wohlbefinden.' },
                            { title: 'Homöopathie', description: 'Individuell abgestimmte homöopathische Mittel zur gezielten Behandlung verschiedener Beschwerden.' }
                        ].map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-xl font-light text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 font-light">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Über mich Section */}
            <section id="ueber-mich" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
                        <div className="md:w-2/5 mb-10 md:mb-0 flex justify-center">
                            <div className="w-64 h-64 rounded-full bg-green-50 flex items-center justify-center overflow-hidden">
                                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                                    <span className="text-green-200">Porträtfoto</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5 md:pl-12">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Über mich</h2>
                            <p className="text-gray-600 mb-4 font-light">
                                Mein Name ist [Name] und ich bin seit [Jahren] als Heilpraktiker tätig. Meine Leidenschaft für die Naturheilkunde begann, als ich die heilende Kraft der Natur am eigenen Leib erfahren durfte.
                            </p>
                            <p className="text-gray-600 font-light">
                                In meiner Praxis lege ich großen Wert auf eine vertrauensvolle Beziehung zu meinen Patienten und eine individuelle, ganzheitliche Behandlung, die auf Ihre persönlichen Bedürfnisse abgestimmt ist.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kontakt Section */}
            <section id="kontakt" className="py-20 bg-green-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-light text-gray-800 mb-4">Kontakt & Terminvereinbarung</h2>
                            <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-light text-gray-800 mb-6">Praxisinformationen</h3>

                                <div className="mb-6">
                                    <h4 className="text-green-600 font-light mb-2">Adresse</h4>
                                    <p className="text-gray-600 font-light">Naturheilpraxis [Name]<br />Musterstraße 123<br />12345 Musterstadt</p>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-green-600 font-light mb-2">Kontakt</h4>
                                    <p className="text-gray-600 font-light">Telefon: 01234 / 567890<br />E-Mail: info@naturheilpraxis-beispiel.de</p>
                                </div>

                                <div>
                                    <h4 className="text-green-600 font-light mb-2">Öffnungszeiten</h4>
                                    <p className="text-gray-600 font-light">Montag - Freitag: 9:00 - 18:00 Uhr<br />Termine nach Vereinbarung</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-light text-gray-800 mb-6">Termin anfragen</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 mb-2 font-light">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 font-light"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 mb-2 font-light">E-Mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 font-light"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 mb-2 font-light">Nachricht</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 font-light"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 font-light"
                                    >
                                        Anfrage senden
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-8 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-600 font-light">&copy; {new Date().getFullYear()} Naturheilpraxis [Name]. Alle Rechte vorbehalten.</p>
                    <div className="mt-2">
                        <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-light mx-2">Datenschutz</a>
                        <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-light mx-2">Impressum</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NaturheilpraxisWebsite;