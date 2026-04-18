import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const fullName = "RIZWANA NAZNIN C A";

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            setTimeout(onDone, 700);
          }, 400);
          return 100;
        }
        return p + 2;
      });
    }, 35);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated gradient blobs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]"
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

          <div className="relative z-10 flex flex-col items-center gap-10 px-6">
            {/* Spinning rings + monogram */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border-2 border-transparent border-b-accent border-l-accent/40"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border border-dashed border-[hsl(330_90%_65%)]/60"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-[hsl(330_90%_65%)] to-accent flex items-center justify-center shadow-[0_0_60px_hsl(265_92%_68%/0.7)]"
              >
                <span className="font-display font-bold text-3xl text-background">RN</span>
              </motion.div>
            </div>

            {/* Name typed letter by letter */}
            <div className="text-center">
              <div className="font-display font-bold text-2xl md:text-4xl tracking-[0.25em] flex justify-center flex-wrap gap-x-1">
                {fullName.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className={char === " " ? "w-3" : "text-gradient-aurora"}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="font-mono text-xs md:text-sm text-muted-foreground mt-3 tracking-widest"
              >
                {"// FULL-STACK DEVELOPER · BCA · KERALA"}
              </motion.p>
            </div>

            {/* Progress bar */}
            <div className="w-72 md:w-96">
              <div className="h-1 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-[hsl(330_90%_65%)] to-accent"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <div className="flex justify-between mt-2 font-mono text-[11px] text-muted-foreground">
                <span>BOOTING_PORTFOLIO.exe</span>
                <span className="text-primary">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
