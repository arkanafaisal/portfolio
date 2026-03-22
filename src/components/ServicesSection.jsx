/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { portfolioData } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServiceCard from './subComponents/ServiceCard';
import SectionHeader from './common/SectionHeader';

export default function ServicesSection() {
    const { servicesSection } = portfolioData;
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

    return (
        <section id="services" ref={ref} className="py-6 md:py-10 px-4 md:px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                
                {/* Jarak bawah dikurangi menjadi mb-5 md:mb-8 */}
                <SectionHeader 
                    title={servicesSection.title} 
                    isVisible={isVisible} 
                    className="mb-5 md:mb-8" 
                />

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