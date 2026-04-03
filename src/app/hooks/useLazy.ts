'use client';
import { useEffect } from 'react';

/**
 * Beobachtet alle Elemente mit der Klasse `.lazy` und fügt `.visible` hinzu,
 * sobald sie in den Viewport scrollen.
 *
 * @param rootMargin - Wann das Element als sichtbar gilt (default: '0px 0px -50px 0px')
 * @param threshold - Wie viel vom Element sichtbar sein muss (default: 0.1)
 */
export function useLazy(rootMargin = '0px 0px -50px 0px', threshold = 0.1) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // nur einmal auslösen
                    }
                });
            },
            { rootMargin, threshold }
        );

        const elements = document.querySelectorAll('.lazy');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [rootMargin, threshold]);
}
