/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, isSelected, onClick }) {
    // Lebar statis dihapus, menggunakan h-full aspect-[9/16] agar kartu mengembang memakan sisa layar container
    return (
        <div 
            onClick={onClick}
            className={`group relative flex-shrink-0 h-full aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer snap-center md:snap-align-none transition-all duration-300 ${
                isSelected 
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
            <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-white overflow-hidden">
                <div className="translate-y-8 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col">
                    <span className="inline-block px-3 py-1 mb-2 md:mb-3 text-xs font-semibold bg-primary/80 backdrop-blur-sm rounded-full w-max">
                        {project.type}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold mb-0">{project.title}</h4>
                    
                    {/* Hover Indicator */}
                    <div className="flex items-center gap-2 mt-2 md:mt-4 h-6 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {isSelected ? 'Close Details' : 'View Details'} <ChevronRight size={16} className={`${isSelected ? 'rotate-90' : ''} transition-transform duration-300`} />
                    </div>
                </div>
            </div>
        </div>
    );
}