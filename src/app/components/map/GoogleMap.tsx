import React from 'react';

export interface IGoogleMapProps {
    src: string;
    className?: string;
    height?: string;
    minHeight?: string;
}

const GoogleMap: React.FC<IGoogleMapProps> = ({
    src,
    className = '',
    height = '100%',
    minHeight = '380px'
}) => {
    return (
        <div className={`h-${height} min-h-[${minHeight}] ${className}`}>
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
