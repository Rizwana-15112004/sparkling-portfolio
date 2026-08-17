import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, Zap, Terminal as TerminalIcon } from "lucide-react";
import { useState, useRef } from "react";
import { BuilderMachine } from "./BuilderMachine";

const highlights = [
  {
    icon: Briefcase,
    title: "Real Freelance Delivery",
    desc: "Shipped a full Django app to a paying client — owned the entire SDLC end-to-end.",
  },
  {
    icon: Sparkles,
    title: "AI-Curious Builder",
    desc: "Hands-on experience integrating Google Vertex AI Gemini API into a real Python + React project.",
  },
  {
    icon: Zap,
    title: "Production-Grade Stack",
    desc: "5 projects built with Docker, Vercel CI/CD, WebSockets, REST APIs & cloud databases.",
  },
  {
    icon: GraduationCap,
    title: "Zero Backlogs",
    desc: "BCA Graduate from MG University (May 2026) — Immediate joiner.",
  },
];

interface CommandLog {
  cmd: string;
  res: string;
}

export const About = () => {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    { cmd: "whoami", res: "Rizwana Naznin C A — Full-Stack Developer & AI Engineer (BCA 2026, MG University)." },
    { cmd: "status", res: "Available for Hire! Immediate Joiner (Remote, Hybrid, On-Site)." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let res = "";
    if (cmd === "clear") {
      setLogs([]);
      setInputVal("");
      return;
    } else if (cmd === "whoami") {
      res = "Rizwana Naznin C A — Full-Stack & AI Engineer. Shipped BloodLife to paying client. 5+ Deployed Apps.";
    } else if (cmd === "skills") {
      res = "Frontend: React, TypeScript, Tailwind. Backend: Python, Django, REST. AI: Vertex AI Gemini API. DevOps: Docker, Vercel.";
    } else if (cmd === "projects") {
      res = "1. BloodLife (Client SDLC) 2. SparkAI Gemini Workbench 3. Smart Assist IoT 4. Portfolio Engine.";
    } else if (cmd === "contact") {
      res = "Email: rizwana.dev@gmail.com | GitHub: github.com/Rizwana-15112004 | Location: Kerala, India.";
    } else if (cmd === "help") {
      res = "Available commands: whoami, skills, projects, contact, clear, help";
    } else {
      res = `Command not found: '${cmd}'. Type 'help' for available CLI commands.`;
    }

    setLogs((prev) => [...prev, { cmd: inputVal, res }]);
    setInputVal("");
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4">{"// about"}</p>
          <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
            A BCA graduate who already <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ships real software</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
            I'm a BCA graduate from MG University who builds with passion and engineering rigor. 
            I delivered a real Django web app to a paying freelance client, built an offline-resilient 
            IoT rescue system, and integrated Google Vertex AI Gemini into a working Python + React platform.
          </p>
        </motion.div>

        {/* Builder Machine Canvas */}
        <div className="mb-16">
          <BuilderMachine />
          <p className="text-center font-mono text-xs text-muted-foreground mt-6">
            {"// how I build: gears turn, code flows, products ship."}
          </p>
        </div>

        {/* Terminal Easter Egg CLI Shell */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card mb-20 p-6 font-mono text-sm overflow-hidden border border-primary/30"
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-accent" />
              <span>rizwana@developer-shell:~ (bash)</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
          </div>

          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">
            {logs.map((log, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <span>guest@rizwana:~$</span>
                  <span className="text-white font-semibold">{log.cmd}</span>
                </div>
                <div className="text-slate-300 pl-4 border-l-2 border-primary/40 leading-relaxed text-xs">
                  {log.res}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-white/5">
            <span className="text-accent">guest@rizwana:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help', 'whoami', 'skills', 'projects', 'contact'..."
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-slate-600 focus:ring-0"
              aria-label="Interactive Terminal Input"
            />
          </form>
        </motion.div>

        {/* Highlights Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 text-white">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
