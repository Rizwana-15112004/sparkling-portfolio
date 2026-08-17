import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MessageSquare, Download, Check, Sparkles, Send, ShieldCheck } from "lucide-react";

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireModal = ({ isOpen, onClose }: HireModalProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rizwananazninca@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 8113003356");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#0d0f1a] border border-primary/40 rounded-3xl p-6 md:p-8 shadow-2xl shadow-primary/20 overflow-hidden font-sans"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6 relative z-10 border-b border-white/10 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  IMMEDIATE JOINER • ZERO BACKLOGS
                </div>
                <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-foreground flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" /> Express Hire &amp; Interview Request
                </h3>
                <p className="text-xs font-mono text-muted-foreground mt-1">
                  Connect directly with Rizwana Naznin C A for Full-Stack, React, Django &amp; AI Engineer roles.
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-foreground shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Contact Actions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 relative z-10">
              <a
                href="mailto:rizwananazninca@gmail.com?subject=Interview%20Invitation%20-%20Full-Stack%20/%20AI%20Engineer&body=Hi%20Rizwana,%20We%20reviewed%20your%20portfolio%20and%20would%20like%20to%20schedule%20an%20interview!"
                className="flex items-center gap-3 p-4 rounded-2xl bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-primary font-semibold">Direct Email</div>
                  <div className="text-xs font-mono text-slate-300 group-hover:text-foreground">rizwananazninca@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/918113003356?text=Hi%20Rizwana,%20we%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20developer%20role!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-emerald-400 font-semibold">WhatsApp Chat</div>
                  <div className="text-xs font-mono text-slate-300 group-hover:text-foreground">+91 8113003356</div>
                </div>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
              >
                <div className="p-2.5 rounded-xl bg-white/10 text-accent">
                  {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">Copy Email Address</div>
                  <div className="text-xs font-mono text-foreground font-semibold">
                    {copiedEmail ? "Copied to Clipboard!" : "rizwananazninca@gmail.com"}
                  </div>
                </div>
              </button>

              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-left"
              >
                <div className="p-2.5 rounded-xl bg-white/10 text-accent">
                  {copiedPhone ? <Check className="w-5 h-5 text-emerald-400" /> : <Phone className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">Copy Phone Number</div>
                  <div className="text-xs font-mono text-foreground font-semibold">
                    {copiedPhone ? "Copied to Clipboard!" : "+91 8113003356"}
                  </div>
                </div>
              </button>
            </div>

            {/* Quick Email Form */}
            <form
              action="https://formsubmit.co/rizwananazninca@gmail.com"
              method="POST"
              className="space-y-3 relative z-10 border-t border-white/10 pt-5"
            >
              <input type="hidden" name="_subject" value="🚀 Express Recruiter Interview Request!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="company_or_recruiter"
                  placeholder="Company / Recruiter Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card/60 border border-white/10 text-xs font-mono text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Work Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-card/60 border border-white/10 text-xs font-mono text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground"
                />
              </div>

              <textarea
                name="message"
                rows={3}
                required
                defaultValue="Hi Rizwana, we reviewed your portfolio and would like to invite you for an interview for a Full-Stack / AI Engineer position."
                className="w-full px-4 py-3 rounded-xl bg-card/60 border border-white/10 text-xs font-outfit text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground resize-none"
              />

              <div className="flex items-center justify-between gap-4 pt-2">
                <a
                  href="/Rizwana_CV.pdf"
                  download="Rizwana_CV.pdf"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-foreground bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/10 transition-all"
                >
                  <Download className="w-3.5 h-3.5" /> Resume PDF
                </a>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-xs font-mono bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Request
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-2 mt-5 text-[11px] font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Responses guaranteed within 2-4 business hours
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
