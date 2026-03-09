'use client';
import React from 'react';

interface ISectionHeadingProps {
    title: string;
    accentColor?: string; // Tailwind bg-Klasse für die Linie, z.B. 'bg-green-600'
}

const SectionHeading: React.FC<ISectionHeadingProps> = ({
    title,
    accentColor = 'bg-green-600',
}) => {
    return (
        <div className="text-center mb-14">
            <h2 className="text-3xl font-light text-gray-800 mb-4">{title}</h2>
            <div className={`w-20 h-0.5 ${accentColor} mx-auto`}></div>
        </div>
    );
};

export { SectionHeading };
export type { ISectionHeadingProps };
