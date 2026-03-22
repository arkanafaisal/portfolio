/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionHeader from './common/SectionHeader';
import OtherProjectCard from './subComponents/OtherProjectCard';
import OtherProjectDetail from './subComponents/OtherProjectDetail';

export default function OtherProjectsSection() {
    const { otherProjectsSection } = portfolioData;
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
    
    const [selectedProject, setSelectedProject] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    
    // 1. Tambahkan useRef untuk melacak ID setTimeout
    const timeoutRef = useRef(null);

    const openDetail = (project) => {
        // 2. Batalkan penghapusan data jika kursor masuk lagi sebelum 500ms
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setSelectedProject(project);
        setIsDetailOpen(true);
    };

    const closeDetail = () => {
        setIsDetailOpen(false);
        
        // 3. Simpan ID setTimeout ke dalam ref
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setSelectedProject(null);
        }, 500); 
    };

    // 4. Bersihkan memori saat komponen di-unmount agar tidak bocor
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <section id="other-projects" ref={ref} className="py-6 md:py-10 px-4 md:px-6 bg-background transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                
                <SectionHeader 
                    title={otherProjectsSection?.title || "Other Explorations"} 
                    isVisible={isVisible} 
                    className="mb-4 md:mb-6" 
                />

                <div 
                    className={`relative w-full h-[280px] md:h-[160px] bg-surface border border-border/80 rounded-xl overflow-hidden shadow-sm transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    onMouseLeave={closeDetail}
                >
                    {/* 1. LIST VIEW */}
                    <div className="absolute inset-0 p-2 md:p-3 overflow-y-auto md:overflow-y-hidden md:overflow-x-auto scrollbar-hide">
                        <div className="flex flex-col md:flex-col md:flex-wrap md:content-start gap-2 h-full">
                            {otherProjectsSection?.projects.map((project) => (
                                <OtherProjectCard 
                                    key={project.id}
                                    project={project}
                                    onClick={() => openDetail(project)}
                                    onMouseEnter={() => openDetail(project)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* 2. DETAIL VIEW OVERLAY */}
                    <OtherProjectDetail 
                        project={selectedProject}
                        isOpen={isDetailOpen}
                        onClose={closeDetail}
                    />
                </div>

            </div>
        </section>
    );
}