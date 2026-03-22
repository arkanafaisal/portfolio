/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';

export default function TechCategoryCard({ title, technologies, index, isVisible }) {
    return (
        <div 
            className={`flex flex-col transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Class pb-2 dihapus dari judul ini */}
            <h3 className="text-sm md:text-base font-bold text-content uppercase tracking-wider mb-4 border-b border-border/50">
                {title}
            </h3>
            
            <div className="flex flex-wrap gap-2 md:gap-2.5">
                {technologies.map((tech) => (
                    <span 
                        key={tech}
                        className="px-3 py-1.5 text-xs md:text-sm font-medium text-content-muted bg-surface/50 border border-border/60 rounded-lg hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}