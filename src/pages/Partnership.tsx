import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PartnershipTier {
  name: string;
  tagline: string;
  benefits: string[];
  featured?: boolean;
}

const tiers: PartnershipTier[] = [
  {
    name: "Preferred Vendor",
    tagline: "Foundation Partnership",
    benefits: [
      "Listing in our Black Book directory",
      "Access to bride inquiries in your category",
      "Quarterly networking events",
      "Partnership badge for your website",
    ],
  },
  {
    name: "Elite Partner",
    tagline: "Premium Visibility",
    benefits: [
      "Everything in Preferred Vendor",
      "Featured spotlight in course modules",
      "Priority referral system",
      "Co-branded content opportunities",
      "Direct introduction to enrolled brides",
      "Annual luxury wedding showcase participation",
    ],
    featured: true,
  },
  {
    name: "Brand Ambassador",
    tagline: "Strategic Alliance",
    benefits: [
      "Everything in Elite Partner",
      "Exclusive category ownership",
      "Joint marketing campaigns",
      "Featured case study production",
      "Speaking opportunities at our events",
      "VIP access to all Wedding Circle events",
      "Dedicated account manager",
    ],
  },
];

const partnerBenefits = [
  {
    title: "Access to High-Intent Brides",
    description:
      "Connect with brides who are educated, have substantial budgets, and are actively planning luxury weddings.",
  },
  {
    title: "Curated Network",
    description:
      "Join an exclusive community of vetted, premium vendors. Quality over quantity.",
  },
  {
    title: "Brand Elevation",
    description:
      "Association with The Wedding Circle positions your brand at the pinnacle of luxury weddings.",
  },
  {
    title: "Direct Introductions",
    description:
      "No cold outreach. Brides come to you pre-qualified and ready to book.",
  },
];

const Partnership = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    website: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const categories = [
    "Photography",
    "Videography",
    "Floral Design",
    "Venue",
    "Catering",
    "Wedding Planning",
    "Bridal Fashion",
    "Jewelry",
    "Stationery",
    "Entertainment",
    "Other",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.businessName || !formData.email || !formData.category) {
      toast({
        title: "Please fill in required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Application Received",
      description: "Our partnerships team will review your application within 48 hours.",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subheader block mb-4">For Vendors & Brands</span>
            <h1 className="section-header mb-6">Partner With Us</h1>
            <p className="body-elegant max-w-2xl mx-auto">
              Join The Wedding Circle's exclusive network of luxury wedding vendors.
              Connect with discerning brides who value quality, artistry, and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-subheader block mb-4">Why Partner</span>
            <h2 className="section-header">The Circle Advantage</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-champagne/10 flex items-center justify-center">
                  <span className="font-display text-lg text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-subheader block mb-4">Partnership Levels</span>
            <h2 className="section-header">Choose Your Tier</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative p-8 rounded-sm ${
                  tier.featured
                    ? "bg-charcoal text-ivory border-2 border-champagne"
                    : "bg-card border border-border"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-champagne text-charcoal font-body text-xs tracking-[0.15em] uppercase rounded-sm">
                    Most Popular
                  </span>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`font-display text-xl mb-2 ${
                      tier.featured ? "text-ivory" : "text-foreground"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`font-body text-xs tracking-[0.15em] uppercase ${
                      tier.featured ? "text-champagne" : "text-muted-foreground"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          tier.featured ? "bg-champagne" : "bg-champagne"
                        }`}
                      />
                      <span
                        className={`font-body text-sm ${
                          tier.featured ? "text-ivory/80" : "text-muted-foreground"
                        }`}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-background" id="apply">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="section-subheader block mb-4">Application</span>
              <h2 className="section-header mb-4">Apply to Partner</h2>
              <p className="body-elegant">
                Submit your application below. Our partnerships team reviews all applications
                within 48 business hours.
              </p>
            </motion.div>

            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-champagne/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-champagne/50 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-champagne/50 transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://"
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-champagne/50 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground focus:outline-none focus:border-champagne/50 transition-colors duration-300"
                  >
                    <option value="">Select your category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-champagne/50 transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
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
                <h3 className="font-display text-2xl text-foreground mb-3">
                  Application Received
                </h3>
                <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
                  Thank you for your interest in partnering with The Wedding Circle.
                  Our team will review your application and contact you within 48 hours.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary border-t border-border">
        <div className="container-luxury text-center">
          <Link
            to="/"
            className="font-display text-xl text-foreground hover:text-primary transition-colors duration-300"
          >
            The Wedding Circle
          </Link>
          <p className="font-body text-xs text-muted-foreground mt-4">
            © 2026 The Wedding Circle. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Partnership;