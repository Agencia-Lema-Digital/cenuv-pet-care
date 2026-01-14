import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import HeroSection from "@/components/sections/HeroSection";
import SymptomsSection from "@/components/sections/SymptomsSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import TrustSection from "@/components/sections/TrustSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ObjectionsSection from "@/components/sections/ObjectionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <SymptomsSection />
        <AuthoritySection />
        <TrustSection />
        <ProcessSection />
        <ObjectionsSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
