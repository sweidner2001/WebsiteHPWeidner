'use client';
import Image from 'next/image';
import React, {useState, useEffect, type ReactNode} from 'react';
import Header2 from '../../components/header/Header_2';
import HeroSection from '../../components/hero/HeroSection';
import {Contact, IContactTextProps, IContactIconProps} from '../../components/contact/Contact';
import TerminForm from '../../components/termin/TerminForm';
import { Telephone, TelephoneFill, Phone, PhoneFill, PhoneVibrate, PhoneVibrateFill, Clock, ClockFill, Envelope, EnvelopeFill, EnvelopeAt, EnvelopeAtFill, Geo, GeoFill, GeoAlt, GeoAltFill } from 'react-bootstrap-icons';

const NaturheilpraxisWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');



    // Kontakt-Daten
    const contactText: IContactTextProps = {
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

    const contactIcons: IContactIconProps = {
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
            <HeroSection onSectionClick={scrollToSection}/>

            {/* Philosophie Section */}
            <section id="philosophie" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light text-gray-800 mb-4">Unsere Philosophie</h2>
                        <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                        <div className="text-center p-6">
                            <div
                                className="w-24 h-24 rounded-full bg-green-50 mx-auto mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-light text-gray-800 mb-3">Ganzheitlicher Ansatz</h3>
                            <p className="text-gray-600 font-light">
                                Wir betrachten Körper, Geist und Seele als Einheit und behandeln den Menschen in seiner
                                Gesamtheit.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div
                                className="w-24 h-24 rounded-full bg-green-50 mx-auto mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-light text-gray-800 mb-3">Ursachenorientiert</h3>
                            <p className="text-gray-600 font-light">
                                Statt Symptome zu unterdrücken, suchen wir nach den tieferliegenden Ursachen von
                                Beschwerden.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div
                                className="w-24 h-24 rounded-full bg-green-50 mx-auto mb-6 flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
                            {
                                title: 'Pflanzenheilkunde',
                                description: 'Behandlung mit Heilpflanzen und deren Extrakten zur Unterstützung der natürlichen Heilungsprozesse.'
                            },
                            {
                                title: 'Ernährungsberatung',
                                description: 'Individuelle Ernährungspläne zur Stärkung des Immunsystems und Behandlung ernährungsbedingter Beschwerden.'
                            },
                            {
                                title: 'Ausleitende Verfahren',
                                description: 'Methoden zur Entgiftung und Entschlackung des Körpers für mehr Vitalität und Wohlbefinden.'
                            },
                            {
                                title: 'Homöopathie',
                                description: 'Individuell abgestimmte homöopathische Mittel zur gezielten Behandlung verschiedener Beschwerden.'
                            }
                        ].map((service, index) => (
                            <div key={index}
                                 className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
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
                            <div
                                className="w-64 h-64 rounded-full bg-green-50 flex items-center justify-center overflow-hidden">
                                <div
                                    className="w-56 h-56 rounded-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                                    <span className="text-green-200">Porträtfoto</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5 md:pl-12">
                            <h2 className="text-3xl font-light text-gray-800 mb-6">Über mich</h2>
                            <p className="text-gray-600 mb-4 font-light">
                                Mein Name ist [Name] und ich bin seit [Jahren] als Heilpraktiker tätig. Meine
                                Leidenschaft für die Naturheilkunde begann, als ich die heilende Kraft der Natur am
                                eigenen Leib erfahren durfte.
                            </p>
                            <p className="text-gray-600 font-light">
                                In meiner Praxis lege ich großen Wert auf eine vertrauensvolle Beziehung zu meinen
                                Patienten und eine individuelle, ganzheitliche Behandlung, die auf Ihre persönlichen
                                Bedürfnisse abgestimmt ist.
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

                        {/* Terminformular - Zentriert oben */}
                        <div className="flex justify-center mb-12">
                            <TerminForm/>
                        </div>

                        {/* Contact + Google Maps - In einem gemeinsamen Container */}
                        {/*<div className="bg-white rounded-2xl p-6 pl-8 pr-8 shadow-sm">*/}
                        {/*    /!*<h3 className="text-2xl font-light text-gray-800 mb-6 text-center">Praxisinformationen</h3>*!/*/}
                        {/*    <div className="grid md:grid-cols-2 gap-8 items-start">*/}
                        {/*        /!* Linke Spalte: Praxisinformationen *!/*/}
                        {/*        <Contact propsText={contactText} propsIcons={contactIcons}/>*/}

                        {/*        /!* Rechte Spalte: Google Maps *!/*/}
                        {/*        <div className="rounded-xl overflow-hidden shadow-lg h-full">*/}
                        {/*            <iframe*/}
                        {/*                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.147456789!2d11.6398!3d49.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1d8c8c8c8c8c9%3A0xaabbccddee!2sPfaffenreuth%2022%2C%2092715%20P%C3%BCchersreuth!5e0!3m2!1sde!2sde!4v1234567890"*/}
                        {/*                width="100%"*/}
                        {/*                height="100%"*/}
                        {/*                style={{border: 0, minHeight: '300px'}}*/}
                        {/*                allowFullScreen={true}*/}
                        {/*                loading="lazy"*/}
                        {/*                referrerPolicy="no-referrer-when-downgrade"*/}
                        {/*            ></iframe>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <div className="rounded-2xl overflow-hidden shadow-sm mt-12">
                            <div className="grid md:grid-cols-2">
                                {/* Linke Spalte: Praxisinformationen */}
                                <div className="bg-white p-8">
                                    <Contact propsText={contactText} propsIcons={contactIcons}/>
                                </div>

                                {/* Rechte Spalte: Google Maps */}
                                <div className="h-full min-h-[400px]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.8!2d12.17898!3d49.78684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0473dec3bbf67%3A0x30a75ff91af09795!2sNaturheilpraxis%20Carola%20Weidner!5e0!3m2!1sde!2sde!4v1708099200000!5m2!1sde!2sde"
                                        width="100%"
                                        height="100%"
                                        style={{border: 0}}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {/*<section id="kontakt" className="py-20 bg-white">*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <div className="max-w-5xl mx-auto">*/}
            {/*            <div className="text-center mb-16">*/}
            {/*                <h2 className="text-3xl font-light text-gray-800 mb-4">Kontakt & Anfahrt</h2>*/}
            {/*                <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>*/}
            {/*            </div>*/}

            {/*            /!* Grid Layout: Info + Formular oben, Karte unten *!/*/}
            {/*            <div className="grid md:grid-cols-2 gap-12 mb-12">*/}
            {/*                /!* Linke Spalte: Praxisinformationen *!/*/}
            {/*                <Contact propsText={contactText} propsIcons={contactIcons}/>*/}

            {/*                /!* Rechte Spalte: Terminformular *!/*/}
            {/*                <TerminForm/>*/}
            {/*            </div>*/}

            {/*            /!* Google Maps - Zentriert *!/*/}
            {/*            <div className="flex flex-col items-center">*/}
            {/*                <h3 className="text-2xl font-light text-gray-800 mb-6">Standort</h3>*/}
            {/*                <div className="rounded-xl overflow-hidden shadow-lg">*/}
            {/*                    <iframe*/}
            {/*                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.147456789!2d11.6398!3d49.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1d8c8c8c8c8c9%3A0xaabbccddee!2sPfaffenreuth%2022%2C%2092715%20P%C3%BCchersreuth!5e0!3m2!1sde!2sde!4v1234567890"*/}
            {/*                        width="600"*/}
            {/*                        height="380"*/}
            {/*                        style={{border: 0}}*/}
            {/*                        allowFullScreen={true}*/}
            {/*                        loading="lazy"*/}
            {/*                        referrerPolicy="no-referrer-when-downgrade"*/}
            {/*                    ></iframe>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<div className="rounded-2xl overflow-hidden shadow-sm mt-12 mb-5 mx-8">*/}
            {/*    <div className="grid md:grid-cols-2">*/}
            {/*        /!* Linke Spalte: Praxisinformationen *!/*/}
            {/*        <div className="bg-white p-8 justify-self-center">*/}
            {/*            <Contact propsText={contactText} propsIcons={contactIcons}/>*/}
            {/*        </div>*/}

            {/*        /!* Rechte Spalte: Google Maps *!/*/}
            {/*        <div className="h-full min-h-[400px]">*/}
            {/*            <iframe*/}
            {/*                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.147456789!2d11.6398!3d49.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1d8c8c8c8c8c9%3A0xaabbccddee!2sPfaffenreuth%2022%2C%2092715%20P%C3%BCchersreuth!5e0!3m2!1sde!2sde!4v1234567890"*/}
            {/*                width="100%"*/}
            {/*                height="100%"*/}
            {/*                style={{border: 0}}*/}
            {/*                allowFullScreen={true}*/}
            {/*                loading="lazy"*/}
            {/*                referrerPolicy="no-referrer-when-downgrade"*/}
            {/*            ></iframe>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<section id="kontakt" className="py-20 bg-white">*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <div className="max-w-5xl mx-auto">*/}
            {/*            <div className="mt-16 pt-12 border-t border-gray-200">*/}
            {/*                <Contact*/}
            {/*                    propsText={contactText}*/}
            {/*                    propsIcons={contactIcons}*/}
            {/*                    className='grid md:grid-cols-3 gap-12'*/}
            {/*                    distributeEvenly={true}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}


            {/* Footer */}
            <footer className="bg-white py-8 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-600 font-light">&copy; {new Date().getFullYear()} Naturheilpraxis [Name].
                        Alle Rechte vorbehalten.</p>
                    <div className="mt-2">
                        <a href="#"
                           className="text-gray-500 hover:text-green-600 text-sm font-light mx-2">Datenschutz</a>
                        <a href="#" className="text-gray-500 hover:text-green-600 text-sm font-light mx-2">Impressum</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NaturheilpraxisWebsite;