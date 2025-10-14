import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import KnowledgeHub from "@/components/KnowledgeHub";
// Footer removed — Layout already renders the footer

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <KnowledgeHub />
      {/* Footer is provided by the Layout component — do not render here */}
    </main>
  );
};

export default Index;
