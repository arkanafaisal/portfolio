/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

export default function OtherProjectDetail({ project, isOpen, onClose }) {
    return (
        <div 
            className={`absolute inset-0 z-10 bg-surface flex flex-col md:flex-row transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isOpen ? 'translate-y-0 md:translate-x-0 opacity-100' : 'translate-y-full md:translate-y-0 md:-translate-x-full opacity-0 pointer-events-none'
            }`}
        >
            {project && (
                <>
                    <button 
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="absolute top-2 right-2 md:top-3 md:right-3 lg:hidden p-1.5 bg-background/60 backdrop-blur-md text-content-muted hover:text-primary border border-border/50 hover:border-primary/30 rounded-full z-20 transition-all shadow-sm"
                        aria-label="Close details"
                    >
                        <X size={16} />
                    </button>

                    {project.thumbnailUrl && (
                        <div className="relative w-full md:w-[284px] h-[120px] md:h-full shrink-0 bg-background overflow-hidden">
                            <img 
                                src={project.thumbnailUrl} 
                                alt={project.title} 
                                className="w-full h-full object-cover opacity-70 scale-105 animate-in zoom-in duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent md:hidden"></div>
                        </div>
                    )}

                    <div className="flex-1 p-3 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-4 lg:gap-6 overflow-y-auto">
                        
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <span className="text-[10px] font-mono font-semibold text-primary mb-0.5 md:mb-1 tracking-widest uppercase block">
                                Project {project.year}
                            </span>
                            <h3 className="text-base md:text-xl font-bold text-content mb-1 truncate">
                                {project.title}
                            </h3>
                            <p className="text-[11px] md:text-sm text-content-muted leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-3">
                                {project.description}
                            </p>
                        </div>

                        {/* 1. md:mr-8 lg:mr-0: Menggeser kolom ke kiri sejauh 32px di tablet agar lepas dari tombol X.
                          2. md:gap-1.5: Mengurangi jarak vertikal antara tech stack dan tombol di tablet.
                          3. pt-8 dihapus agar elemen bisa kembali ke posisi tengah yang proporsional.
                        */}
                        <div className="md:w-[130px] lg:w-[240px] shrink-0 flex flex-col gap-2 md:gap-1.5 lg:gap-3 justify-center mt-auto md:mt-0 md:mr-8 lg:mr-0">
                            
                            {/* md:gap-1: Merapatkan jarak antar badge tech stack di tablet */}
                            <div className="flex flex-wrap gap-1.5 md:gap-1 lg:gap-1.5">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-1.5 py-0.5 md:px-2 md:py-1 text-[9px] md:text-[10px] font-medium bg-background border border-border/60 text-content-muted rounded-md whitespace-nowrap">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* md:gap-1.5: Merapatkan jarak vertikal antar tombol di tablet */}
                            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 md:gap-1.5 lg:gap-2 mt-1 md:mt-0">
                                {project.links?.github && (
                                    <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 px-2 py-1.5 md:px-2 lg:px-3 text-[10px] md:text-xs font-medium bg-background border border-border hover:bg-border/50 rounded-md transition-colors flex-1">
                                        <Github size={12} className="md:w-[14px] md:h-[14px] shrink-0" /> Source
                                    </a>
                                )}
                                {project.links?.live ? (
                                    <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 px-2 py-1.5 md:px-2 lg:px-3 text-[10px] md:text-xs font-medium bg-primary text-primary-content hover:bg-primary-hover shadow-sm rounded-md transition-colors flex-1">
                                        <ExternalLink size={12} className="md:w-[14px] md:h-[14px] shrink-0" /> Demo
                                    </a>
                                ) : (
                                    <span className="px-2 py-1.5 md:px-2 lg:px-3 text-[10px] md:text-xs font-medium text-content-muted/50 border border-transparent flex-1 text-center cursor-not-allowed">
                                        Internal
                                    </span>
                                )}
                            </div>
                        </div>

                    </div>
                </>
            )}
        </div>
    );
}