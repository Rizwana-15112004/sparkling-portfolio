import { motion } from "framer-motion";
import { Cpu, Code2, Database, Brain, Cloud, Terminal } from "lucide-react";

const proficiencies = [
  { name: "Frontend Engineering (React, TS, Tailwind)", percentage: 90, color: "from-purple-500 to-indigo-500" },
  { name: "Backend Architecture (Python, Django, PostgreSQL)", percentage: 85, color: "from-cyan-500 to-blue-500" },
  { name: "AI & ML Automation (Vertex AI, Gemini, Agentic AI)", percentage: 80, color: "from-pink-500 to-rose-500" },
  { name: "Cloud & DevOps (Docker, Vercel CI/CD, Nginx, Linux)", percentage: 75, color: "from-emerald-500 to-teal-500" },
];

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "React.js", icon: "react", color: "61DAFB" },
      { name: "TypeScript", icon: "typescript", color: "3178C6" },
      { name: "React Native", icon: "react", color: "61DAFB" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
      { name: "Vite", icon: "vite", color: "646CFF" },
      { name: "HTML5", icon: "html5", color: "E34F26" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "accent",
    skills: [
      { name: "Python", icon: "python", color: "FFD43B" },
      { name: "Django", icon: "django", color: "0FA968" },
      { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
      { name: "PHP", icon: "php", color: "777BB4" },
      { name: "REST API", icon: "fastapi", color: "009688" },
    ],
  },
  {
    title: "AI Integration",
    icon: Brain,
    color: "tertiary",
    skills: [
      { name: "Vertex AI Gemini", icon: "googlegemini", color: "8E75B2" },
      { name: "Prompt Engineering", icon: "openai", color: "10A37F" },
      { name: "LLM Integration", icon: "huggingface", color: "FFD21E" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "accent",
    skills: [
      { name: "Docker", icon: "docker", color: "2496ED" },
      { name: "Vercel CI/CD", icon: "vercel", color: "FFFFFF" },
      { name: "GitHub Actions", icon: "githubactions", color: "2088FF" },
      { name: "Ubuntu", icon: "ubuntu", color: "E95420" },
      { name: "Bash", icon: "gnubash", color: "4EAA25" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "primary",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "Supabase", icon: "supabase", color: "3ECF8E" },
    ],
  },
  {
    title: "Tools & OS",
    icon: Terminal,
    color: "accent",
    skills: [
      { name: "Git", icon: "git", color: "F05032" },
      { name: "GitHub", icon: "github", color: "FFFFFF" },
      { name: "VS Code", icon: "vscodium", color: "007ACC" },
      { name: "Postman", icon: "postman", color: "FF6C37" },
      { name: "WordPress", icon: "wordpress", color: "21759B" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative noise">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            {"// TECHNICAL ARSENAL"}
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Production Skills &amp; <span className="text-gradient-aurora">Proficiencies</span>.
          </h2>
          <p className="text-lg text-muted-foreground font-outfit">
            Proven technologies I ship production applications with — tested across client projects, assignments, and AI pipelines.
          </p>
        </motion.div>

        {/* Proficiency Progress Meters */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-6xl">
          {proficiencies.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-5 rounded-2xl border border-white/10"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-mono text-xs md:text-sm font-semibold text-foreground">{p.name}</span>
                <span className="font-mono text-xs font-bold text-primary">{p.percentage}%</span>
              </div>
              <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card group relative p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-syne font-bold text-xl">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all cursor-default"
                    title={skill.name}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`}
                      alt={skill.name}
                      width={28}
                      height={28}
                      loading="lazy"
                      className="group-hover/item:scale-125 group-hover/item:-rotate-6 transition-transform duration-300"
                    />
                    <span className="text-[11px] font-mono text-muted-foreground text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

