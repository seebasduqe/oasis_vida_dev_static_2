import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '../constants'
import Button from "./Button";
import { useScroll } from '../ScrollContext';
import { useState } from 'react';

const Navbar = () => {
    const { scrollToFeatures, scrollToCamp } = useScroll() || {};
    return (
        <nav className="flex items-center justify-center xl:justify-between relative z-30 bg-gray-900 bg-opacity-5 p-4">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-3xl font-bold text-white gap-3">
                    <Image src="/logodeOasis.png" alt='logo' width={100} height={100} style={{ borderRadius: '60%' }} />
                    <p className="gap-3">Proyecto Guajira</p>
                </div>
                <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                    {NAV_LINKS.map(link => (
                        <button
                            title={link.href}
                            key={link.key}
                            onClick={link.href === '/features' ? scrollToFeatures : link.href === '/camp' ? scrollToCamp : undefined}
                            className="flex items-center justify-center mr-10 font-bold text-lg text-white tracking-tight hover:text-gray-400 transition duration-150 ease-in-out"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;