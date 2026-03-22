/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */
import { AppWindow, MonitorSmartphone, Database, Mail, Linkedin, Github, MessageCircle, Instagram } from 'lucide-react';

export const portfolioData = {
    personal: {
        name: "Arkana Faisal Ridho",
        role: "Full Stack Developer",
        tagline: "Translating ideas into functional, responsive, and user-centric web applications.",
        profileImage: "https://drive.google.com/thumbnail?id=1WGbDy0mzSf6tiHWxEY5lkDGETdD4G5KK&sz=w1920"
    },
    cta: {
        primary: "Explore My Projects",
        secondary: "Download CV",
        cvUrl: "/CV-Arkana.pdf" 
    },
    socials: [
        { id: "email", url: "", icon: Mail, label: "Email" },
        { id: "linkedin", url: "https://linkedin.com/in/arkana-faisal-ridho-8a4085344", icon: Linkedin, label: "LinkedIn" },
        { id: "github", url: "https://github.com/arkanafaisal", icon: Github, label: "GitHub" },
        { id: "whatsapp", url: "https://wa.me/6285791572090", icon: MessageCircle, label: "WhatsApp" },
        { id: "instagram", url: "https://instagram.com/arkanafrrr", icon: Instagram, label: "Instagram" }
    ],
    featuredProjects: [
        {
            id: "secretly",
            title: "Secretly",
            type: "Web App",
            imagePortrait: "https://picsum.photos/seed/secretly-portrait/1080/1920",
            imageLandscape: "https://picsum.photos/seed/secretly-landscape/1920/1080",
            description: "An anonymous Q&A platform (NGL clone) featuring secure user authentication and rate-limiting protection. Built with a strong focus on speed, reliability, and privacy.",
            techStack: ["React", "Express", "PostgreSQL", "Redis"],
            liveUrl: "https://secretly.arkanafaisal.my.id",
            githubUrl: "https://github.com/arkanafaisal/secretly"
        },
        {
            id: "databox",
            title: "Databox.",
            type: "SaaS / Tool",
            imagePortrait: "https://picsum.photos/seed/databox-portrait/1080/1920",
            imageLandscape: "https://picsum.photos/seed/databox-landscape/1920/1080",
            description: "A centralized data management application designed to streamline information storage and retrieval, featuring a clean and highly responsive interface.",
            techStack: ["React", "Express", "MySQL", "Redis"],
            liveUrl: "https://secretly.arkanafaisal.my.id",
            githubUrl: "https://github.com/arkanafaisal/secretly"
        },
        {
            id: "vocab",
            title: "Vocab",
            type: "Education",
            imagePortrait: "https://picsum.photos/seed/vocab-portrait/1080/1920",
            imageLandscape: "https://picsum.photos/seed/vocab-landscape/1920/1080",
            description: "An interactive quiz application that leverages WebSockets for real-time answer validation and seamless state synchronization across users.",
            techStack: ["React", "Express", "Socket.IO", "MySQL"],
            liveUrl: "https://secretly.arkanafaisal.my.id",
            githubUrl: "https://github.com/arkanafaisal/secretly"
        }
    ], 
    servicesSection: {
        title: "What I Do",
        services: [
            {
                id: 1,
                serviceName: "End-to-End Web Development",
                description: "Building complete web applications from the ground up, seamlessly connecting the frontend user experience with reliable backend logic.",
                icon: AppWindow 
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
            // {
            //     id: example, 
            //     year: 2026,
            //     title: "KasirLite - POS UMKM",
            //     description: "Sistem kasir ringan berbasis web untuk kedai kopi lokal.",
            //     techStack: ["React", "Tailwind CSS", "Firebase"],
            //     links: {
            //         github: "https://github.com/username/kasirlite",
            //         live: "https://kasirlite.vercel.app"
            //     },
            //     thumbnailUrl: "https://picsum.photos/seed/kasirlite/600/400" 
            // },
            {
                id: 1,
                year: 2025,
                title: "Fundraising Menu",
                description: "small menu with shopping cart and autofill google form",
                techStack: ["Google Sheets", "Javascript", "Tailwind CSS"],
                links: {
                    github: "https://github.com/arkanafaisal/danus",
                    live: "https://arkanafaisal.github.io/danus"
                },
                thumbnailUrl: "https://picsum.photos/seed/weatherio/600/400" 
            },
            {
                id: 2,
                year: 2024,
                title: "Portfolio",
                description: "Dynamic portfolio using headless CMS",
                techStack: ["React", "Sanity"],
                links: {
                    github: "https://github.com/arkanafaisal/portfolio",
                    live: "https://arkanafaisal.my.id" 
                },
                thumbnailUrl: "https://picsum.photos/seed/devblog/600/400" 
            }
        ]
    },
    contactData: {
        preTitle: "What's Next?",
        title: "Get In Touch",
        button: {
            label: "Say Hello 👋",
            email: "arkana.faisal.r@gmail.com",
            subject: "Reaching out via your portfolio 👋",
            body: "Hi! I came across your website and really enjoyed looking through your work. I'm reaching out because I'd love to discuss a potential [job opportunity / freelance project / collaboration]. Let me know when you have some time to chat!"
        }
    }
};