import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    title: "Freelance Django Developer",
    org: "Self-Employed — BloodLife",
    points: [
      "Delivered full-stack Django app to a paying client end-to-end",
      "Engineered MVT backend, ORM models, MySQL schema, class-based views",
      "Managed full Git workflow with clean commit history & branching",
    ],
  },
  {
    year: "2025",
    title: "React Internship Assignment",
    org: "Design to Delight — Live Deployed",
    points: [
      "Translated design spec into pixel-accurate React app",
      "Deployed live on Vercel with TypeScript & Tailwind CSS",
    ],
  },
  {
    year: "2023–2026",
    title: "Bachelor of Computer Applications (BCA)",
    org: "MG University, Kerala — Graduated",
    points: [
      "Specialization: Full-Stack Development & AI-Integrated Applications",
      "Completed degree with zero academic backlogs",
      "Graduation Project: SDRRS — Smart Disaster Response System",
    ],
  },
];

const certs = [
  "Generative AI with Vertex AI Gemini API — Google Workshop",
  "HP LIFE — Customer Experience for Business Success",
  "WordPress Website Creation — Add-on Course",
  "NSS Volunteer — National Service Scheme",
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4">{"// timeline"}</p>
          <h2 className="font-display font-bold text-5xl md:text-7xl leading-tight">
            Experience &amp; <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">education</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                  <div className="glass-card p-6">
                    <div className="font-mono text-xs text-accent font-semibold mb-1">{item.year}</div>
                    <h3 className="font-display font-bold text-2xl mb-1 text-white">{item.title}</h3>
                    <p className="text-primary text-sm mb-4 font-mono">{item.org}</p>
                    <ul className="space-y-2">
                      {item.points.map((pt, j) => (
                        <li key={j} className="flex gap-3 text-muted-foreground font-sans text-sm">
                          <span className="text-accent mt-0.5 shrink-0">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 h-fit lg:sticky lg:top-24"
          >
            <h3 className="font-display font-bold text-2xl mb-6 flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Workshops &amp; Training
            </h3>
            <ul className="space-y-4">
              {certs.map((c, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground border-l-2 border-white/10 pl-4 hover:border-accent hover:text-foreground transition-all font-sans"
                >
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
