/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, ChevronRight, MoveHorizontal } from 'lucide-react';
import { portfolioData } from '../data';

export default function FeaturedProjectsSection() {
    const { featuredProjects } = portfolioData;
    const [selectedProject, setSelectedProject] = useState(featuredProjects[0]);
    
    // Reference untuk elemen detail proyek
    const detailsRef = useRef(null);

    // Efek untuk melakukan auto-scroll ketika proyek dipilih
    useEffect(() => {
        if (selectedProject && detailsRef.current) {
            setTimeout(() => {
                detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
    }, [selectedProject]);

    // Fungsi untuk handle klik kartu (Toggle select/unselect)
    const handleProjectClick = (project) => {
        if (selectedProject?.id === project.id) {
            setSelectedProject(null); 
        } else {
            setSelectedProject(project); 
        }
    };

    return (
        <section className="py-12 md:py-24 px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 mt-8 md:mt-0">
                    <h3 className="text-3xl md:text-4xl font-bold text-content tracking-tight">
                        Featured Projects
                    </h3>
                    <div className="flex items-center gap-2 text-content-muted text-sm font-medium lg:hidden animate-pulse">
                        <MoveHorizontal size={18} />
                        <span>Swipe to explore</span>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full">
                    <div className="flex overflow-x-auto gap-4 md:gap-6 pt-2 pb-6 px-4 -mx-4 snap-x snap-mandatory md:snap-none scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {featuredProjects.map((project) => (
                            <div 
                                key={project.id}
                                onClick={() => handleProjectClick(project)}
                                className={`group relative flex-shrink-0 w-56 md:w-72 aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer snap-center md:snap-align-none transition-all duration-300 ${
                                    selectedProject?.id === project.id 
                                        ? 'ring-4 ring-primary ring-offset-4 ring-offset-background' 
                                        : 'hover:-translate-y-2 hover:shadow-xl'
                                }`}
                            >
                                {/* Background Image - Portrait */}
                                <img 
                                    src={project.imagePortrait} 
                                    alt={project.title} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                                
                                {/* Card Content Layer */}
                                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-white">
                                    <span className="inline-block px-3 py-1 mb-2 md:mb-3 text-xs font-semibold bg-primary/80 backdrop-blur-sm rounded-full w-max">
                                        {project.type}
                                    </span>
                                    <h4 className="text-xl md:text-2xl font-bold mb-1">{project.title}</h4>
                                    
                                    <div className="flex items-center gap-2 mt-2 md:mt-4 text-xs md:text-sm font-medium text-white/0 group-hover:text-white/100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        {selectedProject?.id === project.id ? 'Close Details' : 'View Details'} <ChevronRight size={16} className={`${selectedProject?.id === project.id ? 'rotate-90' : ''} transition-transform duration-300`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Details Section */}
                {selectedProject && (
                    <div 
                        ref={detailsRef}
                        className="bg-surface border border-border rounded-2xl p-5 md:p-10 shadow-sm transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 scroll-mt-20 md:scroll-mt-24 mt-4 md:mt-0"
                    >
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 md:gap-8 items-center w-full">
                            
                            {/* Detail Image/Mockup - Landscape 
                                aspect-video memastikan rasio persis 16:9 di semua ukuran layar
                            */}
                            <div className="order-1 lg:order-2 relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
                                <img 
                                    src={selectedProject.imageLandscape} 
                                    alt={`${selectedProject.title} preview`} 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Detail Text */}
                            <div className="order-2 lg:order-1 w-full space-y-4 md:space-y-6">
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                        <h4 className="text-2xl md:text-3xl font-bold text-content">{selectedProject.title}</h4>
                                        <span className="px-2.5 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-medium bg-background border border-border text-content-muted rounded-full">
                                            {selectedProject.type}
                                        </span>
                                    </div>
                                    <p className="text-sm md:text-base text-content-muted leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="space-y-2 md:space-y-3">
                                    <h5 className="text-xs md:text-sm font-semibold text-content uppercase tracking-wider">Technologies</h5>
                                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                                        {selectedProject.techStack.map((tech, index) => (
                                            <span key={index} className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium bg-primary/10 text-primary rounded-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 pt-2 md:pt-4">
                                    <a href={selectedProject.liveUrl} className="flex items-center justify-center gap-2 bg-primary text-primary-content px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl hover:bg-primary-hover transition-colors text-sm md:text-base font-medium w-full sm:w-auto">
                                        <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" /> Live Demo
                                    </a>
                                    <a href={selectedProject.githubUrl} className="flex items-center justify-center gap-2 bg-background text-content px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl border border-border hover:bg-border/50 transition-colors text-sm md:text-base font-medium w-full sm:w-auto">
                                        <Github size={16} className="md:w-[18px] md:h-[18px]" /> Source Code
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}