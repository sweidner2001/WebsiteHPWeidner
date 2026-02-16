'use client';
import Image from 'next/image';
import React, {useState, useEffect, type ReactNode} from 'react';
import Header2 from '../../components/header/Header_2';
import HeroSection from '../../components/hero/HeroSection';
import {Contact, ContactTextProps, ContactIconProps} from '../../components/contact/Contact';
import { Telephone, TelephoneFill, Phone, PhoneFill, PhoneVibrate, PhoneVibrateFill, Clock, ClockFill, Envelope, EnvelopeFill, EnvelopeAt, EnvelopeAtFill, Geo, GeoFill, GeoAlt, GeoAltFill } from 'react-bootstrap-icons';

const NaturheilpraxisWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');



    // Kontakt-Daten
    const contactText: ContactTextProps = {
        title: 'Praxisinformationen',
        addressHeading: 'Adresse',
        lst_address: ['Naturheilpraxis Calendula', 'Pfaffenreuth 22', '92715 Püchersreuth'],
        contactHeading: 'Kontakt',
        phone: '01234 / 567890',
        email: 'info@naturheilpraxis-beispiel.de',
        openingHeading: 'Öffnungszeiten',
        openingHours1: ['Termine nach Vereinbarung'],
        openingHours1_asBulletPoints: false,
        openingHours2Heading: 'Reguläre Öffnungszeiten:',
        openingHours2: ['Montag - Freitag: 9:00 - 18:00 Uhr', 'Samstag: Nach Vereinbarung'],
        openingHours2_asBulletPoints: false
    };

    const contactIcons: ContactIconProps = {
        addressIconHeading: <GeoAltFill className="w-5 h-5 mt-0.5"/>,
        // addressIconContent: <Geo className="w-5 h-5 text-green-600 flex-shrink-0 mt-1.5" />,
        // contactIconHeading: <Telephone className="w-5 h-5 mt-0.5" />,
        phoneIcon: <TelephoneFill className="w-5 h-5 text-green-600 mr-3"/>,
        emailIcon: <EnvelopeFill className="w-5 h-5 text-green-600 mr-3"/>,
        hoursIconHeading: <ClockFill className="w-5 h-5 mt-0.5"/>,
        // hoursIconContent: <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-1.5" />
    };







    // Scroll-Funktionalität
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'philosophie', 'leistungen', 'ueber-mich', 'kontakt'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                // Check if we are within the section (100px from top of viewport)
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

            {/* Hero Section Komponente */}
            <HeroSection onSectionClick={scrollToSection} />

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
            <section id="kontakt" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-light text-gray-800 mb-4">Kontakt & Anfahrt</h2>
                            <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
                        </div>

                        {/* Grid Layout: Info + Formular oben, Karte unten */}
                        <div className="grid md:grid-cols-2 gap-12 mb-12">
                            {/* Linke Spalte: Praxisinformationen */}
                            <Contact
                                propsText={contactText}
                                propsIcons={contactIcons}
                            />


                            {/* Rechte Spalte: Terminformular */}
                            <div>
                                <h3 className="text-2xl font-light text-gray-800 mb-6">Termin anfragen</h3>
                                <form className="space-y-4 bg-white p-8 rounded-xl shadow-sm">
                                    <div>
                                        <label htmlFor="name"
                                               className="block text-gray-700 mb-2 font-light">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-light"
                                            placeholder="Ihr Name"
                                        />
                                    </div>

                                    <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2 font-light">E-Mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-light"
                                            placeholder="Ihre E-Mail"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 mb-2 font-light">Telefon</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-light"
                                            placeholder="Ihre Telefonnummer"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-700 mb-2 font-light">Nachricht</label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-light"
                                            placeholder="Ihre Nachricht oder Terminwunsch"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-light"
                                    >
                                        Anfrage senden
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Google Maps - Zentriert */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-light text-gray-800 mb-6">Standort</h3>
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.147456789!2d11.6398!3d49.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1d8c8c8c8c8c9%3A0xaabbccddee!2sPfaffenreuth%2022%2C%2092715%20P%C3%BCchersreuth!5e0!3m2!1sde!2sde!4v1234567890"
                                    width="600"
                                    height="380"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*<section id="kontakt" className="py-20 bg-white">*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <div className="max-w-5xl mx-auto">*/}
            {/*            /!* Praxisinformationen darunter - Full Width *!/*/}
            {/*            <div className="mt-16 pt-12 border-t border-gray-200">*/}
            {/*                <h3 className="text-2xl font-light text-gray-800 mb-8">Praxisinformationen</h3>*/}
            {/*                <div className="grid md:grid-cols-3 gap-12">*/}
            {/*                    <div>*/}
            {/*                        <h4 className="text-xl text-green-600 font-normal mb-3">Adresse</h4>*/}
            {/*                        <p className="text-lg text-gray-600 font-light">Naturheilpraxis Calendula<br/>Pfaffenreuth*/}
            {/*                            22<br/>92715 Püchersreuth</p>*/}
            {/*                    </div>*/}

            {/*                    <div>*/}
            {/*                        <h4 className="text-xl text-green-600 font-normal mb-3">Kontakt</h4>*/}
            {/*                        <p className="text-lg text-gray-600 font-light">Telefon: 01234 / 567890<br/>E-Mail:*/}
            {/*                            info@naturheilpraxis-beispiel.de</p>*/}
            {/*                    </div>*/}

            {/*                    <div>*/}
            {/*                        <h4 className="text-xl font-normal text-green-600 mb-3">Öffnungszeiten</h4>*/}
            {/*                        <p className="text-lg text-gray-600 font-light">*/}
            {/*                            Montag - Donnerstag: 9:00 - 18:00 Uhr<br/>*/}
            {/*                            Freitag: 9:00 - 16:00 Uhr<br/>*/}
            {/*                            Samstag: Nach Vereinbarung*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

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