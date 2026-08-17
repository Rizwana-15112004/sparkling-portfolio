import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Sparkles } from "lucide-react";

const links = [
  { href: "#hero", id: "hero", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" },
];

interface NavbarProps {
  onOpenHireModal: () => void;
}

export const Navbar = ({ onOpenHireModal }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scrollspy detection
      const sections = links.map((l) => document.getElementById(l.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none"
      aria-label="Main Navigation"
    >
      <div
        className={`max-w-6xl mx-auto px-5 py-3 rounded-full transition-all duration-500 pointer-events-auto flex items-center justify-between gap-4 ${
          scrolled
            ? "bg-[#0d0f22]/90 backdrop-blur-2xl border border-primary/40 shadow-2xl shadow-primary/20"
            : "bg-[#0d0f22]/65 backdrop-blur-xl border border-white/10 shadow-xl"
        }`}
      >
        {/* Left: Brand Mark + Availability Badge */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="font-display font-extrabold text-base flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-0.5"
            aria-label="Rizwana Naznin Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground font-mono text-xs font-bold shadow-md shadow-primary/30 group-hover:scale-110 transition-transform">
              RN
            </div>
            <span className="tracking-tight text-foreground font-display font-bold hidden sm:inline">
              Rizwana<span className="text-accent font-serif">.dev</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full badge-emerald font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold">Available for Hire</span>
          </div>
        </div>

        {/* Center: Navigation Links with Active State & Underline Reveal */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-mono transition-colors relative group py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded ${
                  isActive ? "text-accent font-bold" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 rounded-full ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right: Actions with ONE Reserved glow-pulse on Hire Me */}
        <div className="flex items-center gap-2.5">
          <a
            href="/Rizwana_CV.pdf"
            download="Rizwana_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 font-mono text-xs px-4 py-2 rounded-full hover:scale-105 transition-all cursor-pointer shadow-md shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Download Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>

          {/* Reserved single glow-pulse CTA */}
          <button
            onClick={onOpenHireModal}
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-mono font-semibold text-xs px-4.5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30 hire-me-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Hire Me Modal Trigger"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Hire Me
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
