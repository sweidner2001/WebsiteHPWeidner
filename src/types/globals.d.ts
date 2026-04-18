import type { KlaroConfig } from 'klaro';

declare global {
    interface Window {
        klaro: typeof import('klaro');
        klaroConfig: KlaroConfig;
        gtag: (...args: unknown[]) => void;
        dataLayer: unknown[];
    }
}

export {};
