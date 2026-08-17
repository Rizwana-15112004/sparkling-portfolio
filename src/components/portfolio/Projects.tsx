import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Star, Search, Filter, X, Award, Download, ExternalLink } from "lucide-react";

export interface ProjectItem {
  name: string;
  role: string;
  year: string;
  desc: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  accent?: "primary" | "accent";
  category: "Full-Stack" | "AI & ML" | "Certifications" | "Assignments";
}

const projects: ProjectItem[] = [
  {
    name: "BloodLife — Donate Blood, Save Lives",
    role: "Freelance Client Project",
    year: "2024",
    desc: "Full-stack Django web app delivered to a paying client end-to-end — donor registration, blood-group filtering, and location-based search using optimized Django ORM.",
    tags: ["Django", "Python", "MySQL", "MVT", "REST"],
    github: "https://github.com/Rizwana-15112004/blood-connect-pro",
    live: "https://rizwana-15112004.github.io/blood-connect-pro/",
    featured: true,
    accent: "primary",
    category: "Full-Stack",
  },
  {
    name: "SDRRS — Smart Disaster Response & Rescue",
    role: "Final Year Project",
    year: "2024–2025",
    desc: "Dual-mode real-time platform processing live IoT sensor data, BLE indoor geolocation & rescue triage. Offline-resilient with battery-backed local server failover.",
    tags: ["React", "TypeScript", "Python", "PostgreSQL", "WebSockets", "IoT"],
    github: "https://github.com/Rizwana-15112004/secure-haven-control",
    live: "https://secure-haven-control-rjgn.vercel.app/login",
    featured: true,
    accent: "accent",
    category: "Full-Stack",
  },
  {
    name: "Design to Delight",
    role: "React Internship Assignment",
    year: "2025",
    desc: "Pixel-accurate, fully responsive React app capturing the 'Websiteble Global' design spec. Implemented full Docker containerization with Nginx reverse proxy and multi-stage builds.",
    tags: ["React", "TypeScript", "Docker", "Nginx", "Vercel"],
    github: "https://github.com/Rizwana-15112004/design-to-delight",
    live: "https://design-to-delight-gamma.vercel.app/",
    featured: true,
    accent: "accent",
    category: "Full-Stack",
  },
  {
    name: "RealtySocial AI — Property Classifier",
    role: "AI Integration",
    year: "2024",
    desc: "Production Python backend integrated with Google Vertex AI Gemini API. Agentic AI pipeline that eliminated 100% manual property tagging effort.",
    tags: ["Vertex AI", "Python", "React", "Agentic AI"],
    github: "https://github.com/Rizwana-15112004/realtysocial-ai",
    live: "https://realtysocial-ai-main.vercel.app/",
    featured: true,
    accent: "primary",
    category: "AI & ML",
  },
  {
    name: "ICSET 2024 — Vertex AI Gemini API",
    role: "Professional Certification",
    year: "2024",
    desc: "Official recognition from the ICT Academy of Kerala & Google for Developers for completing the 'Generative AI with Vertex AI Gemini API' hands-on workshop at ICSET 2024.",
    tags: ["Vertex AI", "Gemini API", "Generative AI", "ICT Academy", "Google"],
    live: "/ICSET_2024_Certificate.jpg",
    featured: true,
    accent: "accent",
    category: "Certifications",
  },
  {
    name: "RapidApp AI Studio",
    role: "AI Workflow Builder",
    year: "2026",
    desc: "An AI-powered studio application enabling rapid concept generation and layout configuration.",
    tags: ["React", "TypeScript", "AI Integration", "Vercel"],
    github: "https://github.com/Rizwana-15112004/rapidapp-ai-studio",
    live: "https://rapidapp-ai-studio.vercel.app/",
    accent: "primary",
    category: "AI & ML",
  },
  {
    name: "Sammunat UI Dashboard",
    role: "Frontend Assignment",
    year: "2025",
    desc: "A responsive web application featuring modern user interfaces and dynamic data rendering. Developed to match strict design specifications.",
    tags: ["React", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/Rizwana-15112004/sammunat-assignment",
    live: "https://sammunat-internship-launch.vercel.app/",
    accent: "primary",
    category: "Assignments",
  },
  {
    name: "Algorithmic Trading Bot",
    role: "Python Engineering",
    year: "2026",
    desc: "An automated quantitative trading script built in Python. Designed to parse market data and execute logical trading operations.",
    tags: ["Python", "Automation", "Finance", "Algorithms"],
    github: "https://github.com/Rizwana-15112004/traidingbot",
    accent: "accent",
    category: "Full-Stack",
  },
  {
    name: "Fit Hub Connect",
    role: "Frontend Web App",
    year: "2026",
    desc: "A wellness and fitness platform interface designed to connect users with personalized training resources and communities.",
    tags: ["React", "TypeScript", "Tailwind", "Responsive Design"],
    github: "https://github.com/Rizwana-15112004/fit-hub-connect",
    live: "https://fit-hub-connect.vercel.app/",
    accent: "accent",
    category: "Full-Stack",
  },
  {
    name: "Clinic Connect Pro",
    role: "Healthcare Portal",
    year: "2026",
    desc: "A professional medical web portal allowing patients to browse healthcare services and easily manage clinic appointments.",
    tags: ["React", "TypeScript", "Vite", "Healthcare"],
    github: "https://github.com/Rizwana-15112004/clinic-connect-pro",
    live: "https://clinic-connect-pro-sepia.vercel.app/",
    accent: "accent",
    category: "Full-Stack",
  },
  {
    name: "Smart Bookings",
    role: "Scheduling Application",
    year: "2026",
    desc: "A robust scheduling platform featuring dynamic calendar interfaces and streamlined user-booking flows.",
    tags: ["React", "UI/UX", "State Management"],
    github: "https://github.com/Rizwana-15112004/smart-bookings",
    live: "https://smart-bookings-eight.vercel.app/",
    accent: "primary",
    category: "Full-Stack",
  },
  {
    name: "Salon Style Bookings",
    role: "Business Dashboard App",
    year: "2026",
    desc: "A comprehensive appointment management web application tailored specifically for salon and spa operations.",
    tags: ["React", "Web App", "Booking Flow"],
    github: "https://github.com/Rizwana-15112004/salon-style-bookings",
    live: "https://salon-style-bookings.vercel.app/",
    accent: "primary",
    category: "Full-Stack",
  },
  {
    name: "Smart Enquiry Hub",
    role: "Admin Dashboard",
    year: "2026",
    desc: "A centralized customer support management portal managing incoming inquiries and tracking ticket resolutions.",
    tags: ["React", "Dashboard UI", "Frontend Logic"],
    github: "https://github.com/Rizwana-15112004/smart-enquiry-hub",
    live: "https://smart-enquiry-hub.vercel.app/",
    accent: "accent",
    category: "Full-Stack",
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [selectedCertificate, setSelectedCertificate] = useState<{ name: string; url: string } | null>(null);

  const categories = ["All", "Featured", "Full-Stack", "AI & ML", "Certifications"];

  const filteredProjects = projects.filter((p) => {
    const matchesFilter =
      filter === "All"
        ? true
        : filter === "Featured"
        ? p.featured
        : p.category === filter;

    const matchesSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-32 relative noise">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 max-w-6xl"
        >
          <div>
            <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              {"// SHIPPED PRODUCTION CODE"}
            </p>
            <h2 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Projects that <span className="text-gradient-aurora">shipped</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md font-outfit text-base md:text-lg">
            Real applications. Real clients. Production deployments — not dummy tutorials.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 max-w-6xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-card/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-mono rounded-xl transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tech stack or title..."
              className="w-full bg-card/60 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground font-mono"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.05 }}
                className="glass-card group relative p-8 rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                {/* Accent glow on hover */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${
                    p.accent === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                        {p.featured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-mono rounded-full bg-primary/20 text-primary border border-primary/30 font-medium">
                            <Star className="w-3 h-3 fill-primary" /> Featured
                          </span>
                        )}
                        <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {p.year}
                        </span>
                        <span className="text-xs font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                          {p.category}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5 font-semibold">
                        {p.role}
                      </p>
                      <h3 className="font-syne font-bold text-2xl md:text-3xl group-hover:text-primary transition-colors leading-tight">
                        {p.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 font-outfit text-sm md:text-base">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full border border-white/10 bg-white/5 text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-10 flex-wrap">
                  {p.live && p.role === "Professional Certification" ? (
                    <button
                      onClick={() => setSelectedCertificate({ name: p.name, url: p.live! })}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-semibold bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-xl border border-primary/30"
                    >
                      <Award className="w-4 h-4 text-primary" />
                      View Certificate Modal
                    </button>
                  ) : (
                    p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:gap-2.5 transition-all bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-xl border border-primary/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )
                  )}

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-foreground hover:gap-2.5 transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10"
                    >
                      <Github className="w-4 h-4" />
                      View Repository
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-muted-foreground font-mono">
            No projects matched your current search filters.
          </div>
        )}
      </div>

      {/* Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#10121e] border border-primary/30 rounded-3xl overflow-hidden p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-syne font-bold text-xl md:text-2xl text-foreground flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" /> {selectedCertificate.name}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">Official Verification — Google for Developers & ICT Academy</p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/50 max-h-[70vh] flex items-center justify-center">
                <img
                  src={selectedCertificate.url}
                  alt={selectedCertificate.name}
                  className="w-full h-full object-contain max-h-[65vh]"
                />
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> VERIFIED CERTIFICATE
                </span>
                <a
                  href={selectedCertificate.url}
                  download="ICSET_2024_Certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-xl hover:scale-105 transition-all shadow-lg"
                >
                  <Download className="w-3.5 h-3.5" /> Download High Res Image
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

