/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React, { forwardRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectDetails = forwardRef(({ project }, ref) => {
    return (
        <div 
            ref={ref}
            className="bg-surface border border-border rounded-2xl p-5 md:p-10 shadow-sm transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 scroll-mt-4 md:scroll-mt-8 lg:scroll-mt-20 mt-4 md:mt-0"
        >
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 md:gap-8 items-center w-full">
                
                {/* Detail Image/Mockup - Landscape */}
                <div className="order-1 lg:order-2 relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
                    <img 
                        src={project.imageLandscape} 
                        alt={`${project.title} preview`} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Detail Text */}
                <div className="order-2 lg:order-1 w-full space-y-4 md:space-y-6">
                    <div>
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                            <h4 className="text-2xl md:text-3xl font-bold text-content">{project.title}</h4>
                            <span className="px-2.5 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-medium bg-background border border-border text-content-muted rounded-full">
                                {project.type}
                            </span>
                        </div>
                        <p className="text-sm md:text-base text-content-muted leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="space-y-2 md:space-y-3">
                        <h5 className="text-xs md:text-sm font-semibold text-content uppercase tracking-wider">Technologies</h5>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-medium bg-primary/10 text-primary rounded-lg">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 pt-2 md:pt-4">
                        <a href={project.liveUrl} className="flex items-center justify-center gap-2 bg-primary text-primary-content px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl hover:bg-primary-hover transition-colors text-sm md:text-base font-medium w-full sm:w-auto">
                            <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" /> Live Demo
                        </a>
                        <a href={project.githubUrl} className="flex items-center justify-center gap-2 bg-background text-content px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl border border-border hover:bg-border/50 transition-colors text-sm md:text-base font-medium w-full sm:w-auto">
                            <Github size={16} className="md:w-[18px] md:h-[18px]" /> Source Code
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
});

ProjectDetails.displayName = 'ProjectDetails';

export default ProjectDetails;