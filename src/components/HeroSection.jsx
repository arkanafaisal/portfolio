/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Instagram, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data';

export default function HeroSection() {
    const { personal, cta, socials } = portfolioData;

    return (
        <section className="relative w-full h-[100dvh] md:h-auto md:min-h-screen flex items-center justify-center bg-background md:py-20 px-4 md:px-6 transition-colors duration-300 overflow-hidden">
            
            {/* Mobile Background Image Layer */}
            <div className="absolute inset-0 z-0 md:hidden bg-black">
                <img 
                    src={personal.profileImage} 
                    alt={personal.name} 
                    className="w-full h-full object-cover object-top opacity-70" 
                />
                {/* Layer hitam transparan merata agar teks kontras */}
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Gradient bawah yang lebih pendek agar tidak naik ke wajah */}
                <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-6xl w-full h-full md:h-auto flex flex-col justify-end pb-8 md:pb-0 md:grid md:grid-cols-2 gap-12 items-center mt-0 md:mt-16">
                
                {/* Text Content - Ukuran diperkecil ekstrem untuk mobile (kembali ke versi yang benar) */}
                <div className="space-y-3 md:space-y-8 text-center md:text-left">
                    <div className="space-y-1 md:space-y-4">
                        <h2 className="text-primary font-semibold tracking-wide uppercase text-xs md:text-base">
                            {personal.role}
                        </h2>
                        {/* Teks di mobile dipaksa putih */}
                        <h1 className="text-3xl md:text-6xl font-bold text-white md:text-content tracking-tight capitalize transition-colors">
                            {personal.name}
                        </h1>
                        <p className="text-sm md:text-xl text-white/90 md:text-content-muted leading-relaxed max-w-lg mx-auto md:mx-0 transition-colors">
                            {personal.tagline}
                        </p>
                    </div>

                    {/* CTAs - Padding dan font diperkecil di mobile */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 md:gap-4">
                        <button className="flex items-center gap-1.5 md:gap-2 bg-primary text-primary-content px-4 py-2 md:px-7 md:py-3.5 rounded-lg md:rounded-xl hover:bg-primary-hover transition-colors shadow-md text-sm md:text-base font-medium">
                            {cta.primary} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                        {/* Tombol sekunder di mobile dibuat gaya glass putih */}
                        <button className="flex items-center gap-1.5 md:gap-2 bg-white/10 md:bg-surface text-white md:text-content px-4 py-2 md:px-7 md:py-3.5 rounded-lg md:rounded-xl border border-white/20 md:border-border hover:bg-white/20 md:hover:bg-background transition-colors shadow-sm text-sm md:text-base font-medium backdrop-blur-sm md:backdrop-blur-none">
                            <Download className="w-4 h-4 md:w-5 md:h-5" /> {cta.secondary}
                        </button>
                    </div>

                    {/* Social Links - Ikon dan margin diperkecil di mobile, dipaksa putih */}
                    <div className="flex items-center justify-center md:justify-start gap-4 md:gap-5 pt-1 md:pt-4 text-white/90 md:text-content-muted">
                        <a href={socials.email} className="hover:text-primary transition-colors" aria-label="Email">
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a href={socials.linkedin} className="hover:text-primary transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a href={socials.github} className="hover:text-primary transition-colors" aria-label="GitHub">
                            <Github className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a href={socials.whatsapp} className="hover:text-primary transition-colors" aria-label="WhatsApp">
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a href={socials.instagram} className="hover:text-primary transition-colors" aria-label="Instagram">
                            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                    </div>
                </div>

                {/* Image / Avatar - Versi PC/Tablet dipertahankan */}
                <div className="hidden md:flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
                        <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 dark:opacity-30 animate-pulse transition-opacity"></div>
                        <img 
                            src={personal.profileImage} 
                            alt={personal.name} 
                            className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-surface transition-colors duration-300"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}