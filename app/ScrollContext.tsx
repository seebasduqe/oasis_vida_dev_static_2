// ScrollContext.tsx
"use client"
import React, { createContext, useContext, useRef } from 'react';
import Features from './components/Features';
import Camp from './components/Camp';
import Hero from './components/Hero';

type ScrollContextType = {
    scrollToFeatures: () => void;
    scrollToCamp: () => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const featuresRef = useRef<HTMLDivElement>(null);
    const campRef = useRef<HTMLDivElement>(null);

    const scrollToFeatures = () => featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToCamp = () => campRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    return (
        <ScrollContext.Provider value={{ scrollToFeatures, scrollToCamp }}>
            {children}
            <Hero scrollToFeatures={scrollToFeatures} scrollToCamp={scrollToCamp}/>
            <div ref={featuresRef}>
                <Features />
            </div>
            <div ref={campRef}>
                <Camp />
            </div>
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
