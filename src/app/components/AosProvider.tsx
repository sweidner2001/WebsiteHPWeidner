'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,       // Animation nur einmal auslösen
            easing: 'ease-out',
            offset: 50,       // 50px bevor Element sichtbar wird
        });
    }, []);

    return <>{children}</>;
}
