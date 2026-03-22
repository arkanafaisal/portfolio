/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HeroSection() {
    const { personal, cta, socials } = portfolioData;
    
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

    return (
        <section ref={ref} className="relative w-full h-[100dvh] md:h-auto md:min-h-screen flex items-center justify-center bg-background md:py-20 px-4 md:px-6 transition-colors duration-300 overflow-hidden">
            
            <div className={`absolute inset-0 z-0 md:hidden bg-black transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <img 
                    src={personal.profileImage} 
                    alt={personal.name} 
                    className="w-full h-full object-cover object-top opacity-70" 
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-6xl w-full h-full md:h-auto flex flex-col justify-end pb-8 md:pb-0 md:grid md:grid-cols-2 gap-12 items-center mt-0 md:mt-16">
                
                <div className="space-y-3 md:space-y-8 text-center md:text-left">
                    <div className="space-y-1 md:space-y-4">
                        <h2 className={`text-primary font-semibold tracking-wide uppercase text-xs md:text-base transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-8 md:translate-y-0 md:-translate-x-12'}`}>
                            {personal.role}
                        </h2>
                        <h1 className={`text-3xl md:text-6xl font-bold text-white md:text-content tracking-tight capitalize transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-8 md:translate-y-0 md:-translate-x-12'}`}>
                            {personal.name}
                        </h1>
                        <p className={`text-sm md:text-xl text-white/90 md:text-content-muted leading-relaxed max-w-lg mx-auto md:mx-0 transition-all duration-700 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-8 md:translate-y-0 md:-translate-x-12'}`}>
                            {personal.tagline}
                        </p>
                    </div>

                    <div className={`flex flex-wrap items-center justify-center md:justify-start gap-2.5 md:gap-4 transition-all duration-700 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 md:translate-y-0'}`}>
                        <a href="#featured-projects" className="cursor-pointer flex items-center gap-1.5 md:gap-2 bg-primary text-primary-content px-4 py-2 md:px-7 md:py-3.5 rounded-lg md:rounded-xl hover:bg-primary-hover transition-colors shadow-md text-sm md:text-base font-medium">
                            {cta.primary} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                        <a href={cta.cvUrl} download="CV_ArkanaFaisalRidho.pdf" className="cursor-pointer flex items-center gap-1.5 md:gap-2 bg-white/10 md:bg-surface text-white md:text-content px-4 py-2 md:px-7 md:py-3.5 rounded-lg md:rounded-xl border border-white/20 md:border-border hover:bg-white/20 md:hover:bg-background transition-colors shadow-sm text-sm md:text-base font-medium backdrop-blur-sm md:backdrop-blur-none">
                            <Download className="w-4 h-4 md:w-5 md:h-5" /> {cta.secondary}
                        </a>
                    </div>

                    <div className={`flex items-center justify-center md:justify-start gap-4 md:gap-5 pt-1 md:pt-4 text-white/90 md:text-content-muted transition-all duration-700 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {socials.map((social) => {
                            const IconComponent = social.icon; 
                            return (
                                <a 
                                    key={social.id} 
                                    href={social.url} 
                                    className="hover:text-primary transition-colors" 
                                    aria-label={social.label}
                                >
                                    <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className={`hidden md:flex justify-center md:justify-end transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                    <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
                        <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse transition-opacity"></div>
                        <img 
                            src={personal.profileImage} 
                            alt={personal.name} 
                            className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-surface transition-colors duration-300"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}