import { motion } from "framer-motion";
import { ArrowDown, Github, ExternalLink, MapPin } from "lucide-react";
import { TechOrbit } from "./TechOrbit";
import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack Developer",
  "React + Django Builder",
  "Freelance Project Shipper",
  "BCA Graduate",
];

export const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
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
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
          <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-mono text-muted-foreground">
              AVAILABLE FOR HIRE — IMMEDIATE JOINER
            </span>
          </motion.div>

          {/* Name & tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-mono text-sm text-primary mb-4">
              {"// hello world, i'm"}
            </p>
            <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-gradient-aurora"
              >
                Rizwana
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-gradient"
              >
                Naznin<span className="text-primary">.</span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-8 min-h-[3rem]"
          >
            <span className="font-mono text-muted-foreground text-xl md:text-2xl">{">"}</span>
            <span className="font-display text-2xl md:text-3xl text-foreground">
              {text}
            </span>
            <span className="cursor-blink text-primary text-3xl">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            BCA graduate who ships real software. I delivered a Django web app
            to a paying freelance client and built{" "}
            <span className="text-primary font-semibold">5 applications</span> using React,
            TypeScript, Python, Django, Docker &amp; the Google Vertex AI Gemini API.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform glow"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="https://github.com/Rizwana-15112004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="https://vercel.com/rizwana-naznin-c-as-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-all"
            >
              Live Projects
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl pt-8 border-t border-border"
          >
            {[
              { value: "5+", label: "Apps Deployed" },
              { value: "1", label: "Paying Client" },
              { value: "BCA", label: "Graduate 2026" },
              { value: "0", label: "Backlogs" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display font-bold text-4xl text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center gap-2 mt-8 text-sm text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            Ernakulam, Kerala — Open to remote / hybrid / on-site
          </motion.div>
          </div>

          {/* Right: animated tech orbit */}
          <div className="hidden lg:block">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
};
