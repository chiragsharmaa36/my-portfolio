import { PORTFOLIO_DATA } from "../data";
import { Menu, X } from "lucide-react"

// Resusable UI components
export const SectionTitle = ({ text }) => (
  <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter text-slate-900 relative inline-block">
    {text}
    {/* A decorative underline that looks like a highlighter mark */}
    <span className="absolute -bottom-2 left-0 w-full h-2 bg-blue-500/30 -skew-x-12"></span>
  </h2>
);

export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] p-6 transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] ${className}`}
  >
    {children}
  </div>
);

export const Pill = ({ text }) => (
  <span className="px-3 py-1 bg-blue-100 text-blue-800 border-2 border-blue-900 text-xs font-bold uppercase tracking-wider rounded-none">
    {text}
  </span>
);

export const Button = ({ children, primary, href, onClick, icon: Icon }) => {
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

export const Navbar = ({ scrollTo, navItems, isMenuOpen, setIsMenuOpen }) => {
  return (<nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/90 backdrop-blur-md border-b-2 border-slate-900">
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
  </nav>);
}