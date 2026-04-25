import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderHeadingNP() {
    return (
        <Link href='/' className="flex items-center space-x-2">
            <div className="h-1 shrink-0 flex items-center justify-center">
                <Image
                    src="/img/Logo 1_blume.png"
                    alt="NH"
                    height={100}
                    width={0}
                    sizes="100vw"
                    className="h-12 w-auto"
                    priority
                />
            </div>
            <span className="text-xl font-light text-gray-700 text-balance">Naturheilpraxis Carola Weidner</span>
        </Link>
    );
}
