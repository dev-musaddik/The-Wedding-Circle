import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  "Visit Dubai",
  "Ritz-Carlton",
  "Four Seasons",
  "Elie Saab",
];

const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="section-subheader">
            Connecting Brides with the World's Most Exclusive Brands
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="logo-strip"
        >
          {logos.map((logo, index) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="logo-item"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
