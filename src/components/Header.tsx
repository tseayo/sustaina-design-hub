// src/components/Header.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  X,
  Menu,
  Sun,
  CloudRain,
  Zap,
  BarChart3,
  Users,
  Target,
  ArrowLeft,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const expertiseItems = [
    { id: 1, slug: "solar-power", title: "Solar Power", icon: Sun, description: "Complete solar energy solutions..." },
    { id: 2, slug: "emission-reduction", title: "Emission Reduction", icon: CloudRain, description: "Strategies to reduce carbon footprint..." },
    { id: 3, slug: "energy-efficiency", title: "Energy Efficiency", icon: Zap, description: "Optimize energy consumption..." },
    { id: 4, slug: "sustainability-consulting", title: "Sustainability Consulting", icon: BarChart3, description: "Strategic guidance..." },
    { id: 5, slug: "corporate-training", title: "Corporate Training", icon: Users, description: "Educational programs..." },
    { id: 6, slug: "green-strategy", title: "Green Strategy", icon: Target, description: "Long-term planning..." },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsExpertiseOpen(false);
    setSelectedService(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    closeMobileMenu();
  };

  const handleServiceSelect = (item: any) => {
    // if you want to open a detail panel in the menu, handle here
    // or navigate directly to route for that service:
    navigate(`/${item.slug}`);
    closeMobileMenu();
  };

  // Mobile menu with inline accordion for Expertise
  const MobileMenuAccordion = () => (
    <div className="fixed inset-0 z-50 lg:hidden bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-md w-full h-full bg-card shadow-xl p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-semibold">Menu</div>
          <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="space-y-1">
          <Link to="/" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-12">Home</Button>
          </Link>

          <Link to="/about" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-12">About</Button>
          </Link>

          {/* Expertise accordion trigger */}
          <div>
            <button
              aria-expanded={isExpertiseOpen}
              aria-controls="mobile-expertise-list"
              onClick={() => setIsExpertiseOpen((s) => !s)}
              className="w-full flex items-center justify-between h-12 px-2 rounded-md hover:bg-muted transition"
            >
              <span className="text-left">Expertise</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${isExpertiseOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            {/* Inline submenu */}
            <div
              id="mobile-expertise-list"
              className={`mt-2 overflow-hidden transition-all ${isExpertiseOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <ul className="space-y-1 px-2">
                {expertiseItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleServiceSelect(item)}
                        className="flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-accent/10 transition"
                      >
                        <div className="w-8 h-8 rounded-md bg-primary/90 flex items-center justify-center text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <Link to="/services" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-12">Services</Button>
          </Link>

          <Link to="/projects" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-12">Projects</Button>
          </Link>

          <Link to="/contact" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-12">Contact</Button>
          </Link>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl">NetZero Energy</span>
          </Link>

          {/* Desktop nav (unchanged) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* ... desktop links here ... */}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && <MobileMenuAccordion />}
    </>
  );
};

export default Header;
