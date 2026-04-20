'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-JDZNQ7S6SX';

export default function GoogleAnalytics() {

    useEffect(() => {
        const updateConsent = () => {
            const match = document.cookie.match(/(?:^|;\s*)klaro=([^;]*)/);
            let hasConsent = false;

            if (match) {
                try {
                    const consents = JSON.parse(decodeURIComponent(match[1]));
                    hasConsent = !!consents['google-analytics'];
                } catch {
                    hasConsent = false;
                }
            }

            if (typeof window.gtag === 'function') {
                if (hasConsent) {
                    window.gtag('consent', 'update', { analytics_storage: 'granted' });
                } else {
                    window.gtag('consent', 'update', { analytics_storage: 'denied' });
                    // GA-Cookies löschen
                    document.cookie.split(';').forEach((c) => {
                        const cookieName = c.trim().split('=')[0];
                        if (/^_ga/.test(cookieName) || cookieName === '_gid' || cookieName === '_gat') {
                            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
                        }
                    });
                }
            }
        };

        updateConsent();
        const interval = setInterval(updateConsent, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Google Tag – immer geladen, damit Google das Tag erkennt */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    // Consent-Modus: standardmäßig verweigert, bis Klaro-Einwilligung
                    gtag('consent', 'default', { analytics_storage: 'denied' });
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
