import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, Zap } from "lucide-react";
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

export const About = () => {
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
            A BCA graduate who already <span className="text-gradient-primary">ships real software</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm a BCA graduate from MG University — and I build with pure energy and vibes. 
            I delivered a real Django web app to a paying freelance client, built an offline-resilient 
            IoT rescue system as my graduation project, and integrated Google Vertex AI Gemini 
            into a working Python + React app. I learn by shipping.
          </p>
        </motion.div>

        {/* Unique builder-machine animation */}
        <div className="mb-20">
          <BuilderMachine />
          <p className="text-center font-mono text-xs text-muted-foreground mt-6">
            {"// how I build: gears turn, code flows, products ship."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
