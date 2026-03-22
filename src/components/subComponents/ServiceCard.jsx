/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';

export default function ServiceCard({ service, index, isVisible }) {
    const Icon = service.icon;

    return (
        <div 
            // Base shadow ditingkatkan ke shadow-md, ketegasan border dinaikkan ke 80%
            className={`group flex flex-col p-5 md:p-6 rounded-2xl bg-surface border border-border/80 shadow-md hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-700 ease-out transform cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                {/* Icon wrapper juga diberikan shadow-md dan border yang lebih tegas */}
                <div className="p-2.5 rounded-xl bg-background border border-border/80 shadow-md group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 shrink-0">
                    {/* Efek drop-shadow pada icon itu sendiri dipertegas */}
                    {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary drop-shadow-md" />}
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-content group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.serviceName}
                </h3>
            </div>
            
            <p className="text-xs md:text-sm text-content-muted leading-relaxed flex-1">
                {service.description}
            </p>
        </div>
    );
}