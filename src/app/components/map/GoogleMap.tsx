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

    // minHeight: wird nicht mehr benutzt
    return (
        <div className={`w-full ${className}`} style={{ height }}>
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
