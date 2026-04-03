'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 350,
            once: true,
            easing: 'ease-out',
            offset: 10,
        });
    }, []);

    return <>{children}</>;
}
