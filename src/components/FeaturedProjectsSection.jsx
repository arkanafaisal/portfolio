import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { portfolioData } from '../data';
import ProjectCard from './featuredProjectsSection/ProjectCard';
import ProjectDetails from './featuredProjectsSection/ProjectDetails';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FeaturedProjectsSection() {
    const { featuredProjects } = portfolioData;
    
    // Nilai awal diubah dari featuredProjects[0] menjadi null
    const [selectedProject, setSelectedProject] = useState(null);
    
    const detailsRef = useRef(null);
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

    useEffect(() => {
        if (selectedProject && detailsRef.current) {
            setTimeout(() => {
                detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
    }, [selectedProject]);

    const handleProjectClick = (project) => {
        if (selectedProject?.id === project.id) {
            setSelectedProject(null); 
        } else {
            setSelectedProject(project); 
        }
    };

    return (
        <section id="featured-projects" ref={sectionRef} className="bg-background transition-colors duration-300 overflow-hidden">
            <div className="h-[100dvh] flex flex-col pt-6 pb-2 md:pt-8 md:pb-2 px-4 md:px-6 max-w-6xl mx-auto w-full">
                
                {/* Section Header */}
                <div className="flex-none flex flex-col md:flex-row md:items-end justify-between gap-1 md:gap-4 mb-1 md:mb-4 overflow-hidden md:overflow-visible">
                    <h3 className={`text-3xl sm:text-4xl font-bold text-content tracking-tight leading-none transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        Featured Projects
                    </h3>
                    
                    <div className={`transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex items-center gap-1.5 text-content-muted text-[11px] sm:text-sm font-medium lg:hidden animate-pulse pb-0.5">
                            <MoveHorizontal size={14} className="sm:w-[18px] sm:h-[18px]" />
                            <span className="whitespace-nowrap">Swipe to explore</span>
                        </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className={`flex-1 relative w-full transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                    <div className="absolute inset-0 flex overflow-x-auto gap-4 md:gap-6 px-4 -mx-4 pt-3 pb-4 snap-x snap-mandatory md:snap-none scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {featuredProjects.map((project) => (
                            <ProjectCard 
                                key={project.id}
                                project={project}
                                isSelected={selectedProject?.id === project.id}
                                onClick={() => handleProjectClick(project)}
                            />
                        ))}
                    </div>
                </div>

            </div>

            {/* Project Details Section */}
            {selectedProject && (
                <div className="max-w-6xl mx-auto px-4 md:px-6 pb-8 md:pb-16 mt-4">
                    <ProjectDetails 
                        ref={detailsRef} 
                        project={selectedProject} 
                    />
                </div>
            )}
        </section>
    );
}