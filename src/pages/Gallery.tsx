import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/sections/Footer";
import PortfolioSection from "@/components/sections/PortfolioSection";
import { motion } from "framer-motion";
import GalleryHero from "@/assets/gallery_hero.png";

const Gallery = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <FloatingNav />
            <main>
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    {/* Use a different image for gallery hero */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${GalleryHero})` }} />

                    <div className="relative z-20 container mx-auto px-4 text-center text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif mb-4"
                        >
                            Our Portfolio
                        </motion.h1>
                        <p className="text-xl text-white/80 font-light">A curation of our finest moments.</p>
                    </div>
                </section>

                <div className="py-12">
                    <PortfolioSection />
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default Gallery;
