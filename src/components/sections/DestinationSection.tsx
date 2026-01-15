import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dubaiImage from "@/assets/dubai-parallax.jpg";

const DestinationSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <img
          src={dubaiImage}
          alt="Dubai luxury destination"
          className="img-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl"
          >
            <p className="section-subheader text-primary-foreground/60 mb-6">
              Destination Focus
            </p>
            
            <h2 className="hero-headline mb-8">
              Getting Married
              <br />
              <em className="italic">in Dubai?</em>
            </h2>

            <p className="hero-subheadline mb-12 max-w-lg">
              From the architectural marvels of the city to the serenity of the desert, 
              Dubai is the world's premier wedding destination. Our Masterclass includes 
              a dedicated module on navigating Dubai's legalities, venues, and hidden gems.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline-light"
            >
              Download the Dubai Wedding Guide
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
