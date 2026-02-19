'use client';
import Image from 'next/image';
import React, {useState, useEffect, type ReactNode} from 'react';
import Header2 from '../../components/header/Header_2';
import HeroSection from '../../components/hero/HeroSection';
import {Contact, IContactTextProps, IContactIconProps} from '../../components/contact/Contact';
import {AboutMe, IAboutProps} from '@/app/components/aboutMe/AboutMe';
import GoogleMap, {IGoogleMapProps} from '@/app/components/map/GoogleMap';
import TerminForm from '../../components/termin/TerminForm';
import { Telephone, TelephoneFill, Phone, PhoneFill, PhoneVibrate, PhoneVibrateFill, Clock, ClockFill, Envelope, EnvelopeFill, EnvelopeAt, EnvelopeAtFill, Geo, GeoFill, GeoAlt, GeoAltFill } from 'react-bootstrap-icons';
import './page.css';

const NaturheilpraxisWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');


    const aboutText: IAboutProps = {
        name: "Carola Weidner",
        // subtitle="Test wie geht es dir",
        description1: "Mein Name ist [Name] und ich bin seit [Jahren] als Heilpraktiker tätig. Meine Leidenschaft für die Naturheilkunde begann, als ich die heilende Kraft der Natur am eigenen Leib erfahren durfte.",
        description2: "In meiner Praxis lege ich großen Wert auf eine vertrauensvolle Beziehung zu meinen Patienten und eine individuelle, ganzheitliche Behandlung, die auf Ihre persönlichen Bedürfnisse abgestimmt ist.",
        imageSrc:"/img/Carola_2_zg.jpg",
        onlyRoundImage: true,
        // onButtonClick:() => scrollToSection('kontakt')
    };


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

    const googleMapProps: IGoogleMapProps = {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35671.625057047895!2d12.153830278827233!3d49.794229273857394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0473dec3bbf67%3A0x30a75ff91af09795!2sNaturheilpraxis%20Carola%20Weidner!5e0!3m2!1sde!2sde!4v1771507812972!5m2!1sde!2sde",
        minHeight: "400px"
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

            {/* SVG clip-path Definition für elegante Bögen oben und unten */}

            <svg width="0" height="0">
                <defs>
                    {/* Nur oben ein Bogen, unten gerade */}
                    {/*
                        M 0,0.06 - Start links oben bei 6% von oben
                        Q 0.5,-0.02 1,0.06 - Bogen nach oben in der Mitte
                        L 1,1 - Gerade Linie nach rechts unten (100%)
                        L 0,1 - Gerade Linie nach links unten
                        Z - Pfad schließen
                    */}
                    <clipPath id="curve-clip-horizontal" clipPathUnits="objectBoundingBox">
                        {/*<path d="M 0,0.06 Q 0.5,-0.02 1,0.06 L 1,1 L 0,1 Z"/>*/}
                        {/*<path d="M 0,0.06 Q 0.5,-0.02 1,0.06 L 1,0.94 Q 0.5,1.02 0,0.94 Z"/>*/}
                        <path d="M 0,0.06 Q 0.5,-0.0 1,0.0 L 1,0.94 Q 0.5,1.02 0,0.94 Z"/>
                        {/*<path d="M 0,0.00 Q 0.5,-0.0 1,0.0 L 1,0.94 Q 0.5,1.02 0,0.94 Z"/>*/}
                    </clipPath>
                </defs>
            </svg>

            {/* Trenn-Abschnitt mit Hintergrundbild */}
            <section className="relative h-80 md:h-130 w-full overflow-visible">
                {/* Bild-Container mit clip-path für abgerundete Kanten */}
                <div className="absolute inset-0 image-clip-horizontal bg-green-500">
                    <Image
                        src="/img/Blumenwiese_1_zg.jpg"
                        alt="Naturheilpraxis"
                        fill
                        className="object-cover object-[50%_90%]"
                        quality={100}
                    />


                    {/* Text-Inhalt */}
                    {/*bg-black/20*/}
                    <div
                        className="absolute top-0 right-0 bottom-0 w-full md:w-3/5 lg:w-1/2 flex py-12 md:py-10 justify-end px-6 lg:px-2 bg-black/20 z-10">
                        <div className="max-w-2xl pr-12">
                            <h3 className="text-4xl md:text-5xl font-light text-white  mb-6 leading-tight">
                                Ganzheitliche <span className="text-green-600">Naturheilkunde</span> für nachhaltige
                                Gesundheit
                            </h3>
                            <p className="text-base text-gray-600 mb-8 leading-relaxed">
                                Wir behandeln Ursachen, nicht Symptome. Mit natürlichen Verfahren aktivieren wir Ihre
                                Selbstheilungskräfte für langfristige Gesundheit.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Optionaler Text-Overlay */}
                {/*<div className="absolute inset-0 flex items-center justify-center">*/}
                {/*    <h2 className="text-3xl md:text-4xl font-light text-white text-center px-6">*/}
                {/*        Ihr Zitat oder Text hier*/}
                {/*    </h2>*/}
                {/*</div>*/}
            </section>

            {/* SVG clip-path Definition für "Über mich" Section */}
            <svg width="0" height="0">
                <defs>
                    {/* Ovale/Elliptische Form */}
                    <clipPath id="curve-clip-about" clipPathUnits="objectBoundingBox">
                        {/*
                            Ellipse mit smooth Kurven für ein Oval
                            M 0.5,0 - Start oben in der Mitte
                            Q 1,0 1,0.5 - Kurve nach rechts oben
                            Q 1,1 0.5,1 - Kurve nach rechts unten
                            Q 0,1 0,0.5 - Kurve nach links unten
                            Q 0,0 0.5,0 - Kurve nach links oben
                            Z - Pfad schließen
                        */}
                        <path d="M 0.5,0 Q 1,0 1,0.5 Q 1,1 0.5,1 Q 0,1 0,0.5 Q 0,0 0.5,0 Z"/>
                    </clipPath>
                </defs>
            </svg>

            {/* Über mich Section */}
            <section id="ueber-mich" className="py-20 bg-white">
                <AboutMe {...aboutText}/>
            </section>


            {/* Über mich Section */}
            {/*<section id="ueber-mich"*/}
            {/*         className="relative flex flex-col md:flex-row items-center bg-white md:overflow-visible overflow-hidden py-20">*/}
            {/*    /!* Bild-Container mit clipPath - ganz links am Rand *!/*/}
            {/*    <div className="hidden md:block md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 md:h-96 md:w-auto lg:h-[500px] relative image-container-extended">*/}
            {/*        <div className="absolute left-0 top-0 h-96 lg:h-[500px] w-96 lg:w-[500px] bg-green-50 image-clip-aboutMe">*/}
            {/*            <Image*/}
            {/*                src="/img/Carola_2_zg.jpg"*/}
            {/*                alt="Carola Weidner"*/}
            {/*                fill*/}
            {/*                className="object-cover object-[35%_70%]"*/}
            {/*                quality={100}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Text-Inhalt - rechts positioniert *!/*/}
            {/*    <div className="relative flex items-center justify-end w-full md:w-2/3 md:ml-auto px-6 lg:px-12 py-12 md:py-0 z-10">*/}
            {/*        <div className="max-w-2xl">*/}
            {/*            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">*/}
            {/*                Über <span className="text-green-600">mich</span>*/}
            {/*            </h2>*/}
            {/*            <p className="text-base text-gray-600 mb-6 font-light leading-relaxed">*/}
            {/*                Mein Name ist [Name] und ich bin seit [Jahren] als Heilpraktiker tätig. Meine*/}
            {/*                Leidenschaft für die Naturheilkunde begann, als ich die heilende Kraft der Natur am*/}
            {/*                eigenen Leib erfahren durfte.*/}
            {/*            </p>*/}
            {/*            <p className="text-base text-gray-600 mb-8 font-light leading-relaxed">*/}
            {/*                In meiner Praxis lege ich großen Wert auf eine vertrauensvolle Beziehung zu meinen*/}
            {/*                Patienten und eine individuelle, ganzheitliche Behandlung, die auf Ihre persönlichen*/}
            {/*                Bedürfnisse abgestimmt ist.*/}
            {/*            </p>*/}
            {/*            <button className="text-base px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 font-light cursor-pointer">*/}
            {/*                Mehr erfahren*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Mobile Bild-Anzeige *!/*/}
            {/*    <div className="md:hidden w-full px-6 py-8">*/}
            {/*        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-green-100 flex items-center justify-center overflow-hidden mx-auto">*/}
            {/*            <Image*/}
            {/*                src="/img/Carola_2_zg.jpg"*/}
            {/*                alt="Carola Weidner"*/}
            {/*                fill*/}
            {/*                className="object-cover object-[35%_70%]"*/}
            {/*                quality={100}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}


            {/* Kontakt Section */}
            {/*<section id="kontakt" className="py-20 bg-white">*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <div className="max-w-5xl mx-auto">*/}
            {/*            <div className="text-center mb-16">*/}
            {/*                <h2 className="text-3xl font-light text-gray-800 mb-4">Kontakt & Anfahrt</h2>*/}
            {/*                <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>*/}
            {/*            </div>*/}


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

                        {/*<div className="rounded-2xl overflow-hidden shadow-sm mt-12">*/}
                        {/*    <div className="grid md:grid-cols-2">*/}
                        {/*        /!* Linke Spalte: Praxisinformationen *!/*/}
                        {/*        <div className="bg-white p-8">*/}
                        {/*            <Contact propsText={contactText} propsIcons={contactIcons}/>*/}
                        {/*        </div>*/}

                        {/*        /!* Rechte Spalte: Google Maps *!/*/}
                        {/*        <GoogleMap {...googleMapProps} />*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/* Terminformular - Zentriert oben */}
            {/*            <div className="flex justify-center mt-12 ">*/}
            {/*                <TerminForm/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
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

            {/*<div className='bg-green-50'>*/}
            <section id="kontakt" className="pt-20 ">
                <div className="mx-auto text-center mb-16">
                    <h2 className="text-3xl font-light text-gray-800 mb-4">Kontakt & Anfahrt</h2>
                    <div className="w-20 h-0.5 bg-green-600 mx-auto"></div>
                </div>
                <div className='md:bg-green-50 container md:max-w-none mx-auto px-6 md:px-0'>
                    <div className="bg-green-50 overflow-hidden mt-12 md:rounded-none rounded-2xl md:shadow-none shadow-sm">

                {/*    <div className="overflow-hidden mt-12 md:pb-0 pb-6">*/}
                        <div className="grid md:grid-cols-2">
                            {/* Linke Spalte: Praxisinformationen */}
                            <div className="p-8 justify-self-center">
                                <Contact propsText={contactText} propsIcons={contactIcons}/>
                            </div>

                            {/* Rechte Spalte: Google Maps */}
                            <GoogleMap {...googleMapProps} />
                        </div>
                    </div>
                </div>


                {/*<div className='bg-green-50'>*/}
                {/*    <div className="overflow-hidden mt-12 md:pb-0 pb-6">*/}
                {/*        <div className="grid md:grid-cols-2">*/}
                {/*            /!* Linke Spalte: Praxisinformationen *!/*/}
                {/*            <div className="p-8 justify-self-center">*/}
                {/*                <Contact propsText={contactText} propsIcons={contactIcons}/>*/}
                {/*            </div>*/}

                {/*            /!* Rechte Spalte: Google Maps *!/*/}
                {/*            <GoogleMap {...googleMapProps}*/}
                {/*                       className="rounded-2xl md:rounded-none md:mx-0 mx-8 overflow-hidden"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="flex justify-center pt-2 my-16 ">
                    <TerminForm/>
                </div>

            </section>


            {/*<section id="kontakt" className="py-10 bg-green-50  border-t border-gray-200">*/}
            {/*    <div className="container mx-auto">*/}
            {/*        <div className="w-full max-w-6xl mx-auto">*/}
            {/*            <div className=" border-gray-200">*/}
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
            <footer className="bg-green-50 py-8 border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-600 font-light">&copy; {new Date().getFullYear()} Naturheilpraxis
                        [Name].
                        Alle Rechte vorbehalten.</p>
                    <div className="mt-2">
                        <a href="#"
                           className="text-gray-500 hover:text-green-600 text-sm font-light mx-2">Datenschutz</a>
                        <a href="#"
                           className="text-gray-500 hover:text-green-600 text-sm font-light mx-2">Impressum</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NaturheilpraxisWebsite;