import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import KnowledgeHub from "@/components/KnowledgeHub";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <KnowledgeHub />
      <CaseStudies />
      <FAQ />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;