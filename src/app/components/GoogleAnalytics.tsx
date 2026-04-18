'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// ⚠️ HIER Ihre Google Analytics Measurement ID eintragen:
// Format: G-XXXXXXXXXX  (zu finden unter analytics.google.com → Verwaltung → Datenstreams)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export default function GoogleAnalytics() {
    const [consented, setConsented] = useState(false);

    useEffect(() => {
        const checkConsent = () => {
            if (typeof window !== 'undefined' && window.klaro) {
                const manager = window.klaro.getManager(window.klaroConfig);
                const hasConsent = manager.getConsent('google-analytics');
                setConsented(hasConsent);

                if (!hasConsent) {
                    // GA-Cookies bei Widerruf löschen
                    document.cookie.split(';').forEach((c) => {
                        const cookieName = c.trim().split('=')[0];
                        if (/^_ga/.test(cookieName) || cookieName === '_gid' || cookieName === '_gat') {
                            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
                        }
                    });
                }
            }
        };

        checkConsent();

        window.addEventListener('klaro:consent-updated', checkConsent);
        const interval = setInterval(checkConsent, 500);

        return () => {
            window.removeEventListener('klaro:consent-updated', checkConsent);
            clearInterval(interval);
        };
    }, []);

    if (!consented) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        anonymize_ip: true,
                        cookie_flags: 'SameSite=None;Secure'
                    });
                `}
            </Script>
        </>
    );
}
