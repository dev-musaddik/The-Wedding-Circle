import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolioFloral from "@/assets/portfolio-floral.jpg";
import portfolioTable from "@/assets/portfolio-table.jpg";
import portfolioBeach from "@/assets/portfolio-beach.jpg";

const portfolioItems = [
  {
    id: 1,
    image: portfolioFloral,
    title: "Floral Ceiling Installation",
    description: "Paris, France",
    size: "large",
  },
  {
    id: 2,
    image: portfolioTable,
    title: "Tablescape Design",
    description: "Dubai, UAE",
    size: "medium",
  },
  {
    id: 3,
    image: portfolioBeach,
    title: "Beach Ceremony",
    description: "Maldives",
    size: "wide",
  },
];

const PortfolioItem = ({ 
  item, 
  index 
}: { 
  item: typeof portfolioItems[0]; 
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const gridClasses = {
    large: "col-span-12 md:col-span-7 row-span-2 h-[70vh]",
    medium: "col-span-12 md:col-span-5 h-[35vh]",
    wide: "col-span-12 md:col-span-5 h-[35vh]",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1] 
      }}
      className={`relative overflow-hidden cursor-pointer ${gridClasses[item.size as keyof typeof gridClasses]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="img-cover"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      />
      
      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-charcoal/60 flex items-center justify-center"
      >
        <div className="text-center">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/80 mb-2">
            View Analysis
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-8 h-px bg-champagne mx-auto"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="section-subheader mb-4">Portfolio</p>
          <h2 className="section-header">
            Real Weddings, Real Masterpieces.
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
