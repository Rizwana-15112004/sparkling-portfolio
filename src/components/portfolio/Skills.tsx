import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
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
    color: "tertiary",
    skills: [
      { name: "Vertex AI Gemini", icon: "googlegemini", color: "8E75B2" },
      { name: "Prompt Engineering", icon: "openai", color: "10A37F" },
      { name: "LLM Integration", icon: "huggingface", color: "FFD21E" },
    ],
  },
  {
    title: "DevOps & Cloud",
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
    color: "primary",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
      { name: "MySQL", icon: "mysql", color: "4479A1" },
      { name: "Supabase", icon: "supabase", color: "3ECF8E" },
    ],
  },
  {
    title: "Tools",
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

const dotColor = (c: string) =>
  c === "primary" ? "bg-primary" : c === "accent" ? "bg-accent" : "bg-[hsl(330_90%_65%)]";

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4">{"// stack"}</p>
          <h2 className="font-display font-bold text-5xl md:text-7xl mb-6 leading-tight">
            Hands-on across <span className="text-gradient-aurora">the full stack</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Tools and frameworks I've actually built and shipped projects with — not a buzzword list.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/60 hover:-translate-y-2 transition-all duration-300 tilt-card overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-3 mb-5">
                <span className={`w-2 h-2 rounded-full ${dotColor(cat.color)} animate-pulse`} />
                <h3 className="font-display font-bold text-xl">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-secondary/60 border border-border hover:border-primary hover:bg-secondary transition-all cursor-default"
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
                    <span className="text-[11px] text-muted-foreground text-center leading-tight">
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
