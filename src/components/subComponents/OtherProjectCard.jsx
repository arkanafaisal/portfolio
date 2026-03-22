/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';

export default function OtherProjectCard({ project, onClick, onMouseEnter }) {
    return (
        <div 
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            className="group w-full md:w-[280px] h-[60px] md:h-[calc(50%-4px)] px-4 py-2 bg-background border border-border/50 rounded-lg cursor-pointer hover:border-primary/50 transition-all duration-300 flex flex-row items-center gap-3 overflow-hidden relative shrink-0"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <span className="text-xs md:text-sm font-mono text-content-muted/70 shrink-0 z-10 w-10">
                {project.year}
            </span>
            <h4 className="text-sm md:text-base font-bold text-content group-hover:text-primary transition-colors truncate z-10 flex-1">
                {project.title}
            </h4>
        </div>
    );
}