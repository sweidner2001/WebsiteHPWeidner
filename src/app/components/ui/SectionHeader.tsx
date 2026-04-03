import React from 'react';


interface ISectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    lineColor?: string;
    classNameLine?: string;
    className?: string;
    titleSize?: string;
    classNameTitle?: string;
    classNameSubTitle?: string;
    classNameDescription?: string;
}


const defaultSectionHeaderProps: Partial<ISectionHeaderProps> = {
    subtitle:'',
    description: '',
    lineColor: 'bg-[#2d6a4f]',
    classNameLine: 'w-12 h-px',
    className: 'mb-16',
    titleSize: 'text-3xl',
    classNameTitle: 'font-light text-gray-800',
    classNameSubTitle: 'text-xs font-light text-[#2d6a4f]',
    classNameDescription: 'text-gray-500 font-light max-w-3xl mx-auto text-normal'
}

const defaultSectionHeaderProps2: Partial<ISectionHeaderProps> = {
    subtitle:'',
    description: '',
    lineColor: 'bg-green-600',
    classNameLine: 'w-20 h-0.5',
    className: 'mb-16',
    titleSize: 'text-3xl',
    classNameTitle: 'font-light text-gray-800',
    classNameSubTitle: 'text-xs font-light text-[#2d6a4f]',
    classNameDescription: 'text-gray-500 font-light max-w-3xl mx-auto text-normal'
}

const SectionHeader: React.FC<ISectionHeaderProps> = (sectionHeaderProbs) => {
    const probs = {
        ...defaultSectionHeaderProps,
        ...sectionHeaderProbs,
    };

    return (
        <div className={`text-center ${probs.className}`}>
            {probs.subtitle && (
                <p className={`${probs.classNameSubTitle} tracking-[0.3em] uppercase mb-4`}>{probs.subtitle}</p>
            )}
            <h2 className={`${probs.titleSize} ${probs.classNameTitle} mb-5 tracking-wide`}>
                {probs.title}
            </h2>
            <div className={`${probs.classNameLine} ${probs.lineColor} mx-auto mb-6`}></div>
            {probs.description && (
                <p className={`${probs.classNameDescription} leading-relaxed`}>{probs.description}</p>
            )}
        </div>
    );
};




export {
    SectionHeader,
}

export type {
    ISectionHeaderProps
}

