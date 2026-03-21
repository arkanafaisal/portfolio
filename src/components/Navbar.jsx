/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { portfolioData } from '../data';

export default function Navbar({ isDark, toggleTheme }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Efek untuk menyembunyikan navbar saat scroll ke bawah dan menampilkannya saat scroll ke atas
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Menyembunyikan navbar jika scroll ke bawah dan sudah melewati 60px
            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 w-full bg-surface-nav backdrop-blur-md z-50 border-b border-border transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-bold text-xl text-content">{portfolioData.personal.shortName}</span>
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-xl bg-background text-content-muted hover:bg-border transition-colors cursor-pointer"
                    aria-label="Toggle Dark Mode"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </nav>
    );
}