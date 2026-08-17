import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const fullName = "RIZWANA NAZNIN C A";

  useEffect(() => {
    // Session storage check to skip on repeat visits
    if (sessionStorage.getItem("hasLoadedPortfolio")) {
      setShow(false);
      onDone();
      return;
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          sessionStorage.setItem("hasLoadedPortfolio", "true");
          setTimeout(() => {
            setShow(false);
            setTimeout(onDone, 300);
          }, 150);
          return 100;
        }
        return p + 10;
      });
    }, 45); // Completes in <700ms

    return () => clearInterval(interval);
  }, [onDone]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated gradient background ambient glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center gap-8 px-6">
            {/* Monogram Badge */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-accent"
              />
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                <span className="font-display font-bold text-2xl text-background">RN</span>
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl tracking-[0.2em] flex justify-center gap-x-1">
                {fullName.split("").map((char, i) => (
                  <span key={i} className={char === " " ? "w-2" : "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              <p className="font-mono text-xs text-muted-foreground mt-2 tracking-widest">
                {"// FULL-STACK & AI ENGINEER · BCA 2026"}
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-64 md:w-80">
              <div className="h-1 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 font-mono text-[11px] text-muted-foreground">
                <span>BOOTING_PORTFOLIO</span>
                <span className="text-accent">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
