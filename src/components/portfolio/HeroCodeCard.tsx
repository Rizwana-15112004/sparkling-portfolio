import { useState } from "react";
import { Check, Copy, FileCode, Terminal, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroCodeCard = () => {
  const [activeTab, setActiveTab] = useState<"dev" | "skills" | "status">("dev");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    let content = "";
    if (activeTab === "dev") {
      content = `export const rizwana = {\n  name: "Rizwana Naznin C A",\n  role: "Full-Stack Developer & AI Engineer",\n  status: "Available for Hire 🚀",\n  location: "Ernakulam, Kerala",\n  education: "BCA (2023–2026) | Zero Backlogs",\n  deployedApps: 5,\n  payingClients: 1,\n  stack: ["React", "TypeScript", "Python", "Django", "Docker", "Vertex AI"]\n};`;
    } else if (activeTab === "skills") {
      content = `{\n  "frontend": ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],\n  "backend": ["Python", "Django", "PostgreSQL", "WebSockets", "REST APIs"],\n  "ai_ml": ["Vertex AI Gemini API", "Agentic AI", "Prompt Engineering"],\n  "devops": ["Docker", "Vercel CI/CD", "Nginx", "Git"]\n}`;
    } else {
      content = `// System Health & Verification Status\nSYSTEM_STATUS = "OPTIMAL"\nVERIFICATION = "VERIFIED_PRODUCTION"\nLATENCY = "< 50ms"\nOFFLINE_FAILOVER = true`;
    }
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-primary/20 bg-[#0d0f18]/90 backdrop-blur-xl shadow-2xl shadow-primary/10 overflow-hidden font-mono text-xs md:text-sm">
      {/* IDE Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131625] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-muted-foreground font-sans font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> rizwana-dev-studio
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-2 bg-[#0f111d] border-b border-white/5 overflow-x-auto">
        <button
          onClick={() => setActiveTab("dev")}
          className={`flex items-center gap-2 px-3 py-2 text-xs rounded-t-lg transition-colors border-t-2 ${
            activeTab === "dev"
              ? "bg-[#161a2e] text-primary border-primary font-semibold"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-white/5"
          }`}
        >
          <FileCode className="w-3.5 h-3.5 text-primary" /> developer.ts
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`flex items-center gap-2 px-3 py-2 text-xs rounded-t-lg transition-colors border-t-2 ${
            activeTab === "skills"
              ? "bg-[#161a2e] text-accent border-accent font-semibold"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-white/5"
          }`}
        >
          <Terminal className="w-3.5 h-3.5 text-accent" /> stack.json
        </button>
        <button
          onClick={() => setActiveTab("status")}
          className={`flex items-center gap-2 px-3 py-2 text-xs rounded-t-lg transition-colors border-t-2 ${
            activeTab === "status"
              ? "bg-[#161a2e] text-emerald-400 border-emerald-400 font-semibold"
              : "text-muted-foreground border-transparent hover:text-foreground hover:bg-white/5"
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> status.config
        </button>
      </div>

      {/* Code Window Body */}
      <div className="p-5 min-h-[260px] leading-relaxed select-text">
        <AnimatePresence mode="wait">
          {activeTab === "dev" && (
            <motion.div
              key="dev"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5 text-slate-300"
            >
              <div>
                <span className="text-purple-400">export const</span>{" "}
                <span className="text-blue-400">rizwana</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-emerald-400">name</span>:{" "}
                <span className="text-amber-300 font-medium">"Rizwana Naznin C A"</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-400">role</span>:{" "}
                <span className="text-amber-300">"Full-Stack Developer & AI Engineer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-400">location</span>:{" "}
                <span className="text-amber-300">"Ernakulam, Kerala 📍"</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-400">education</span>:{" "}
                <span className="text-amber-300">"BCA Grad 2026 (Zero Backlogs)"</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-400">availability</span>:{" "}
                <span className="text-emerald-400 font-semibold">"IMMEDIATE_JOINER"</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-400">shippedApps</span>:{" "}
                <span className="text-cyan-400">5</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-400">freelanceClients</span>:{" "}
                <span className="text-cyan-400">1</span>,
              </div>
              <div className="pl-4">
                <span className="text-emerald-400">coreTech</span>: [
                <span className="text-amber-300">"React"</span>,{" "}
                <span className="text-amber-300">"Django"</span>,{" "}
                <span className="text-amber-300">"Python"</span>,{" "}
                <span className="text-amber-300">"Docker"</span>,{" "}
                <span className="text-amber-300">"Vertex AI"</span>]
              </div>
              <div>{"};"}</div>
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5 text-slate-300"
            >
              <div>{"{"}</div>
              <div className="pl-4">
                <span className="text-purple-400">"frontend"</span>: [
                <span className="text-amber-300">"React"</span>,{" "}
                <span className="text-amber-300">"TypeScript"</span>,{" "}
                <span className="text-amber-300">"Tailwind"</span>,{" "}
                <span className="text-amber-300">"Shadcn UI"</span>],
              </div>
              <div className="pl-4">
                <span className="text-purple-400">"backend"</span>: [
                <span className="text-amber-300">"Django"</span>,{" "}
                <span className="text-amber-300">"Python"</span>,{" "}
                <span className="text-amber-300">"PostgreSQL"</span>,{" "}
                <span className="text-amber-300">"WebSockets"</span>],
              </div>
              <div className="pl-4">
                <span className="text-purple-400">"ai_automation"</span>: [
                <span className="text-amber-300">"Vertex AI Gemini API"</span>,{" "}
                <span className="text-amber-300">"Agentic AI"</span>],
              </div>
              <div className="pl-4">
                <span className="text-purple-400">"devops"</span>: [
                <span className="text-amber-300">"Docker"</span>,{" "}
                <span className="text-amber-300">"Vercel CI/CD"</span>,{" "}
                <span className="text-amber-300">"Nginx"</span>]
              </div>
              <div>{"}"}</div>
            </motion.div>
          )}

          {activeTab === "status" && (
            <motion.div
              key="status"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-2 text-slate-300"
            >
              <div className="text-slate-500">// Real-time Platform Readiness</div>
              <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg text-emerald-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>BUILD_STATUS</span>
                </span>
                <span className="font-semibold">PASSING ✓</span>
              </div>
              <div className="flex items-center justify-between bg-primary/10 border border-primary/20 p-2.5 rounded-lg text-primary">
                <span>LATENCY_BENCHMARK</span>
                <span className="font-semibold">&lt; 50ms</span>
              </div>
              <div className="flex items-center justify-between bg-accent/10 border border-accent/20 p-2.5 rounded-lg text-accent">
                <span>FAILOVER_RECOVERY</span>
                <span className="font-semibold">OFFLINE_RESILIENT</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Footer */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#090b12] border-t border-white/5 text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" /> Ready to build production features
        </span>
        <span className="text-slate-500 font-mono">UTF-8 • TS React</span>
      </div>
    </div>
  );
};
