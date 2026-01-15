import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/sections/Footer";
import AuthoritySection from "@/components/sections/AuthoritySection";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <FloatingNav />
            <main>
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=2043&auto=format&fit=crop')] bg-cover bg-center" />

                    <div className="relative z-20 container mx-auto px-4 text-center text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif mb-6"
                        >
                            About Us
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl max-w-2xl mx-auto font-light"
                        >
                            Crafting legacy through design and experience.
                        </motion.p>
                    </div>
                </section>

                <AuthoritySection />

                <section className="py-24 px-4 bg-secondary/5">
                    <div className="container mx-auto max-w-4xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-serif mb-6">Our Philosophy</h2>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    We believe that a wedding is more than just an event; it is a piece of living art.
                                    Our approach combines architectural precision with organic beauty, creating environments that feel both curated and effortless.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Every detail is meticulously planned to evoke emotion and create lasting memories for you and your guests.
                                </p>
                            </div>
                            <div className="relative h-[400px] rounded-lg overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
                                    alt="Wedding detail"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
