import { motion } from "framer-motion";

const lines = [
  { t: "const ", c: "text-accent" },
  { t: "developer ", c: "text-primary" },
  { t: "= {", c: "text-foreground" },
];

const body = [
  ["  name:", "'Rizwana Naznin'"],
  ["  role:", "'Full-Stack Developer'"],
  ["  location:", "'Ernakulam, Kerala'"],
  ["  stack:", "['React', 'Django', 'Python']"],
  ["  available:", "true"],
];

export const CodeWindow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden"
    >
      {/* glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-transparent to-accent/30 opacity-50 blur-xl -z-10" />

      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/40">
        <span className="w-3 h-3 rounded-full bg-destructive/70" />
        <span className="w-3 h-3 rounded-full bg-accent/70" />
        <span className="w-3 h-3 rounded-full bg-primary/70" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">developer.ts</span>
      </div>

      {/* body */}
      <div className="p-6 font-mono text-sm leading-relaxed">
        <div className="mb-1">
          {lines.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.15 }}
              className={l.c}
            >
              {l.t}
            </motion.span>
          ))}
        </div>
        {body.map(([k, v], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.1 }}
          >
            <span className="text-muted-foreground">{k}</span>{" "}
            <span className={v === "true" ? "text-primary" : "text-accent"}>{v}</span>
            <span className="text-muted-foreground">,</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          className="text-foreground"
        >
          {"};"}
        </motion.div>
      </div>
    </motion.div>
  );
};
