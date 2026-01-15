import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  weddingType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The Masterclass gave me access to vendors I never knew existed. My Dubai wedding looked like it was straight out of a magazine.",
    name: "Alexandra M.",
    location: "London → Dubai",
    weddingType: "Beachfront Ceremony",
  },
  {
    id: 2,
    quote: "I saved over $40,000 by knowing exactly who to call and what to ask for. The industry secrets alone were worth the investment.",
    name: "Catherine L.",
    location: "New York → Amalfi Coast",
    weddingType: "Cliffside Villa Wedding",
  },
  {
    id: 3,
    quote: "As a bride with a clear vision, I needed the tools to execute it myself. This course gave me the confidence to design my own luxury wedding.",
    name: "Priya S.",
    location: "Mumbai → Santorini",
    weddingType: "Sunset Terrace Celebration",
  },
  {
    id: 4,
    quote: "The network access is unparalleled. I connected directly with photographers who usually have 2-year waitlists.",
    name: "Emma R.",
    location: "Paris → Maldives",
    weddingType: "Overwater Pavilion",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-subheader block mb-4">Testimonials</span>
          <h2 className="section-header">What Our Brides Say</h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="text-center"
              >
                {/* Quote Mark */}
                <div className="mb-8">
                  <span className="font-display text-6xl text-champagne opacity-30">"</span>
                </div>

                {/* Quote */}
                <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-10 italic">
                  {testimonials[currentIndex].quote}
                </blockquote>

                {/* Attribution */}
                <div className="space-y-2">
                  <p className="font-body text-sm tracking-[0.2em] uppercase text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="font-body text-xs tracking-[0.15em] text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="font-body text-xs tracking-[0.1em] text-champagne">
                    {testimonials[currentIndex].weddingType}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-champagne w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;