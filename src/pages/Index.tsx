import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import KnowledgeHub from "@/components/KnowledgeHub";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <KnowledgeHub />
      <Footer />
    </main>
  );
};

export default Index;