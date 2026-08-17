import { motion } from "framer-motion";
import { ArrowDown, Github, ExternalLink, MapPin, Download, Code2 } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { HeroCodeCard } from "./HeroCodeCard";

const ROLES = [
  "Full-Stack Developer",
  "AI & ML Engineer",
  "React & Django Specialist",
  "BCA Graduate (2026)",
  "Problem Solver",
];

export const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Typewriter effect logic
  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 35 : 75;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1600);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  // Magnetic CTA Button Mouse Follower
  const handleCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = ctaRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
  };

  const handleCtaMouseLeave = () => {
    const btn = ctaRef.current;
    if (btn) btn.style.transform = "translate3d(0,0,0)";
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full badge-emerald mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider">
                AVAILABLE FOR HIRE — FULL-STACK &amp; AI ROLES
              </span>
            </motion.div>

            {/* Name & Two-Tone Space Grotesk Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent" />
                {"// Hello World! I am"}
              </p>
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.0] tracking-tight mb-6">
                <span className="block text-foreground">
                  Rizwana Naznin
                </span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Full-Stack &amp; AI Engineer
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-8 min-h-[3rem]"
            >
              <span className="font-mono text-accent text-xl md:text-2xl">{">"}</span>
              <span className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                {text}
              </span>
              <span className="animate-pulse text-primary text-3xl font-light">|</span>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-sans"
            >
              Full-Stack Developer &amp; AI Engineer delivering production-grade web platforms.
              Engineered <span className="text-foreground font-semibold">BloodLife</span> for a paying freelance client, built{" "}
              <span className="text-accent font-semibold">5+ deployed applications</span>, and specialized in React, TypeScript, Python, Django, Docker &amp; Google Vertex AI Gemini.
            </motion.p>

            {/* Action Buttons with Magnetic CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {/* Magnetic CTA Button */}
              <a
                ref={ctaRef}
                href="#projects"
                onMouseMove={handleCtaMouseMove}
                onMouseLeave={handleCtaMouseLeave}
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/25 transition-transform duration-200 ease-out"
                aria-label="Explore Projects"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/Rizwana_CV.pdf"
                download="Rizwana_CV.pdf"
                className="inline-flex items-center gap-2.5 border border-primary/40 bg-primary/10 text-primary font-semibold px-7 py-3.5 rounded-full cursor-pointer shadow-lg shadow-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Download CV"
              >
                <Download className="w-4.5 h-4.5" />
                Download CV
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/Rizwana-15112004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur-md text-foreground font-semibold px-6 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4.5 h-4.5" />
                GitHub
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </motion.a>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl pt-8 border-t border-white/10"
            >
              {[
                { value: "5+", label: "Deployed Apps", highlight: "React & Python", color: "text-primary" },
                { value: "1", label: "Paying Client", highlight: "Django SDLC", color: "text-accent" },
                { value: "0", label: "Backlogs", highlight: "Academic Record", color: "badge-emerald px-2 py-0.5 rounded text-xs inline-block" },
                { value: "2026", label: "BCA Graduate", highlight: "MG University", color: "badge-amber px-2 py-0.5 rounded text-xs inline-block" },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-4">
                  <div className={`font-display font-extrabold text-3xl md:text-4xl ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-foreground mt-1">{stat.label}</div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-0.5">{stat.highlight}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-2 mt-8 text-sm text-muted-foreground font-mono"
            >
              <MapPin className="w-4 h-4 text-accent" />
              Ernakulam, Kerala — Open for Remote, Hybrid &amp; On-Site Hiring
            </motion.div>
          </div>

          {/* Right Column: Hero Code Studio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <HeroCodeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
