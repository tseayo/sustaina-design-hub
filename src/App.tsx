// Updated src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // ← Add this import
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import FAQPage from "./pages/FAQPage";
import FocusAreas from "./pages/FocusAreas";
import EmissionReduction from "./pages/EmissionReduction";
import SolarPower from "./pages/SolarPower";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";
import BackToTop from "./components/BackToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout> {/* ← Wrap everything with Layout */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/focus-areas" element={<FocusAreas />} />
            <Route path="/emission-reduction" element={<EmissionReduction />} />
            <Route path="/solar-power" element={<SolarPower />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout> {/* ← Close Layout wrapper */}
        <Chatbot />
        <BackToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
