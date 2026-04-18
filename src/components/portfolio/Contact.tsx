import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, ExternalLink, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "rizwananazninca@gmail.com", href: "mailto:rizwananazninca@gmail.com?subject=Contact from Portfolio" },
  { icon: Phone, label: "Phone", value: "+91 8113003356", href: "tel:+918113003356" },
  { icon: Github, label: "GitHub", value: "Rizwana-15112004", href: "https://github.com/Rizwana-15112004" },
  { icon: ExternalLink, label: "Portfolio", value: "vercel.com/rizwanas-projects", href: "https://vercel.com/rizwanas-projects-a23354e2" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4">{"// let's build something"}</p>
          <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
            Let's <span className="text-gradient-primary italic">work</span>
            <br />
            together<span className="text-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Available immediately for full-time, contract, or freelance roles.
            Remote, hybrid, or on-site across Kerala &amp; beyond.
          </p>

          <a
            href="mailto:rizwananazninca@gmail.com?subject=Project Inquiry"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-display font-bold text-xl md:text-2xl px-8 py-5 rounded-full hover:scale-105 transition-transform glow"
          >
            Start a conversation
            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
          </a>
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
              className="group p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <c.icon className="w-5 h-5 text-primary mb-3" />
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                {c.label}
              </div>
              <div className="text-sm font-medium break-all group-hover:text-primary transition-colors">
                {c.value}
              </div>
            </a>
          ))}
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Chengara, Pattimattom, Ernakulam, Kerala
          </div>
          <div className="font-mono">
            © 2026 Rizwana Naznin C A · Built with React + Framer Motion
          </div>
        </div>
      </div>
    </section>
  );
};
