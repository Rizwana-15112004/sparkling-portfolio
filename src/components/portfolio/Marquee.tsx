const items = [
  { name: "react", label: "React", color: "61DAFB" },
  { name: "typescript", label: "TypeScript", color: "3178C6" },
  { name: "django", label: "Django", color: "0FA968" },
  { name: "python", label: "Python", color: "FFD43B" },
  { name: "googlegemini", label: "Vertex AI", color: "8E75B2" },
  { name: "docker", label: "Docker", color: "2496ED" },
  { name: "postgresql", label: "PostgreSQL", color: "4169E1" },
  { name: "nodedotjs", label: "Node.js", color: "5FA04E" },
  { name: "tailwindcss", label: "Tailwind", color: "06B6D4" },
  { name: "supabase", label: "Supabase", color: "3ECF8E" },
  { name: "react", label: "React Native", color: "61DAFB" },
  { name: "vercel", label: "Vercel", color: "FFFFFF" },
  { name: "github", label: "GitHub", color: "FFFFFF" },
  { name: "mysql", label: "MySQL", color: "4479A1" },
];

export const Marquee = () => {
  return (
    <section className="border-y border-border bg-card/40 backdrop-blur-sm py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-10 px-6 font-display text-xl md:text-2xl">
            <div className="flex items-center gap-3 group cursor-default">
              <img
                src={`https://cdn.simpleicons.org/${item.name}/${item.color}`}
                alt={item.label}
                width={28}
                height={28}
                loading="lazy"
                className="group-hover:scale-125 transition-transform"
              />
              <span className="text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </div>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};
