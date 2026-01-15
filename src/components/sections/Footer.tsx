import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { label: "Home", href: "#" },
    { label: "Masterclass", href: "#masterclass" },
    { label: "Student Login", href: "#" },
    { label: "Partner with Us", href: "#vendors" },
    { label: "Contact", href: "#" },
  ];

  const socials = [
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
  ];

  return (
    <footer className="py-16 bg-secondary border-t border-border">
      <div className="container-luxury">
        <div className="flex flex-col items-center">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="font-display text-2xl text-foreground tracking-tight">
              The Wedding Circle
            </span>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8 mb-12"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-body text-xs tracking-[0.1em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-px bg-border mb-8" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-xs tracking-wider text-muted-foreground"
          >
            © 2026 The Wedding Circle. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
