/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { portfolioData } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactSection() {
    const { contactData, socials } = portfolioData;
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    const otherSocials = socials.filter(social => social.id !== 'email');
    const mailtoLink = `mailto:${contactData.button.email}?subject=${encodeURIComponent(contactData.button.subject)}&body=${encodeURIComponent(contactData.button.body)}`;

    return (
        <section id="contact" ref={ref} className="py-12 md:py-16 px-4 md:px-6 bg-background transition-colors duration-300 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className={`max-w-3xl mx-auto flex flex-col items-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                
                <span className="text-xs md:text-sm font-mono font-semibold text-primary mb-3 md:mb-4 tracking-widest uppercase">
                    {contactData.preTitle}
                </span>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-content mb-6 md:mb-8 tracking-tight">
                    {contactData.title}
                </h2>
                
                <a 
                    href={mailtoLink}
                    className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-content hover:bg-primary-hover hover:-translate-y-1 rounded-xl transition-all duration-300 font-medium text-sm md:text-base mb-8 md:mb-10 shadow-lg shadow-primary/20"
                >
                    {contactData.button.label}
                </a>

                <div className="flex items-center gap-5 md:gap-6">
                    {otherSocials.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                            <div 
                                key={social.id}
                                className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${index * 100 + 300}ms` }}
                            >
                                <a 
                                    href={social.url} 
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-content-muted hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                                </a>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}