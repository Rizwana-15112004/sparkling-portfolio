import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";

const projects = [
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
  },
  {
    name: "SDRRS — Smart Disaster Response & Rescue",
    role: "Final Year Project",
    year: "2024–2025",
    desc: "Dual-mode real-time platform processing live IoT sensor data, BLE indoor geolocation & rescue triage. Offline-resilient with battery-backed local server failover.",
    tags: ["React", "TypeScript", "Python", "PostgreSQL", "WebSockets", "IoT"],
    github: "https://github.com/Rizwana-15112004/secure-haven-control",
    live: "https://secure-haven-control-9ed7-1e5vgba2p-rizwanas-projects-a23354e2.vercel.app/",
    featured: true,
    accent: "accent",
  },
  {
    name: "Design to Delight",
    role: "React Internship Assignment",
    year: "2025",
    desc: "Pixel-accurate, fully responsive React app capturing the 'Websiteble Global' design spec. Implemented full Docker containerization with Nginx reverse proxy and multi-stage builds.",
    tags: ["React", "TypeScript", "Docker", "Nginx", "Vercel"],
    github: "https://github.com/Rizwana-15112004/design-to-delight",
    live: "https://design-to-delight-gamma.vercel.app/",
    accent: "accent",
  },
  {
    name: "RealtySocial AI — Property Classifier",
    role: "AI Integration",
    year: "2024",
    desc: "Production Python backend integrated with Google Vertex AI Gemini API. Agentic AI pipeline that eliminated 100% manual property tagging effort.",
    tags: ["Vertex AI", "Python", "React", "Agentic AI"],
    github: "https://github.com/Rizwana-15112004/realtysocial-ai",
    live: "https://realtysocial-ai-main.vercel.app/",
    accent: "primary",
  },
  {
    name: "ICSET 2024 — Vertex AI Gemini API",
    role: "Professional Certification",
    year: "2024",
    desc: "Official recognition from the ICT Academy of Kerala & Google for Developers for completing the 'Generative AI with Vertex AI Gemini API' hands-on workshop at ICSET 2024.",
    tags: ["Vertex AI", "Gemini API", "Generative AI", "ICT Academy", "Google"],
    live: "https://drive.google.com/file/d/1ZmbQqka0FmZWJFNwgYVopPQaveeDAD9_/view?usp=drive_link",
    accent: "accent",
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
  },
  {
    name: "Algorithmic Trading Bot",
    role: "Python Engineering",
    year: "2026",
    desc: "An automated quantitative trading script built in Python. Designed to parse market data and execute logical trading operations.",
    tags: ["Python", "Automation", "Finance", "Algorithms"],
    github: "https://github.com/Rizwana-15112004/traidingbot",
    accent: "accent",
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
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-16 max-w-6xl"
        >
          <div>
            <p className="font-mono text-sm text-primary mb-4">{"// selected work"}</p>
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-tight">
              Projects that <span className="text-gradient-primary">shipped</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Real applications. Real users. Real deployments — not tutorials.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={`group relative p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                p.featured ? "lg:row-span-1" : ""
              }`}
            >
              {/* Hover gradient */}
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${
                  p.accent === "primary" ? "bg-primary" : "bg-accent"
                }`}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {p.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                          <Star className="w-3 h-3" /> Featured
                        </span>
                      )}
                      <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                      {p.role}
                    </p>
                    <h3 className="font-display font-bold text-2xl md:text-3xl group-hover:text-primary transition-colors leading-tight">
                      {p.name}
                    </h3>
                  </div>
                  <a 
                    href={p.live || p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-3 rounded-full border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-45"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-border bg-secondary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-semibold"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      {p.role === "Professional Certification" ? "View Certificate" : "Live Demo"}
                    </a>
                  )}

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
