import { Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Database, Terminal, Cpu, ChevronDown, Monitor } from "lucide-react";
export const PORTFOLIO_DATA = {
  personal: {
    name: "CHIRAG SHARMA",
    role: "Software Engineer",
    location: "India",
    tagline: "Building high-performance mobile & web applications.",
    email: "chirag.sharmaa36@gmail.com",
    github: "https://github.com/chiragsharmaa36",
    linkedin: "https://linkedin.com/in/chirag-css",
    resumeUrl: "#", // Add your PDF link here later
  },
  skills: [
    { name: "Flutter & Dart", icon: <Smartphone size={20} />, level: "Expert" },
    { name: "Node.js & JS", icon: <Monitor size={20} />, level: "Advanced" },
    {
      name: "C++ / Python",
      icon: <Terminal size={20} />,
      level: "Intermediate",
    },
    { name: "WebSockets", icon: <Cpu size={20} />, level: "Advanced" },
    {
      name: "SQL & Firebase",
      icon: <Database size={20} />,
      level: "Intermediate",
    },
  ],
  experience: [
    {
      company: "SapidBlue",
      role: "Software Engineer",
      period: "Aug 2024 - Apr 2025",
      description:
        "Developed cross-platform mobile apps. Implemented BLoC/Provider architecture reducing crashes by 40%.",
      tags: ["Flutter", "Dart", "REST API", "Firebase"],
    },
    {
      company: "Sgital",
      role: "ServiceNow Intern",
      period: "Jun 2023 - Aug 2023",
      description:
        "Achieved CSA certification. Built an attendance management system improving tracking efficiency by 30%.",
      tags: ["ServiceNow", "JavaScript"],
    },
    {
      company: "ISRO (Regional Remote Sensing Centre)",
      role: "Research Intern",
      period: "Jun 2022 - Jul 2022",
      description:
        "Built a real-time video meeting app for 50+ users. Optimized WebRTC to reduce lag by 35%.",
      tags: ["Node.js", "WebRTC", "Socket.io", "PeerJS"],
    },
  ],
  projects: [
    {
      title: "Real-Time Video Meeting App",
      description:
        "A low-latency video conferencing tool built to handle 50+ simultaneous users. Features include an interactive whiteboard and live chat, designed for seamless virtual collaboration.",
      // Since you don't have a live link yet, we emphasize the Code.
      links: [
        {
          label: "View Source",
          url: "https://github.com/chiragsharmaa36/MyApp_WebApp_ProMeet",
          icon: "Github",
        },
      ],
      tech: ["Node.js", "Socket.io", "PeerJS", "HTML/CSS"],
      stats: [
        { label: "Latency Reduction", value: "35%" },
        { label: "Active Users", value: "50+" },
        { label: "Engagement", value: "+30%" },
      ],
      imageSection: {
        imageURL: "/assets/promeet.jpg",
        altText: "Real-Time Video Meeting App Screenshot"
      }
    }
  ],
};