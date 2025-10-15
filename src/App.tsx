// src/App.tsx - CORRECTED VERSION
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
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

/* --- CARBON CALCULATOR IMPORT --- */
import CarbonCalculatorPage from "./pages/CarbonCalculator";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Layout wraps only the main content */}
          <Layout>
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
              <Route path="/carbon-calculator" element={<CarbonCalculatorPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>

          {/* Chatbot and BackToTop outside Layout but inside BrowserRouter */}
          <Chatbot />
          <BackToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
