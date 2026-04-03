'use client';
import React from 'react';
import type { ReactNode } from 'react';

interface IContactIconProps {
    addressIconHeading?: ReactNode;
    addressIconContent?: ReactNode;
    contactIconHeading?: ReactNode;
    phoneIcon?: ReactNode;
    emailIcon?: ReactNode;
    hoursIconHeading?: ReactNode;
    hoursIconContent?: ReactNode;
}

interface IContactTextProps {
    title?: string;
    addressHeading?: string
    lst_address?: string[];
    contactHeading?: string;
    phone?: string;
    email?: string;
    openingHeading?: string;
    openingHours1?: string[];
    openingHours1_asBulletPoints?: boolean;
    openingHours2Heading?: string;
    openingHours2?: string[];
    openingHours2_asBulletPoints?: boolean;
}

// Kombiniertes Interface mit beiden als separate Objekte
interface IContactProps {
    propsText?: IContactTextProps;
    propsIcons?: IContactIconProps;
    className?: string;
    distributeEvenly?: boolean;
}

// Default-Werte
const defaultText: IContactTextProps = {
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




// Hilfsfunktion für List-Rendering mit <br /> zwischen den Einträgen oder als Stichpunkte
const renderList = (list?: string[], asBulletPoints: boolean = false) => {
    if (asBulletPoints) {
        return (
            <ul className="text-lg text-gray-600 font-light space-y-1">
                {list?.map((line, index) => (
                    <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        {line}
                    </li>
                ))}
            </ul>
        );
    }

    return list?.map((line, index) => (
        <React.Fragment key={index}>
            {line}
            {index < (list?.length || 0) - 1 && <br />}
        </React.Fragment>
    ));
};




const Contact: React.FC<IContactProps> = ({ propsText, propsIcons, className, distributeEvenly = false }) => {
    // Merge mit Default-Werten
    const text = { ...defaultText, ...propsText };
    const icons = {...propsIcons};


    return (
        <div>
            <h3 className="text-2xl font-light text-gray-800 mb-6 justify-self-start">{text.title}</h3>
            <div className={className || ''}>
            {/*<div>*/}
                {/* Adresse */}
                <div className={`mb-8 ${distributeEvenly ? 'justify-self-start' : ''}`}>
                    <h4 className="text-xl text-green-600 font-normal mb-2 flex items-center gap-2">
                        {icons.addressIconHeading}
                        {text.addressHeading}
                    </h4>
                    <div className="flex gap-3">
                        {icons.addressIconContent}
                        <p className="text-lg text-gray-600 font-light">
                            {renderList(text.lst_address)}
                        </p>
                    </div>
                </div>

                {/* Kontakt */}
                <div className={`mb-8 ${distributeEvenly ? 'justify-self-center' : ''}`}>
                    <h4 className="text-xl text-green-600 font-normal mb-2 flex items-center gap-2">
                        {icons.contactIconHeading}
                        {text.contactHeading}
                        {/*<svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor"*/}
                        {/*     viewBox="0 0 20 20">*/}
                        {/*    <path*/}
                        {/*        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>*/}
                        {/*    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>*/}
                        {/*</svg>*/}
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center text-lg text-gray-600 font-light">
                            {icons.phoneIcon}
                            {text.phone}
                        </div>
                        <div className="flex items-center text-lg text-gray-600 font-light">
                            {icons.emailIcon}
                            {/*{text.email}*/}
                            <a href={`mailto:${text.email}`}
                               className="text-green-600 hover:text-green-700">
                                {text.email}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Öffnungszeiten */}
                <div className={distributeEvenly ? 'justify-self-end' : ''}>
                    <h4 className="text-xl font-normal text-green-600 mb-2 flex items-center gap-2">
                        {icons.hoursIconHeading}
                        {text.openingHeading}
                    </h4>
                    <div className="flex gap-3">
                        {icons.hoursIconContent}
                        <p className="text-lg text-gray-600 font-light">
                            {renderList(text.openingHours1, text.openingHours1_asBulletPoints)}
                            {/*text-lg text-gray-600 font-light*/}
                            <span className="text-green-600 block mt-2">{text.openingHours2Heading}</span>
                            {renderList(text.openingHours2, text.openingHours2_asBulletPoints)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};




export {
    Contact,
}

export type {
    IContactTextProps,
    IContactIconProps,
    IContactProps
}
