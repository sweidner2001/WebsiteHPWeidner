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
            },
            googleMaps: {
                title: 'Google Maps',
                description:
                    'Google Maps ist ein Kartendienst von Google LLC. Wenn Sie Google Maps aktivieren, werden Daten an Google übertragen.',
            },
        },
    },

    services: [
        {
            name: 'google-maps',
            title: 'Google Maps',
            purposes: ['maps'],
            default: false,
            required: false,
            translations: {
                de: {
                    description:
                        'Google Maps lädt externe Inhalte von Google. Dabei können personenbezogene Daten an Google LLC (USA) übertragen werden.',
                },
            },
        },
    ],
};

export default klaroConfig;
