/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import { AppWindow, MonitorSmartphone, Database, Mail, Linkedin, Github, MessageCircle, Instagram } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "Arkana Faisal Ridho",
        shortName: "Arkana.",
        role: "Full Stack Developer",
        tagline: "Translating ideas into functional, responsive, and user-centric web applications.",
        profileImage: "https://drive.google.com/thumbnail?id=1WGbDy0mzSf6tiHWxEY5lkDGETdD4G5KK&sz=w1920"
    },
    cta: {
        primary: "Explore My Projects",
        secondary: "Download CV"
    },
    socials: [
        { id: "email", url: "#email", icon: Mail, label: "Email" },
        { id: "linkedin", url: "#linkedin", icon: Linkedin, label: "LinkedIn" },
        { id: "github", url: "#github", icon: Github, label: "GitHub" },
        { id: "whatsapp", url: "#whatsapp", icon: MessageCircle, label: "WhatsApp" },
        { id: "instagram", url: "#instagram", icon: Instagram, label: "Instagram" }
    ],
    featuredProjects: [
        {
            id: "secretly",
            title: "Secretly",
            type: "Web App",
            imagePortrait: "https://picsum.photos/seed/secretly-portrait/1080/1920",
            imageLandscape: "https://picsum.photos/seed/secretly-landscape/1920/1080",
            description: "An anonymous Q&A platform (NGL clone) featuring secure user authentication and rate-limiting protection. Built with a strong focus on speed, reliability, and privacy.",
            techStack: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: "databox",
            title: "Databox.",
            type: "SaaS / Tool",
            imagePortrait: "https://picsum.photos/seed/databox-portrait/1080/1920",
            imageLandscape: "https://picsum.photos/seed/databox-landscape/1920/1080",
            description: "A centralized data management application designed to streamline information storage and retrieval, featuring a clean and highly responsive interface.",
            techStack: ["React", "Node.js", "Vite", "Tailwind CSS"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            id: "vocab",
            title: "Vocab",
            type: "Real-time App",
            imagePortrait: "https://picsum.photos/seed/vocab-portrait/1080/1920",
            imageLandscape: "https://picsum.photos/seed/vocab-landscape/1920/1080",
            description: "An interactive quiz application that leverages WebSockets for real-time answer validation and seamless state synchronization across users.",
            techStack: ["React", "Express", "Socket.IO", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ], 
    servicesSection: {
        title: "What I Do",
        services: [
            {
                id: 1,
                serviceName: "End-to-End Web Development",
                description: "Building complete web applications from the ground up, seamlessly connecting the frontend user experience with reliable backend logic.",
                icon: AppWindow // Referensi komponen murni, tanpa kurung siku <>
            },
            {
                id: 2,
                serviceName: "Responsive Web Design",
                description: "Crafting fluid, interactive user interfaces that look fantastic and function perfectly across all devices and screen sizes.",
                icon: MonitorSmartphone
            },
            {
                id: 3,
                serviceName: "Backend & Database Setup",
                description: "Designing structured databases and developing custom APIs specifically tailored to power dynamic frontend features.",
                icon: Database
            }
        ]
    },
    techStackSection: {
        title: "Technologies & Tools",
        categories: {
            frontend: ["React", "Vite", "Tailwind CSS"],
            backend: ["Node.js", "Express", "Socket.io"],
            database: ["PostgreSQL", "MySQL", "Redis"],
            devopsAndTools: ["VPS (Ubuntu)", "Nginx", "Git & GitHub"]
        }
    },
    otherProjectsSection: {
        title: "Other Explorations",
        projects: [
            {
                id: 1, 
                year: 2026,
                title: "KasirLite - POS UMKM",
                description: "Sistem kasir ringan berbasis web untuk kedai kopi lokal.",
                techStack: ["React", "Tailwind CSS", "Firebase"],
                links: {
                    github: "https://github.com/username/kasirlite",
                    live: "https://kasirlite.vercel.app"
                },
                thumbnailUrl: "https://picsum.photos/seed/kasirlite/600/400" // Placeholder
            },
            {
                id: 2,
                year: 2025,
                title: "Weather.io Dashboard",
                description: "Eksplorasi API cuaca publik dengan animasi transisi dinamis.",
                techStack: ["Vue.js", "OpenWeather API", "Framer Motion"],
                links: {
                    github: "https://github.com/username/weatherio",
                    live: "https://weatherio.netlify.app"
                },
                thumbnailUrl: "https://picsum.photos/seed/weatherio/600/400" // Placeholder
            },
            {
                id: 3,
                year: 2024,
                title: "Minimalist Dev Blog",
                description: "Tema blog statis dan super cepat dari file Markdown.",
                techStack: ["Next.js", "MDX", "CSS Modules"],
                links: {
                    github: "https://github.com/username/dev-blog",
                    live: "" 
                },
                thumbnailUrl: "https://picsum.photos/seed/devblog/600/400" // Placeholder
            }
        ]
    },
    contactData: {
        preTitle: "What's Next?",
        title: "Get In Touch",
        button: {
            label: "Say Hello 👋",
            email: "hello@yourdomain.com", // Ganti dengan email asli Anda nanti
            subject: "Reaching out via your portfolio 👋",
            body: "Hi! I came across your website and really enjoyed looking through your work. I'm reaching out because I'd love to discuss a potential [job opportunity / freelance project / collaboration]. Let me know when you have some time to chat!"
        }
    }
    // contactData: {
    //     preTitle: "What's Next?",
    //     title: "Get In Touch",
    //     button: {
    //         label: "Say Hello 👋",
    //         email: "hello@yourdomain.com", // Ganti dengan email aslimu
    //         subject: "Reaching out via your portfolio 👋",
    //         body: "Hi! I came across your website and really enjoyed looking through your work. I'm reaching out because I'd love to discuss a potential [job opportunity / freelance project / collaboration]. Let me know when you have some time to chat!"
    //     },
    //     socials: [
    //         {
    //         id: "soc-1",
    //         platform: "GitHub",
    //         url: "https://github.com/username",
    //         icon: "github-icon"
    //         },
    //         {
    //         id: "soc-2",
    //         platform: "LinkedIn",
    //         url: "https://linkedin.com/in/username",
    //         icon: "linkedin-icon"
    //         },
    //         {
    //         id: "soc-3",
    //         platform: "Twitter",
    //         url: "https://twitter.com/username",
    //         icon: "twitter-icon"
    //         }
    //     ],
    // }
};