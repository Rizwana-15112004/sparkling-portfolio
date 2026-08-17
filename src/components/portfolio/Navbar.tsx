import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Sparkles } from "lucide-react";

const links = [
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`max-w-6xl mx-auto px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto flex items-center justify-between ${
          scrolled
            ? "bg-[#0b0c16]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-primary/10"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#hero" className="font-syne font-extrabold text-lg flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-mono text-xs shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
            RN
          </div>
          <span className="tracking-tight text-foreground font-display font-bold">
            Rizwana<span className="text-primary">.dev</span>
          </span>
        </a>

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

        <div className="flex items-center gap-3">
          <a
            href="/Rizwana_CV.pdf"
            download="Rizwana_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 font-mono text-xs px-4 py-2 rounded-full hover:scale-105 transition-all cursor-pointer shadow-md shadow-primary/5"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-mono font-semibold text-xs px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

