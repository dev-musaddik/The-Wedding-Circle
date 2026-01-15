import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import plannerImage from "@/assets/planner-editorial.jpg";

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-background">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="flex items-center section-padding order-2 lg:order-1">
          <div className="container-luxury max-w-xl lg:ml-auto lg:mr-0 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <h2 className="section-header mb-10">
                Planning a Destination Wedding Shouldn't Be a Gamble.
              </h2>

              {/* The Agitation */}
              <div className="mb-10">
                <p className="body-elegant">
                  You have the vision and the budget, but the luxury wedding industry 
                  is built on secrets. Without the right network, you risk compromised 
                  designs and inflated prices. Access to the elite vendors is usually 
                  by invitation only.
                </p>
              </div>

              {/* The Solution */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-8 border-t border-border"
              >
                <p className="section-subheader mb-4">The Solution</p>
                <p className="body-elegant">
                  We don't just plan weddings; we hand you the keys to the industry. 
                  The Wedding Circle Masterclass teaches you how to organize, style, 
                  and execute a high-end wedding in Dubai and beyond—exactly like a 
                  professional.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="relative min-h-[60vh] lg:min-h-screen order-1 lg:order-2"
        >
          <img
            src={plannerImage}
            alt="Wedding planner reviewing designs"
            className="img-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
