/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { portfolioData } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
// Jalur impor diperbarui mengarah ke folder subComponents
import ServiceCard from './subComponents/ServiceCard';

export default function ServicesSection() {
    const { servicesSection } = portfolioData;
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

    return (
        <section id="services" ref={ref} className="py-6 md:py-10 px-4 md:px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                
                <div className={`mb-6 md:mb-8 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-content tracking-tight mb-1.5 md:mb-2">
                        {servicesSection.title}
                    </h2>
                    <div className="w-16 h-1.5 bg-primary rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {servicesSection.services.map((service, index) => (
                        <ServiceCard 
                            key={service.id} 
                            service={service} 
                            index={index} 
                            isVisible={isVisible} 
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}