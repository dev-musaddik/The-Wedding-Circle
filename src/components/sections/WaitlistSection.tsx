import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - In production, this would connect to Lovable Cloud
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Welcome to the Circle",
      description: "You're on the waitlist! Check your inbox for exclusive updates.",
    });
  };

  return (
    <section id="waitlist" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-champagne blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-rose-gold blur-3xl" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.25em] uppercase text-champagne block mb-4">
              Limited Enrollment
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
              Join the Waitlist
            </h2>
            <p className="font-body text-sm text-ivory/60 leading-relaxed mb-12">
              Be the first to know when enrollment opens. Waitlist members receive
              exclusive early access pricing and bonus materials.
            </p>
          </motion.div>

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 bg-charcoal-light/50 border border-ivory/10 rounded-sm font-body text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-champagne/50 transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-charcoal-light/50 border border-ivory/10 rounded-sm font-body text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-champagne/50 transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto btn-gold px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="inline-block w-4 h-4 border-2 border-ivory/30 border-t-ivory rounded-full"
                    />
                    Joining...
                  </span>
                ) : (
                  "Join the Waitlist"
                )}
              </button>

              <p className="font-body text-xs text-ivory/40 mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-12"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-champagne/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-champagne"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-ivory mb-3">
                You're on the List
              </h3>
              <p className="font-body text-sm text-ivory/60">
                Welcome to The Wedding Circle. Check your inbox for your exclusive welcome guide.
              </p>
            </motion.div>
          )}

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-ivory/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <span className="font-display text-3xl text-champagne">2,400+</span>
                <p className="font-body text-xs text-ivory/50 mt-1 tracking-wider uppercase">
                  On Waitlist
                </p>
              </div>
              <div className="hidden md:block w-px h-12 bg-ivory/10" />
              <div className="text-center">
                <span className="font-display text-3xl text-champagne">48hrs</span>
                <p className="font-body text-xs text-ivory/50 mt-1 tracking-wider uppercase">
                  Early Access
                </p>
              </div>
              <div className="hidden md:block w-px h-12 bg-ivory/10" />
              <div className="text-center">
                <span className="font-display text-3xl text-champagne">$500</span>
                <p className="font-body text-xs text-ivory/50 mt-1 tracking-wider uppercase">
                  Waitlist Discount
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;