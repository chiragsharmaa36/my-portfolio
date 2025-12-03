import { useState } from "react";
// Removed the import for "./App.css" as it was causing a build error and isn't needed with Tailwind
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Smartphone,
  Database,
  Terminal,
  Cpu,
  ChevronDown,
  Monitor,
  Menu, // Imported Menu icon
  X,    // Imported Close icon
} from "lucide-react";

const PORTFOLIO_DATA = {
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
          icon: <Github size={16} />,
        },
      ],
      tech: ["Node.js", "Socket.io", "PeerJS", "HTML/CSS"],
      stats: [
        { label: "Latency Reduction", value: "35%" },
        { label: "Active Users", value: "50+" },
        { label: "Engagement", value: "+30%" },
      ],
    },
  ],
};

// Resusable UI components
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter text-slate-900 relative inline-block">
    {children}
    {/* A decorative underline that looks like a highlighter mark */}
    <span className="absolute -bottom-2 left-0 w-full h-2 bg-blue-500/30 -skew-x-12"></span>
  </h2>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-6 transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] ${className}`}
  >
    {children}
  </div>
);

const Pill = ({ text }) => (
  <span className="px-3 py-1 bg-blue-100 text-blue-800 border-2 border-blue-900 text-xs font-bold uppercase tracking-wider rounded-none">
    {text}
  </span>
);

const Button = ({ children, primary, href, onClick, icon: Icon }) => {
  const baseClass =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-widest transition-all active:translate-y-1 active:shadow-none border-2 border-slate-900";
  const styles = primary
    ? "bg-blue-600 text-white shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-blue-700"
    : "bg-white text-slate-900 shadow-[4px_4px_0px_0px_#cbd5e1] hover:bg-slate-50";

  // Check if it's an internal link (starts with #)
  const isInternal = href && href.startsWith('#');

  return (
    <a
      href={href}
      onClick={onClick}
      target={isInternal ? "_self" : "_blank"}
      rel={!isInternal ? "noreferrer" : undefined}
      className={`${baseClass} ${styles}`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </a>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Smooth scrolling helper
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navItems = ["About", "Experience", "Project", "Contact"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* BACKGROUND PATTERN
        We use a subtle radial gradient and a grid pattern to give it that "technical" paper look.
      */}
      <div
        className="fixed inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/90 backdrop-blur-md border-b-2 border-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="font-black text-xl tracking-tighter cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => scrollTo("home")}
          >
            @{PORTFOLIO_DATA.personal.name.replace(" ", "").toLowerCase()}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 font-bold text-sm tracking-wide">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-blue-600 hover:underline decoration-2 underline-offset-4 uppercase"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-50 border-b-2 border-slate-900 p-6 flex flex-col gap-4 shadow-xl z-50 animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left font-black text-xl uppercase tracking-wider py-2 border-b border-slate-200 hover:text-blue-600 hover:pl-2 transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* HERO SECTION */}
        <section
          id="home"
          className="min-h-[80vh] flex flex-col justify-center items-center"
        >
          {/* FORCE CENTERED CONTAINER:
             - w-full: Starts full width
             - md:w-fit: On laptop/desktop, shrink to fit content width
             - mx-auto: Force margin auto to center it horizontally
             - items-start: Keep internal text left aligned
          */}
          <div className="w-full md:w-fit max-w-4xl mx-auto flex flex-col items-start">
            <div className="mb-6 inline-block">
              <span className="bg-blue-600 text-white px-4 py-1 font-mono text-sm font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                👋 HELLO WORLD
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
              I BUILD APPS
              <br />
              <span className="text-blue-600">THAT WORK.</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-slate-600 max-w-2xl mb-10 leading-relaxed text-left">
              I'm{" "}
              <span className="font-bold text-slate-900">
                {PORTFOLIO_DATA.personal.name}
              </span>
              , a {PORTFOLIO_DATA.personal.role} specializing in
              <span className="bg-blue-100 px-1 mx-1 border-b-2 border-blue-400">
                Flutter
              </span>{" "}
              and
              <span className="bg-blue-100 px-1 mx-1 border-b-2 border-blue-400">
                Full Stack
              </span>{" "}
              engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                primary
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
                icon={ChevronDown}
              >
                View My Work
              </Button>
              <Button href={PORTFOLIO_DATA.personal.linkedin} icon={Linkedin}>
                Connect
              </Button>
            </div>

            {/* Tech Stack Marquee */}
            <div className="mt-20 w-full pt-10 border-t-2 border-dashed border-slate-300 self-center">
              <p className="font-mono text-xs text-slate-400 mb-4 uppercase tracking-widest text-center">
                Technological Arsenal
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {PORTFOLIO_DATA.skills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 text-slate-700 font-bold text-sm bg-white px-3 py-2 border border-slate-300"
                  >
                    {skill.icon}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20">
          <SectionTitle>Experience</SectionTitle>
          <div className="grid gap-8">
            {PORTFOLIO_DATA.experience.map((job, index) => (
              <div key={job.company} className="group relative">
                {/* Timeline line */}
                <div className="absolute left-[-24px] top-6 bottom-0 w-0.5 bg-slate-200 hidden md:block group-last:hidden"></div>
                <div className="absolute left-[-29px] top-6 w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm hidden md:block"></div>

                <Card className="md:ml-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-black uppercase">
                        {job.role}
                      </h3>
                      <div className="text-blue-600 font-bold">
                        {job.company}
                      </div>
                    </div>
                    <div className="font-mono text-xs bg-slate-100 px-2 py-1 rounded mt-2 md:mt-0 border border-slate-200">
                      {job.period}
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed font-medium">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, tIdx) => (
                      <Pill key={tag} text={tag} />
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT SECTION - SPOTLIGHT */}
        <section id="projects" className="py-20">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <SectionTitle>Featured Build</SectionTitle>
            <div className="hidden md:block mb-12 font-mono text-sm text-slate-500">
              // QUALITY OVER QUANTITY
            </div>
          </div>

          <div className="flex flex-col gap-24">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <div key={project.title} className="relative">
                {/* Decorative background element behind the card */}
                <div className="absolute top-4 left-4 w-full h-full bg-slate-900 border-2 border-slate-900 hidden md:block z-0"></div>

                <div className="relative z-10 bg-white border-2 border-slate-900 p-8 md:p-12 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                      <div className="inline-block bg-yellow-400 border-2 border-slate-900 px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        Project Spotlight {index + 1}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4 mb-8 border-y-2 border-slate-100 py-6">
                        {project.stats.map((stat, idx) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-2xl font-black text-blue-600">
                              {stat.value}
                            </div>
                            <div className="text-xs font-bold uppercase text-slate-400">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-sm text-slate-500"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.links.map((link, idx) => (
                          <Button
                            key={link.label}
                            href={link.url}
                            icon={Github}
                            primary
                          >
                            {link.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Right: Visual (CSS Illustration) */}
                    <div className="h-full min-h-[300px] bg-slate-100 border-2 border-slate-900 relative overflow-hidden group">
                      {/* This is a CSS-only illustration of a video app interface */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 aspect-video bg-white border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(203,213,225,1)] flex flex-col overflow-hidden">
                          {/* Fake header */}
                          <div className="h-6 border-b-2 border-slate-900 flex items-center px-2 gap-1 bg-slate-50">
                            <div className="w-2 h-2 rounded-full bg-red-500 border border-slate-900"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-400 border border-slate-900"></div>
                          </div>
                          {/* Image filling window */}
                          <div className="flex-1 bg-slate-900">
                            <img 
                                src="/assets/promeet.jpg" 
                                alt="Real-Time Video Meeting App Screenshot" 
                                className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT / SKILLS DETAILED */}
        <section id="about" className="py-20 border-t-2 border-slate-200">
          <div className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-black mb-6 uppercase text-white">
                  The Person Behind the Code
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  I am a Computer Science graduate from{" "}
                  <span className="text-white font-bold">MBM University</span>{" "}
                  (CGPA 8.49/10). My journey started with simple scripts and
                  evolved into building complex real-time systems at ISRO.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  When I'm not debugging Flutter apps or optimizing Node.js
                  servers, I'm likely exploring new UI design trends or studying
                  system architecture.
                </p>
              </div>
              <div className="flex-1 border-l-2 border-slate-700 pl-0 md:pl-12 pt-8 md:pt-0">
                <h3 className="font-mono text-blue-400 mb-6 uppercase tracking-widest">
                  Core Competencies
                </h3>
                <ul className="space-y-4">
                  {[
                    "Cross-Platform Development",
                    "Real-time Communication (WebRTC)",
                    "Backend Architecture",
                    "UI/UX Design Implementation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500"></div>
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 mb-20">
          <SectionTitle>Let's Connect</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50 border-blue-900">
              <h3 className="text-2xl font-black mb-2">Hire Me?</h3>
              <p className="text-slate-600 mb-6">
                I am currently open to new opportunities as a Software Engineer.
                If you have a role that requires Flutter or Full Stack
                expertise, let's talk.
              </p>
              <Button
                primary
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                icon={Mail}
              >
                Send Email
              </Button>
            </Card>

            <div className="grid gap-4">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-6 bg-white border-2 border-slate-900 shadow-sm hover:bg-slate-50 transition-colors group"
              >
                <span className="font-black text-lg flex items-center gap-3">
                  <Github className="group-hover:text-blue-600 transition-colors" />{" "}
                  GitHub
                </span>
                <ExternalLink
                  size={16}
                  className="text-slate-400 group-hover:text-slate-900"
                />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-6 bg-white border-2 border-slate-900 shadow-sm hover:bg-slate-50 transition-colors group"
              >
                <span className="font-black text-lg flex items-center gap-3">
                  <Linkedin className="group-hover:text-blue-700 transition-colors" />{" "}
                  LinkedIn
                </span>
                <ExternalLink
                  size={16}
                  className="text-slate-400 group-hover:text-slate-900"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t-4 border-blue-600">
        <div className="font-mono text-sm mb-2">
          &lt;Designed & Built by {PORTFOLIO_DATA.personal.name} /&gt;
        </div>
        <div className="text-xs opacity-50">
          © {new Date().getFullYear()} • Minimalist Neo-Brutalism Style
        </div>
      </footer>
    </div>
  );
}

export default App;