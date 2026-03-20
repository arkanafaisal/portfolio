/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { portfolioData } from '../data';

export default function Navbar({ isDark, toggleTheme }) {
    return (
        <nav className="fixed top-0 w-full bg-surface-nav backdrop-blur-md z-50 border-b border-border transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-bold text-xl text-content">{portfolioData.personal.shortName}</span>
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-xl bg-background text-content-muted hover:bg-border transition-colors"
                    aria-label="Toggle Dark Mode"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </nav>
    );
}