'use client';

import { useEffect } from 'react';
import klaroConfig from '@/app/lib/klaroConfig';
import type { KlaroConfig } from 'klaro';


export default function KlaroProvider() {
    useEffect(() => {
        window.klaroConfig = klaroConfig as KlaroConfig;

        import('klaro').then((klaro) => {
            klaro.setup(klaroConfig as KlaroConfig);
            window.klaro = klaro;
        });
    }, []);

    return null;
}
