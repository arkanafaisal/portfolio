/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { portfolioData } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './common/SectionHeader';
import TechCategoryCard from './subComponents/TechCategoryCard'; // Import komponen pecahan

const categoryConfig = {
    frontend: { title: "Frontend" },
    backend: { title: "Backend" },
    database: { title: "Database" },
    devopsAndTools: { title: "DevOps" } 
};

export default function TechStackSection() {
    const { techStackSection } = portfolioData;
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });

    const categoryEntries = Object.entries(techStackSection.categories);

    return (
        <section id="tech-stack" ref={ref} className="py-6 md:py-10 px-4 md:px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                
                <SectionHeader 
                    title={techStackSection.title} 
                    isVisible={isVisible} 
                    className="mb-5 md:mb-8" 
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {categoryEntries.map(([key, technologies], index) => (
                        <TechCategoryCard 
                            key={key}
                            title={categoryConfig[key]?.title}
                            technologies={technologies}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}