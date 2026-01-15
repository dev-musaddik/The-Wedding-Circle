import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/sections/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BridesHero from "@/assets/brides_hero.png";

const Brides = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <FloatingNav />
            <main>
                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BridesHero})` }} />

                    <div className="relative z-20 container mx-auto px-4 text-center text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-serif mb-6"
                        >
                            For Brides
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl max-w-2xl mx-auto font-light italic"
                        >
                            Curating your dream wedding with timeless elegance.
                        </motion.p>
                    </div>
                </section>

                {/* Introduction / Services */}
                <section className="py-24 px-4 bg-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-primary">Your Vision, Our Expertise</h2>
                        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                            We specialize in creating bespoke wedding experiences that reflect your unique love story.
                            From intimate gatherings to grand celebrations, our team ensures every detail is perfect.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 bg-secondary/10 rounded-lg">
                                <h3 className="text-xl font-serif mb-4">Full Planning</h3>
                                <p className="text-muted-foreground">Comprehensive guidance from start to finish, ensuring a stress-free journey.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-lg">
                                <h3 className="text-xl font-serif mb-4">Design & Styling</h3>
                                <p className="text-muted-foreground">Curating the visual identity of your wedding with bespoke decor and florals.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-lg">
                                <h3 className="text-xl font-serif mb-4">Destination Weddings</h3>
                                <p className="text-muted-foreground">Expert logistics and planning for weddings anywhere in the world.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <TestimonialsSection />

                {/* CTA */}
                <section className="py-24 bg-secondary/5 text-center">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to start planning?</h2>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors">
                            Inquire Now <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Brides;
