import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Masterclass", href: "/masterclass" },
    { label: "For Brides", href: "/brides" },
    { label: "For Brands", href: "/partnership" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show nav
      setIsVisible(true);

      setLastScrollY(currentScrollY);
    };

    // Run immediately to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="mx-4 mt-4">
            <nav className="container-luxury flex items-center justify-between py-4 px-8 rounded-sm bg-background/80 backdrop-blur-md border border-border/50 shadow-soft">
              {/* Logo */}
              <Link
                to="/"
                className="font-display text-xl text-foreground tracking-tight hover:text-primary transition-colors duration-300"
              >
                The Wedding Circle
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`font-body text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  )
                )}
              </div>

              {/* CTA Button */}
              <Link
                to="/masterclass#waitlist"
                onClick={(e) => {
                  // If we are already on the masterclass page, scroll to waitlist
                  if (location.pathname === '/masterclass') {
                    e.preventDefault();
                    const element = document.getElementById('waitlist');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="btn-gold text-xs py-3 px-6"
              >
                Join Now
              </Link>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;