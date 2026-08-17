import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ArrowRight, ShieldCheck, Zap, Layers, Sparkles, CheckCircle } from "lucide-react";

export const ArchitecturePlayground = () => {
  const [activeArch, setActiveArch] = useState<"sdrrs" | "realty" | "blood">("sdrrs");

  const architectures = {
    sdrrs: {
      title: "SDRRS — Real-Time IoT & Geolocation Architecture",
      subtitle: "Dual-mode disaster rescue platform with battery-backed local failover",
      badge: "Final Year Project (2024–2025)",
      nodes: [
        { label: "IoT Sensors", type: "Hardware Data Source", tech: "Live Sensor Feeds" },
        { label: "Failover Node", type: "Offline-Resilient", tech: "Python Battery Server" },
        { label: "WebSocket Engine", type: "Real-Time Pipeline", tech: "Sub-second Latency" },
        { label: "BLE Geolocation", type: "Indoor Triage", tech: "PostgreSQL & React" },
      ],
      highlights: [
        "Sub-second alert propagation during critical disaster events",
        "Battery-backed failover ensuring 100% offline continuity",
        "BLE beacon triangulation for indoor rescue team dispatch",
      ],
    },
    realty: {
      title: "RealtySocial AI — Generative Tagging Pipeline",
      subtitle: "Agentic AI property classification automating 100% manual tagging effort",
      badge: "Google Vertex AI Gemini Integration",
      nodes: [
        { label: "Property Upload", type: "Media Ingestion", tech: "React & Python" },
        { label: "Prompt Orchestrator", type: "Agentic Logic", tech: "Python Agent" },
        { label: "Vertex AI Gemini", type: "LLM Processing", tech: "Google Cloud Gemini API" },
        { label: "Structured JSON", type: "Auto Tagging", tech: "PostgreSQL Storage" },
      ],
      highlights: [
        "Eliminated 100% manual property categorization overhead",
        "Zero hallucination structured JSON schema output",
        "Multi-modal image analysis for interior/exterior classification",
      ],
    },
    blood: {
      title: "BloodLife — Client SDLC & ORM Matching Engine",
      subtitle: "Full-stack Django web application delivered to a paying client end-to-end",
      badge: "Paid Freelance Project (2024)",
      nodes: [
        { label: "Donor Registration", type: "Web Frontend", tech: "Django MVT Templates" },
        { label: "Matching Engine", type: "Backend Logic", tech: "Optimized Django ORM" },
        { label: "MySQL DB", type: "Data Persistence", tech: "Location & Group Queries" },
        { label: "Client Handoff", type: "Production Handoff", tech: "Zero Manual Lookup Effort" },
      ],
      highlights: [
        "Delivered full software development lifecycle to a paying client",
        "Automated blood-group matching reducing lookup effort to zero",
        "Complete Git versioning and technical documentation delivered",
      ],
    },
  };

  const current = architectures[activeArch];

  return (
    <section className="py-24 relative noise border-t border-b border-white/10 bg-[#090a12]/80">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="font-mono text-sm text-primary mb-3 flex items-center justify-center gap-2">
            <Layers className="w-4 h-4" />
            {"// ENGINEERING ARCHITECTURE PLAYGROUND"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
            Interactive <span className="text-gradient-aurora">System Diagrams</span>.
          </h2>
          <p className="text-muted-foreground font-outfit text-base md:text-lg max-w-2xl mx-auto">
            Click through real software architecture flows engineered across client projects, AI integrations, and mission-critical platforms.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-3xl mx-auto">
          <button
            onClick={() => setActiveArch("sdrrs")}
            className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-mono font-semibold transition-all flex items-center gap-2 border ${
              activeArch === "sdrrs"
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
            }`}
          >
            <Zap className="w-4 h-4 text-accent" /> SDRRS Disaster Platform
          </button>

          <button
            onClick={() => setActiveArch("realty")}
            className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-mono font-semibold transition-all flex items-center gap-2 border ${
              activeArch === "realty"
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
            }`}
          >
            <Cpu className="w-4 h-4 text-accent" /> Vertex AI Gemini Pipeline
          </button>

          <button
            onClick={() => setActiveArch("blood")}
            className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-mono font-semibold transition-all flex items-center gap-2 border ${
              activeArch === "blood"
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> BloodLife Paid Client SDLC
          </button>
        </div>

        {/* Architecture Card Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeArch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card max-w-5xl mx-auto p-8 rounded-3xl border border-primary/30 shadow-2xl relative overflow-hidden"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-mono text-xs mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> {current.badge}
                </span>
                <h3 className="font-syne font-bold text-2xl md:text-3xl text-foreground">
                  {current.title}
                </h3>
                <p className="text-xs md:text-sm font-outfit text-muted-foreground mt-1">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Architecture Node Pipeline Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {current.nodes.map((node, idx) => (
                <div key={node.label} className="relative group">
                  <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-primary font-semibold uppercase tracking-wider mb-1">
                        Node 0{idx + 1}
                      </div>
                      <h4 className="font-syne font-bold text-lg text-foreground mb-1">
                        {node.label}
                      </h4>
                      <p className="text-xs font-mono text-muted-foreground mb-3">
                        {node.type}
                      </p>
                    </div>

                    <div className="text-xs font-mono bg-white/5 p-2 rounded-xl text-slate-300 border border-white/5 font-medium">
                      ⚡ {node.tech}
                    </div>
                  </div>

                  {idx < current.nodes.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-primary/20 text-primary items-center justify-center border border-primary/40">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Key Engineering Highlights */}
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h5 className="font-mono text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                Key Engineering Deliverables &amp; Performance Benchmarks
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs font-outfit text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
