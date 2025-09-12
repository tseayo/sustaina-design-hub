import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import KnowledgeHub from "@/components/KnowledgeHub";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <KnowledgeHub />
      <CaseStudies />
      <FAQ />
    </main>
  );
};

export default Index;