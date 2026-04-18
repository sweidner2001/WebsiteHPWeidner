'use client';

import React, { useEffect, useState } from 'react';

import type { KlaroConfig } from 'klaro';

export interface IGoogleMapProps {
    src: string;
    className?: string;
    height?: string;
    minHeight?: string;
}

declare global {
    interface Window {
        klaro: typeof import('klaro');
        klaroConfig: KlaroConfig;
    }
}

const GoogleMap: React.FC<IGoogleMapProps> = ({
    src,
    className = '',
    height = '100%',
}) => {
    const [consented, setConsented] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            if (typeof window !== 'undefined' && window.klaro) {
                const manager = window.klaro.getManager(window.klaroConfig);
                setConsented(manager.getConsent('google-maps'));
            }
        };

        checkConsent();

        // Auf Änderungen reagieren (z.B. nach Bestätigung im Banner)
        const handler = () => checkConsent();
        window.addEventListener('klaro:consent-updated', handler);
        // Klaro feuert auch ein custom event – polling als Fallback
        const interval = setInterval(checkConsent, 500);

        return () => {
            window.removeEventListener('klaro:consent-updated', handler);
            clearInterval(interval);
        };
    }, []);

    const handleAccept = () => {
        if (typeof window !== 'undefined' && window.klaro) {
            const manager = window.klaro.getManager(window.klaroConfig);
            manager.updateConsent('google-maps', true);
            manager.saveAndApplyConsents();
            setConsented(true);
        }
    };

    if (!consented) {
        return (
            <div
                className={`w-full flex flex-col items-center justify-center bg-gray-100 rounded-lg gap-4 text-center p-6 ${className}`}
                style={{ height }}
            >
                <p className="text-gray-700 font-medium text-base max-w-sm">
                    Diese Karte wird von Google Maps bereitgestellt. Um sie anzuzeigen, müssen Sie dem Laden externer Inhalte zustimmen.
                </p>
                <button
                    onClick={handleAccept}
                    className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-semibold transition-colors cursor-pointer"
                >
                    Google Maps akzeptieren &amp; Karte anzeigen
                </button>
                <button
                    onClick={() => window.klaro?.show(window.klaroConfig)}
                    className="text-sm text-gray-500 underline cursor-pointer hover:text-gray-700"
                >
                    Cookie-Einstellungen öffnen
                </button>
            </div>
        );
    }

    return (
        <div className={`w-full ${className}`} style={{ height }}>
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
