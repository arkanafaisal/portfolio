/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function FooterSection() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-8 md:py-10 px-4 md:px-6 bg-background border-t-2 border-content/20 transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex justify-center">
                <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                    <a 
                        href="#featured-projects" 
                        className="text-xs md:text-sm font-bold text-content-muted hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        Featured Projects
                    </a>
                    
                    <a 
                        href="#services" 
                        className="text-xs md:text-sm font-bold text-content-muted hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        Services
                    </a>
                    
                    <button 
                        onClick={scrollToTop}
                        className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-primary hover:text-primary-hover transition-colors uppercase tracking-widest group cursor-pointer"
                    >
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
                        Back to Top
                    </button>
                </nav>
            </div>
        </footer>
    );
}