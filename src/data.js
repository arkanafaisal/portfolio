/* {/DESIGN_SYSTEM={"primary":"var(--primary)","secondary":"var(--surface)","radius":"rounded-xl","shadow":"shadow-md","spacing":"balanced","font":"sans","tone":"neutral","darkMode":true}__/} */

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
    socials: {
        email: "#email",
        linkedin: "#linkedin",
        github: "#github",
        whatsapp: "#whatsapp",
        instagram: "#instagram"
    },
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
    ]
};