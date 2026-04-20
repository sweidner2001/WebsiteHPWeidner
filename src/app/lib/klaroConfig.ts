const klaroConfig = {
    version: 1,
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    htmlTexts: true,
    lang: 'de',

    translations: {
        de: {
            consentNotice: {
                description:
                    'Wir verwenden Cookies und externe Dienste, um unsere Website zu verbessern. Bitte treffen Sie Ihre Auswahl.',
                learnMore: 'Mehr erfahren',
            },
            consentModal: {
                title: 'Cookie-Einstellungen',
                description:
                    'Hier können Sie einsehen und anpassen, welche Dienste wir auf dieser Website verwenden.',
            },
            acceptAll: 'Alle akzeptieren',
            acceptSelected: 'Auswahl akzeptieren',
            decline: 'Ablehnen',
            close: 'Schließen',
            ok: 'OK',
            save: 'Speichern',
            purposes: {
                maps: 'Karten',
                functional: 'Funktional',
                analytics: 'Analyse & Statistik',
            },
            googleMaps: {
                title: 'Google Maps',
                description:
                    'Google Maps ist ein Kartendienst von Google LLC. Wenn Sie Google Maps aktivieren, werden Daten an Google übertragen.',
            },
            googleAnalytics: {
                title: 'Google Analytics',
                description:
                    'Google Analytics hilft uns zu verstehen, wie Besucher unsere Website nutzen.',
            },
        },
    },

    services: [
        {
            name: 'google-maps',
            title: 'Google Maps',
            purposes: ['maps'],
            default: true,
            required: false,
            translations: {
                de: {
                    description:
                        'Google Maps lädt externe Inhalte von Google. Dabei können personenbezogene Daten an Google LLC (USA) übertragen werden.',
                },
            },
        },
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            default: true,
            required: false,
            // Klaro löscht diese Cookies automatisch bei Widerruf
            cookies: [
                /^_ga(_.*)?$/,
                '_gid',
                '_gat',
                /^_gat_.*$/,
            ],
            translations: {
                de: {
                    description:
                        'Google Analytics erfasst anonymisierte Nutzungsdaten, um die Website zu verbessern. Daten werden an Google LLC (USA) übertragen.',
                },
            },
        },
    ],
};

export default klaroConfig;


