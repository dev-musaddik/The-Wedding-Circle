import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/sections/HeroSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DestinationSection from "@/components/sections/DestinationSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import MasterclassSection from "@/components/sections/MasterclassSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <FloatingNav />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AuthoritySection />
        <ProblemSolutionSection />
        <PortfolioSection />
        <TestimonialsSection />
        <DestinationSection />
        <CurriculumSection />
        <MasterclassSection />
        <WaitlistSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
