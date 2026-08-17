import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, ExternalLink, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import { useState } from "react";

const contacts = [
  { icon: Mail, label: "Email", value: "rizwananazninca@gmail.com", href: "mailto:rizwananazninca@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8113003356", href: "tel:+918113003356" },
  { icon: Github, label: "GitHub", value: "Rizwana-15112004", href: "https://github.com/Rizwana-15112004" },
  { icon: ExternalLink, label: "Vercel Projects", value: "rizwanas-projects", href: "https://vercel.com/rizwanas-projects-a23354e2" },
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rizwananazninca@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden noise">
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            {"// LET'S BUILD SOMETHING GREAT"}
          </p>
          <h2 className="font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Let's <span className="text-gradient-aurora italic">work</span>
            <br />
            together<span className="text-primary font-serif">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-outfit">
            Available immediately for full-time engineering, contract, or full-stack roles.
            Remote, hybrid, or on-site across Kerala &amp; global teams.
          </p>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-foreground font-mono text-xs md:text-sm mb-10 transition-all hover:scale-105"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-primary" />
                <span>rizwananazninca@gmail.com</span>
              </>
            )}
          </button>

          <form 
            action="https://formsubmit.co/rizwananazninca@gmail.com" 
            method="POST"
            className="max-w-lg mx-auto flex flex-col gap-4 text-left"
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required
                className="px-5 py-4 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md focus:outline-none focus:border-primary transition-colors text-foreground w-full font-mono text-sm"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required
                className="px-5 py-4 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md focus:outline-none focus:border-primary transition-colors text-foreground w-full font-mono text-sm"
              />
            </div>
            <textarea 
              name="message" 
              placeholder="Tell me about your team or project requirements..." 
              required
              rows={4}
              className="px-5 py-4 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md focus:outline-none focus:border-primary transition-colors text-foreground resize-none w-full font-outfit text-sm"
            />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold text-base px-8 py-4 rounded-2xl hover:scale-[1.02] transition-all glow w-full shadow-xl shadow-primary/20"
            >
              Send Message
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <c.icon className="w-5 h-5 text-primary mb-3" />
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                  {c.label}
                </div>
                <div className="text-sm font-medium font-mono break-all text-foreground">
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <div className="mt-20 pt-8 border-t border-white/10 max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm text-muted-foreground font-mono">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            Chengara, Pattimattom, Ernakulam, Kerala
          </div>
          <div>
            © 2026 Rizwana Naznin C A · Full-Stack &amp; AI Engineer
          </div>
        </div>
      </div>
    </section>
  );
};

