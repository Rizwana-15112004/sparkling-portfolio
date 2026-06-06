import { motion } from "framer-motion";

const innerLogos = [
  { name: "react", color: "61DAFB" },
  { name: "typescript", color: "3178C6" },
  { name: "django", color: "092E20" },
  { name: "python", color: "3776AB" },
  { name: "docker", color: "2496ED" },
];

const outerLogos = [
  { name: "tailwindcss", color: "06B6D4" },
  { name: "postgresql", color: "4169E1" },
  { name: "supabase", color: "3ECF8E" },
  { name: "vercel", color: "FFFFFF" },
  { name: "nodedotjs", color: "5FA04E" },
  { name: "github", color: "FFFFFF" },
  { name: "googlegemini", color: "8E75B2" },
];

const Logo = ({ name, color, size = 28 }: { name: string; color: string; size?: number }) => (
  <img
    src={`https://cdn.simpleicons.org/${name}/${color}`}
    alt={name}
    width={size}
    height={size}
    loading="lazy"
    className="select-none drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
  />
);

export const TechOrbit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[460px] h-[460px] mx-auto hidden md:flex items-center justify-center"
    >
      {/* Center glow */}
      <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-primary/40 via-tertiary/30 to-accent/40 blur-3xl" />

      {/* Rings */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-primary/30" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-accent/20" />

      {/* Center core */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-[hsl(330_90%_65%)] to-accent flex items-center justify-center shadow-[0_0_60px_hsl(265_92%_68%/0.6)]"
      >
        <span className="font-display font-bold text-3xl text-background">RN</span>
      </motion.div>

      {/* Inner orbit */}
      <div className="absolute w-[280px] h-[280px] flex items-center justify-center">
        {innerLogos.map((logo, i) => (
          <div
            key={logo.name}
            className="absolute orbit"
            style={{ animationDelay: `${-(i * (18 / innerLogos.length))}s` }}
          >
            <div className="w-12 h-12 rounded-xl bg-card/80 backdrop-blur-md border border-border flex items-center justify-center hover:border-primary hover:scale-110 transition-all">
              <Logo name={logo.name} color={logo.color} size={26} />
            </div>
          </div>
        ))}
      </div>

      {/* Outer orbit */}
      <div className="absolute w-[400px] h-[400px] flex items-center justify-center">
        {outerLogos.map((logo, i) => (
          <div
            key={logo.name}
            className="absolute orbit-reverse"
            style={{ animationDelay: `${-(i * (25 / outerLogos.length))}s` }}
          >
            <div className="w-11 h-11 rounded-xl bg-card/80 backdrop-blur-md border border-border flex items-center justify-center hover:border-accent hover:scale-110 transition-all">
              <Logo name={logo.name} color={logo.color} size={22} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
