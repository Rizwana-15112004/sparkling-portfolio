import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Sparkles, MapPin, CheckCircle2, Phone } from "lucide-react";

const links = [
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

interface NavbarProps {
  onOpenHireModal: () => void;
}

export const Navbar = ({ onOpenHireModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top Recruiter Quick Ticker Strip */}
      <div className="bg-[#0a0b16]/95 backdrop-blur-md border-b border-primary/20 py-1.5 px-4 text-[11px] font-mono pointer-events-auto text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              AVAILABLE FOR HIRE — IMMEDIATE JOINER
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3 h-3 text-primary" /> BCA 2026 (0 Backlogs)
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3 h-3 text-accent" /> Paid Client SDLC (Django &amp; MySQL)
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-tertiary" /> Ernakulam, Kerala (Remote / On-Site)
            </span>
          </div>

          <a
            href="tel:+918113003356"
            className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-primary transition-colors shrink-0"
          >
            <Phone className="w-3 h-3 text-primary" /> +91 8113003356
          </a>
        </div>
      </div>

      {/* Floating Main Navigation Bar */}
      <div className="py-3 px-4 md:px-8">
        <div
          className={`max-w-6xl mx-auto px-6 py-2.5 rounded-full transition-all duration-500 pointer-events-auto flex items-center justify-between ${
            scrolled
              ? "bg-[#0c0e1d]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/15"
              : "bg-[#0c0e1d]/50 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Logo Mark */}
          <a href="#hero" className="font-syne font-extrabold text-base flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-mono text-xs font-bold shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
              RN
            </div>
            <span className="tracking-tight text-foreground font-display font-bold">
              Rizwana<span className="text-primary font-serif">.dev</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="/Rizwana_CV.pdf"
              download="Rizwana_CV.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 font-mono text-xs px-4 py-1.5 rounded-full hover:scale-105 transition-all cursor-pointer shadow-md shadow-primary/5"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            <button
              onClick={onOpenHireModal}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-mono font-semibold text-xs px-4 py-1.5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
