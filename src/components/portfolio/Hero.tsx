import { motion } from "framer-motion";
import { ArrowDown, Github, ExternalLink, MapPin, Download, Sparkles, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroCodeCard } from "./HeroCodeCard";

const ROLES = [
  "Full-Stack Developer",
  "AI & ML Engineer",
  "React & Django Specialist",
  "BCA Graduate (2026)",
  "Production Project Shipper",
];

export const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden noise"
    >
      {/* Dynamic Cursor Spotlight Ambient Glow */}
      <div
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-25 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--accent)) 35%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8 shadow-lg shadow-primary/5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-foreground">
                AVAILABLE FOR HIRE — FULL-STACK & AI ROLES
              </span>
            </motion.div>

            {/* Name & tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                {"// Hello World! I am"}
              </p>
              <h1 className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
                <motion.span
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-gradient-aurora"
                >
                  Rizwana
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-foreground"
                >
                  Naznin<span className="text-primary font-serif">.</span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-8 min-h-[3rem]"
            >
              <span className="font-mono text-primary text-xl md:text-2xl">{">"}</span>
              <span className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                {text}
              </span>
              <span className="cursor-blink text-accent text-3xl font-light">|</span>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-outfit"
            >
              Full-Stack Developer &amp; AI Engineer delivering production-grade web platforms.
              Engineered <span className="text-foreground font-semibold">BloodLife</span> for a paying freelance client, built{" "}
              <span className="text-primary font-semibold">5+ deployed applications</span>, and specialized in React, TypeScript, Python, Django, Docker &amp; Google Vertex AI Gemini.
            </motion.p>

            {/* Action Buttons with Magnetic Spring Hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-full glow shadow-xl shadow-primary/25"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/Rizwana_CV.pdf"
                download="Rizwana_CV.pdf"
                className="inline-flex items-center gap-2.5 border border-primary/50 bg-primary/10 text-primary font-semibold px-7 py-3.5 rounded-full cursor-pointer shadow-lg shadow-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Download className="w-4.5 h-4.5" />
                Download CV
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/Rizwana-15112004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur-md text-foreground font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
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
                { value: "5+", label: "Deployed Apps", highlight: "React & Python" },
                { value: "1", label: "Paying Client", highlight: "Django SDLC" },
                { value: "0", label: "Backlogs", highlight: "Academic Record" },
                { value: "2026", label: "BCA Graduate", highlight: "MG University" },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl">
                  <div className="font-syne font-extrabold text-3xl md:text-4xl text-primary">
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
              Ernakulam, Kerala — Open for Remote, Hybrid & On-Site Hiring
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

