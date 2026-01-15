import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    id: 1,
    title: "The Design",
    description: "Learn to create mood boards and style venues like an interior designer.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="4" y="4" width="24" height="24" rx="2" />
        <line x1="4" y1="12" x2="28" y2="12" />
        <line x1="12" y1="12" x2="12" y2="28" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "The Network",
    description: "Unlock our \"Black Book\" of contacts—Photographers, Venues, and Caterers who usually don't accept cold calls.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="16" cy="10" r="5" />
        <circle cx="8" cy="22" r="4" />
        <circle cx="24" cy="22" r="4" />
        <line x1="12" y1="14" x2="9" y2="18" />
        <line x1="20" y1="14" x2="23" y2="18" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "The Execution",
    description: "Timelines, budgets, and logistics for international travel.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
        <polyline points="4,24 12,16 18,20 28,8" />
        <polyline points="22,8 28,8 28,14" />
      </svg>
    ),
  },
];

const MasterclassSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-24"
        >
          <p className="section-subheader mb-4">The Program</p>
          <h2 className="section-header">The Masterclass.</h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.15,
                ease: [0.23, 1, 0.32, 1] 
              }}
              className="text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="text-charcoal-light">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl mb-4 text-foreground">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="body-elegant text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <button className="btn-gold">
            Enroll in Masterclass
          </button>
          <p className="mt-4 text-xs tracking-wider text-muted-foreground">
            Limited enrollment · Next cohort starts February 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MasterclassSection;
