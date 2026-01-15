import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/sections/Footer";
import CurriculumSection from "@/components/sections/CurriculumSection";
import MasterclassSection from "@/components/sections/MasterclassSection";
import MasterclassFormSection from "@/components/sections/MasterclassFormSection";
import { motion } from "framer-motion";

const Masterclass = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <FloatingNav />
            <main>
                {/* Hero Section for Masterclass */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    {/* Placeholder for a specific masterclass image/video */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

                    <div className="relative z-20 container mx-auto px-4 text-center text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif mb-6"
                        >
                            The Masterclass
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl max-w-2xl mx-auto font-light"
                        >
                            Elevate your craft and design celebrity-tier weddings.
                        </motion.p>
                    </div>
                </section>

                <MasterclassSection />
                <CurriculumSection />
                <MasterclassFormSection />
            </main>
            <Footer />
        </div>
    );
};

export default Masterclass;
