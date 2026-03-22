import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
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
        <nav className={`fixed top-0 right-0 z-[100] pointer-events-none w-48 h-48 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0 translate-x-0' : '-translate-y-full translate-x-full'}`}>
            <button 
                onClick={toggleTheme}
                className="pointer-events-auto absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 hover:-translate-x-2 hover:translate-y-2 p-0 bg-transparent border-none text-content-muted hover:text-primary transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer group"
                aria-label="Toggle Dark Mode"
            >
                {isDark ? (
                    <Sun 
                        size={128} 
                        className="opacity-70 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-1000 ease-in-out" 
                    />
                ) : (
                    <Moon 
                        size={128} 
                        fill="currentColor"
                        className="opacity-70 group-hover:opacity-100 group-hover:-rotate-12 transition-all duration-1000 ease-in-out" 
                    />
                )}
            </button>
        </nav>
    );
}