import { useState } from "react";
import { PORTFOLIO_DATA } from "./data";
import { Button, Card, Navbar, Pill, SectionTitle } from "./components/reusable-components";
import { PageBackground } from "./components/app-components";
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
      <PageBackground />
      <Navbar scrollTo={scrollTo} navItems={navItems} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

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

        <ProjectSection PORTFOLIO_DATA={PORTFOLIO_DATA} />

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
                  <span className="text-white font-bold">MBM University, Jodhpur, Rajasthan, India</span>{" "}
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

        <ContactSection email={PORTFOLIO_DATA.personal.email} github={PORTFOLIO_DATA.personal.github} linkedin={PORTFOLIO_DATA.personal.linkedin} />
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

const ProjectSection = ({PORTFOLIO_DATA}) => {
  return (<section id="projects" className="py-20">
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
                            icon={link.icon === "Github" ? Github  : ExternalLink } size={16}
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
                              src={project.imageSection.imageURL}
                              alt={project.imageSection.altText}
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
        </section>);
}

const ContactSection = ({ email, github, linkedin }) => {
  return (<section id="contact" className="py-20 mb-20">
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
          href={`mailto:${email}`}
          icon={Mail}
        >
          Send Email
        </Button>
      </Card>

      <div className="grid gap-4">
        <a
          href={github}
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
          href={linkedin}
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
  </section>);
}


// --- Contact Us Form ---
// const ContactSection = ({ email, github, linkedin }) => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("submitting");

//     // TODO: Simply replace this with the Web3Forms Access Key or just ignore if testing locally
//     const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; 

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           access_key: ACCESS_KEY,
//           ...formData,
//         }),
//       });

//       const result = await response.json();
//       if (result.success) {
//         setStatus("success");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         // If they enter an invalid access key it fails
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//     <section id="contact" className="py-20 mb-20">
//       <SectionTitle>Let's Connect</SectionTitle>
//       <div className="grid md:grid-cols-2 gap-8">
//         <Card className="bg-blue-50 border-blue-900">
//           <h3 className="text-2xl font-black mb-6 uppercase">Send a Message</h3>

//           {status === "success" ? (
//             <div className="bg-green-100 border-2 border-green-900 p-6 text-center animate-in fade-in">
//               <div className="text-xl font-black text-green-800 mb-2">Message Sent!</div>
//               <p className="text-green-700 font-medium">I'll get back to you as soon as possible.</p>
//               <button 
//                 onClick={() => setStatus("idle")}
//                 className="mt-6 text-sm font-bold uppercase underline decoration-2 underline-offset-4 hover:text-green-900 transition-colors"
//               >
//                 Send another message
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4 animate-in fade-in">
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="name" className="font-bold text-sm uppercase">Name</label>
//                 <input 
//                   type="text" 
//                   id="name"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-none transition-all"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="email" className="font-bold text-sm uppercase">Email</label>
//                 <input 
//                   type="email" 
//                   id="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-none transition-all"
//                   placeholder="john@example.com"
//                 />
//               </div>
//               <div className="flex flex-col gap-1">
//                 <label htmlFor="message" className="font-bold text-sm uppercase">Message</label>
//                 <textarea 
//                   id="message"
//                   name="message"
//                   required
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="p-3 border-2 border-slate-900 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-none transition-all resize-y"
//                   placeholder="Hello, I'd like to talk about..."
//                 />
//               </div>

//               {status === "error" && (
//                 <div className="bg-red-100 border-2 border-red-900 p-3 text-red-800 font-bold text-sm mt-2">
//                   Unable to send message. Please ensure you added your Access Key or try sending an email directly.
//                 </div>
//               )}

//               <button 
//                 type="submit"
//                 disabled={status === "submitting"}
//                 className="mt-2 bg-blue-600 text-white font-black text-lg uppercase tracking-widest p-4 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-blue-700 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] -hover:translate-y-1 active:translate-y-1 active:shadow-none transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
//               >
//                 {status === "submitting" ? "Sending..." : "Submit Message"}
//               </button>
//             </form>
//           )}
//         </Card>

//         <div className="grid gap-4">
//           <Card className="flex flex-col justify-center items-center text-center p-8 bg-white h-full group hover:bg-blue-50">
//             <Mail size={40} className="mb-4 text-slate-900 group-hover:text-blue-600 transition-colors" />
//             <h4 className="text-xl font-black mb-2 uppercase">Direct Email</h4>
//             <a href={`mailto:${email}`} className="text-slate-600 hover:text-blue-600 hover:underline font-medium transition-colors">
//               {email}
//             </a>
//           </Card>

//           <a
//             href={github}
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center justify-between p-6 bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 transition-all hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 group active:translate-y-1 active:shadow-none"
//           >
//             <span className="font-black text-lg flex items-center gap-3">
//               <Github className="group-hover:text-blue-600 transition-colors" />{" "}
//               GitHub
//             </span>
//             <ExternalLink
//               size={16}
//               className="text-slate-400 group-hover:text-slate-900"
//             />
//           </a>
//           <a
//             href={linkedin}
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center justify-between p-6 bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:bg-slate-50 transition-all hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 group active:translate-y-1 active:shadow-none"
//           >
//             <span className="font-black text-lg flex items-center gap-3">
//               <Linkedin className="group-hover:text-blue-700 transition-colors" />{" "}
//               LinkedIn
//             </span>
//             <ExternalLink
//               size={16}
//               className="text-slate-400 group-hover:text-slate-900"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

export default App;