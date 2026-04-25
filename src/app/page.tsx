'use client';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/footer/Footer';
import React, {useState, useEffect, type ReactNode} from 'react';
import Header from '@/app/components/header/Header';
import HeroSection from '@/app/components/hero/HeroSection';
import SeperatorSection from '@/app/components/seperator/SeperatorSection';
import HeroSection_2 from '@/app/components/hero/HeroSection_2';
import {Contact, IContactTextProps, IContactIconProps} from '@/app/components/contact/Contact';
import {AboutMe, IAboutProps} from '@/app/components/aboutMe/AboutMe';
import GoogleMap, {IGoogleMapProps} from '@/app/components/map/GoogleMap';
import TerminForm from '@/app/components/termin/TerminForm';
import Philosophie from '@/app/components/philosophie/Philosophie';
import Philosophie_2 from '@/app/components/philosophie/Philosophie_2';
import Services from '@/app/components/services/Services';
import Services_2 from '@/app/components/services/Services_2';
import Services_3 from '@/app/components/services/Services_3';
import Symptoms from '@/app/components/symptoms/Symptoms';
import {Symptoms_2, ISymptomConfig}  from '@/app/components/symptoms/Symptoms_2';
import { Telephone, TelephoneFill, Phone, PhoneFill, PhoneVibrate, PhoneVibrateFill, Clock, ClockFill, Envelope, EnvelopeFill, EnvelopeAt, EnvelopeAtFill, Geo, GeoFill, GeoAlt, GeoAltFill } from 'react-bootstrap-icons';
import './page.css';
import {SectionHeader, ISectionHeaderProps} from '@/app/components/ui/SectionHeader';




const sectionHeaderProbsKontakt: ISectionHeaderProps = {
  title: "Kontakt & Anfahrt",
  className: 'mb-8 lg:mb-12'
}




const NaturheilpraxisWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  const aboutText: IAboutProps = {
    title: 'Über mich',
    name: "Carola Weidner",
    // subtitle="Test wie geht es dir",
    description: ["Mein Name ist Carola Weidner und ich bin seit dem Jahr 2017 als Heilpraktikerin in eigener Praxis tätig. Meine Leidenschaft für die Naturheilkunde begann, als ich die heilende Kraft der Natur in der eigenen Familie erfahren durfte.",
      "In meiner Praxis lege ich großen Wert auf eine vertrauensvolle Beziehung zu meinen Patienten und eine ganzheitliche Behandlung, die individuell auf Ihre persönlichen Bedürfnisse abgestimmt ist.",
      "Durch regelmäßige Fortbildungen erweitere ich mein umfängliches Fachwissen fortlaufend um Ihnen stets die bestmögliche Behandlung bieten zu können."],
    // imageSrc:"/img/Carola_2_zg.jpg",
    imageSrc:"/img/Carola_5_zg.jpg",
    // imageSrc:"/img/Carola_6_zg.jpg",
    // imageSrc:"/img/Carola_7_zg.jpg",
    imageAlt: 'Naturheilpraxis',
    onlyRoundImage: true,
    showHeading: true,
    buttonText: 'Mehr erfahren',
    // onButtonClick:() => scrollToSection('kontakt')
  };

  const symptomProbs: ISymptomConfig = {
    iconBgColor: 'bg-stone-100',
    iconBgColorHover: 'group-hover:bg-[#00a63e]/10'
  }
  const symptomProbs1: ISymptomConfig = {
    iconBgColor: 'bg-stone-50',
    iconBgColorHover: 'group-hover:bg-green-300/30'
  }
  const symptomProbs2: ISymptomConfig = {
    iconBgColor: '',
    iconBgColorHover: ''
  }

  // Kontakt-Daten
  const contactText: IContactTextProps = {
    title: 'Praxisinformationen',
    addressHeading: 'Adresse',
    lst_address: ['Naturheilpraxis Carola Weidner', 'Pfaffenreuth 22', '92715 Püchersreuth'],
    contactHeading: 'Kontakt',
    phone: '09681 / 9189483',
    email: 'info@naturheilpraxis-weidner.de',
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
    // minHeight: "380px"
  };






  // Scroll-Funktionalität
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'philosophie', 'symptome', 'leistungen', 'ueber-mich', 'kontakt'];
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

        {/*<Header*/}
        {/*    activeSection={activeSection}*/}
        {/*    isMenuOpen={isMenuOpen}*/}
        {/*    onMenuToggle={setIsMenuOpen}*/}
        {/*    onSectionClick={scrollToSection}*/}
        {/*    restPlaceForNavbar={true}*/}
        {/*/>*/}
        {/*<HeroSection_2 onSectionClick={scrollToSection}/>*/}

        {/* Hero Section Komponente */}
        <Header
            activeSection={activeSection}
            isMenuOpen={isMenuOpen}
            onMenuToggle={setIsMenuOpen}
            onSectionClick={scrollToSection}
            restPlaceForNavbar={false}
        />
        <HeroSection onSectionClick={scrollToSection}/>

        {/* Philosophie Section */}
        {/*<Philosophie />*/}
        <Philosophie_2 />


        {/* Beschwerden Section */}
        {/*<Symptoms />*/}
        {/*<Symptoms_2 {...symptomProbs} />*/}
        {/*<Symptoms_2 {...symptomProbs1} />*/}
        <Symptoms_2 {...symptomProbs2} />

        {/* Leistungen Section */}
        {/*<Services />*/}
        <Services_2 />
        {/*<Services_3 />*/}






        {/* Über mich Section */}
        <SeperatorSection/>
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
        <section id="kontakt" className="pt-20 md:pb-0">
          <SectionHeader {...sectionHeaderProbsKontakt} />

          <div className='container bg-stone-50 pb-6 md:pb-0 max-w-none px-0'>
            <div className="overflow-hidden mt-12">

              {/*    <div className="overflow-hidden mt-12 md:pb-0 pb-6">*/}
              <div className="grid md:grid-cols-2">
                {/* Linke Spalte: Praxisinformationen */}
                <div className="p-8 justify-self-center">
                  <Contact propsText={contactText} propsIcons={contactIcons}/>
                </div>

                {/* Rechte Spalte: Google Maps */}
                {/*    <div className={`h-100% min-h-[400px]`}>*/}
                {/*    <iframe*/}
                {/*        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35671.625057047895!2d12.153830278827233!3d49.794229273857394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a0473dec3bbf67%3A0x30a75ff91af09795!2sNaturheilpraxis%20Carola%20Weidner!5e0!3m2!1sde!2sde!4v1771507812972!5m2!1sde!2sde"}*/}
                {/*        width="100%"*/}
                {/*        height="100%"*/}
                {/*        style={{border: 0}}*/}
                {/*        allowFullScreen={true}*/}
                {/*        loading="lazy"*/}
                {/*        referrerPolicy="no-referrer-when-downgrade"*/}
                {/*    ></iframe>*/}
                {/*    </div>*/}
                <div className='md:mx-0 sm:mx-10 mx-4 sm:min-h-96 min-h-72'>
                  <GoogleMap {...googleMapProps} className="md:rounded-none rounded-2xl overflow-hidden" />
                </div>
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
          {/*<div className="flex justify-center pt-2 my-16 ">*/}
          {/*    <TerminForm/>*/}
          {/*</div>*/}

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


        <Footer />
      </div>
  );
};

export default NaturheilpraxisWebsite;