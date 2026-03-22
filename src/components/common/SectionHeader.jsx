import React from 'react';

/**
 * Common Header Component untuk konsistensi antar section
 * @param {string} title - Judul section
 * @param {boolean} isVisible - Status dari useScrollAnimation
 * @param {string} className - Override class (opsional)
 */
export default function SectionHeader({ title, isVisible, className = "mb-8 md:mb-12" }) {
    return (
        <div 
            className={`flex items-center gap-3 md:gap-4 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            } ${className}`}
        >
            {/* Visual Anchor (Garis Vertikal) disesuaikan tingginya dengan teks baru dan diberi shrink-0 */}
            <div className="w-1.5 h-7 sm:h-8 md:h-10 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] shrink-0"></div>
            
            {/* Font mobile diturunkan ke text-2xl agar tidak turun jadi 2 baris */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-content tracking-tight leading-tight">
                {title}
            </h2>
        </div>
    );
}