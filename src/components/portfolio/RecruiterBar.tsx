import { motion } from "framer-motion";
import { Sparkles, Download, Phone, MapPin, CheckCircle2 } from "lucide-react";

interface RecruiterBarProps {
  onOpenHireModal: () => void;
}

export const RecruiterBar = ({ onOpenHireModal }: RecruiterBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full bg-[#0b0c16]/90 backdrop-blur-xl border-b border-primary/30 py-3 px-4 relative z-40 text-xs font-mono"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Recruiter Badge */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/40 font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> RECRUITER QUICK MATCH MODE
          </div>

          <div className="hidden lg:flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <strong className="text-foreground">Availability:</strong> Immediate Joiner
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <strong className="text-foreground">Degree:</strong> BCA 2026 (0 Backlogs)
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <strong className="text-foreground">Paid Client SDLC:</strong> Django &amp; MySQL
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Remote / Hybrid / On-Site
            </span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918113003356"
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-foreground px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" /> +91 8113003356
          </a>

          <a
            href="/Rizwana_CV.pdf"
            download="Rizwana_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-slate-300 hover:text-foreground px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-accent" /> Resume PDF
          </a>

          <button
            onClick={onOpenHireModal}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-4 py-1.5 rounded-xl hover:scale-105 transition-all shadow-md shadow-primary/20"
          >
            ⚡ Schedule Interview / Hire
          </button>
        </div>
      </div>
    </motion.div>
  );
};
