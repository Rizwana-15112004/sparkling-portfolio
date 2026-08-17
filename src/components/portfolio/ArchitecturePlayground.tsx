import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ArrowRight, ShieldCheck, Zap, Layers, Sparkles, CheckCircle, Activity } from "lucide-react";

export const ArchitecturePlayground = () => {
  const [activeArch, setActiveArch] = useState<"sdrrs" | "realty" | "blood">("sdrrs");
  const [selectedNodeIdx, setSelectedNodeIdx] = useState<number>(0);

  const architectures = {
    sdrrs: {
      title: "SDRRS — Real-Time IoT & Geolocation Architecture",
      subtitle: "Dual-mode disaster rescue platform with battery-backed local failover",
      badge: "Final Year Project (2024–2025)",
      nodes: [
        { label: "IoT Sensors", type: "Hardware Data Source", tech: "Live Sensor Feeds", detail: "Feeds emergency telemetry at 100ms intervals over MQTT to the local edge node." },
        { label: "Failover Node", type: "Offline-Resilient", tech: "Python Battery Server", detail: "Automated local battery backup server kicks in within 50ms during central grid failure." },
        { label: "WebSocket Engine", type: "Real-Time Pipeline", tech: "Sub-second Latency", detail: "Broadcasts triaged emergency alert packages to active rescue personnel dashboards." },
        { label: "BLE Geolocation", type: "Indoor Triage", tech: "PostgreSQL & React", detail: "Triangulates victim distance using RSSI signal decay for rapid indoor location mapping." },
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
        { label: "Property Upload", type: "Media Ingestion", tech: "React & Python", detail: "Ingests high-resolution room photos and structural floor plans via secure multipart stream." },
        { label: "Prompt Orchestrator", type: "Agentic Logic", tech: "Python Agent", detail: "Constructs multi-modal visual prompts enforcing JSON schema constraints on outputs." },
        { label: "Vertex AI Gemini", type: "LLM Processing", tech: "Google Cloud Gemini API", detail: "Executes vision classification identifying room type, lighting quality, and amenity features." },
        { label: "Structured JSON", type: "Auto Tagging", tech: "PostgreSQL Storage", detail: "Parses zero-hallucination JSON payload directly updating property search indexes." },
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
        { label: "Donor Registration", type: "Web Frontend", tech: "Django MVT Templates", detail: "Validated donor registration form with real-time location and blood type verification." },
        { label: "Matching Engine", type: "Backend Logic", tech: "Optimized Django ORM", detail: "Queries compatible blood donors sorted by proximity using index-backed ORM filters." },
        { label: "MySQL DB", type: "Data Persistence", tech: "Location & Group Queries", detail: "ACID-compliant relational database ensuring patient data integrity and instant lookups." },
        { label: "Client Handoff", type: "Production Handoff", tech: "Zero Manual Lookup Effort", detail: "Delivered production code, user guides, and deployed infrastructure to client." },
      ],
      highlights: [
        "Delivered full software development lifecycle to a paying client",
        "Automated blood-group matching reducing lookup effort to zero",
        "Complete Git versioning and technical documentation delivered",
      ],
    },
  };

  const current = architectures[activeArch];
  const selectedNode = current.nodes[selectedNodeIdx] || current.nodes[0];

  return (
    <section className="py-24 relative border-t border-b border-white/10 bg-[#090a12]/80">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="font-mono text-sm text-primary mb-3 flex items-center justify-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            {"// ENGINEERING ARCHITECTURE PLAYGROUND"}
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
            Interactive <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">System Diagrams</span>.
          </h2>
          <p className="text-muted-foreground font-sans text-base md:text-lg max-w-2xl mx-auto">
            Click any architecture node below to inspect live request telemetry, data flow contracts, and backend implementation details.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-3xl mx-auto">
          <button
            onClick={() => { setActiveArch("sdrrs"); setSelectedNodeIdx(0); }}
            className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-mono font-semibold transition-all flex items-center gap-2 border ${
              activeArch === "sdrrs"
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
            }`}
          >
            <Zap className="w-4 h-4 text-accent" /> SDRRS Disaster Platform
          </button>

          <button
            onClick={() => { setActiveArch("realty"); setSelectedNodeIdx(0); }}
            className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-mono font-semibold transition-all flex items-center gap-2 border ${
              activeArch === "realty"
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
            }`}
          >
            <Cpu className="w-4 h-4 text-accent" /> Vertex AI Gemini Pipeline
          </button>

          <button
            onClick={() => { setActiveArch("blood"); setSelectedNodeIdx(0); }}
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-emerald font-mono text-xs mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> {current.badge}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                  {current.title}
                </h3>
                <p className="text-xs md:text-sm font-sans text-muted-foreground mt-1">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Architecture Interactive Node Pipeline Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {current.nodes.map((node, idx) => {
                const isSelected = selectedNodeIdx === idx;
                return (
                  <div key={node.label} className="relative cursor-pointer" onClick={() => setSelectedNodeIdx(idx)}>
                    <div className={`p-5 rounded-2xl border transition-all h-full flex flex-col justify-between ${
                      isSelected
                        ? "bg-primary/20 border-accent shadow-lg shadow-accent/20 scale-105"
                        : "glass-card hover:border-primary/50"
                    }`}>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-mono text-accent font-semibold uppercase tracking-wider">
                            Node 0{idx + 1}
                          </span>
                          {isSelected && <Activity className="w-3.5 h-3.5 text-accent animate-pulse" />}
                        </div>
                        <h4 className="font-display font-bold text-lg text-foreground mb-1">
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
                );
              })}
            </div>

            {/* Node Telemetry Inspector Panel */}
            <div className="bg-[#040615]/90 rounded-2xl p-6 border border-accent/40 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs text-accent font-semibold uppercase tracking-wider">
                  Live Node Inspector — {selectedNode.label} ({selectedNode.tech})
                </span>
              </div>
              <p className="text-sm font-sans text-slate-200 leading-relaxed">
                {selectedNode.detail}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h5 className="font-mono text-xs text-primary font-semibold uppercase tracking-wider mb-3">
                Key Engineering Deliverables &amp; Performance Benchmarks
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs font-sans text-slate-300">
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
