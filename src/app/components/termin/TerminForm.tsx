'use client';
import React from 'react';

interface TerminFormProps {
    title?: string;
    className?: string;
}

const TerminForm: React.FC<TerminFormProps> = ({
    title = 'Termin anfragen',
    className = ''
}) => {
    return (
        <div className={className}>
            <h3 className="text-2xl font-light text-gray-800 mb-6">{title}</h3>
            <form className="space-y-4 bg-white p-8 rounded-xl shadow-sm">
                <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-light">Name</label>
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
    );
};

export default TerminForm;
