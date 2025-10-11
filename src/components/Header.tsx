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
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const expertiseItems = [
    { 
      id: 1, 
      slug: "solar-power", 
      title: "Solar Power", 
      icon: Sun, 
      description: "Complete solar energy solutions for residential, commercial, and industrial applications"
    },
    { 
      id: 2, 
      slug: "emission-reduction", 
      title: "Emission Reduction", 
      icon: CloudRain, 
      description: "Strategies and technologies to reduce your carbon footprint and environmental impact"
    },
    { 
      id: 3, 
      slug: "energy-efficiency", 
      title: "Energy Efficiency", 
      icon: Zap, 
      description: "Optimize energy consumption and reduce waste through advanced efficiency measures"
    },
    { 
      id: 4, 
      slug: "sustainability-consulting", 
      title: "Sustainability Consulting", 
      icon: BarChart3, 
      description: "Strategic guidance for sustainable business practices and environmental stewardship"
    },
    { 
      id: 5, 
      slug: "corporate-training", 
      title: "Corporate Training", 
      icon: Users, 
      description: "Educational programs to build organizational capacity for sustainable practices"
    },
    { 
      id: 6, 
      slug: "green-strategy", 
      title: "Green Strategy", 
      icon: Target, 
      description: "Long-term planning for sustainable growth and environmental responsibility"
    },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsExpertiseOpen(false);
  };

  const handleServiceSelect = (item: any) => {
    navigate(`/${item.slug}`);
    closeMobileMenu();
  };

  // Mobile menu with proper accordion for Expertise
  const MobileMenuAccordion = () => (
    <div className="fixed inset-0 z-50 lg:hidden bg-background overflow-y-auto">
      <div className="min-h-full bg-background p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Navigation</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={closeMobileMenu}
            className="hover:bg-accent"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {/* Home */}
          <Link to="/" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-14 text-base font-normal">
              Home
            </Button>
          </Link>

          {/* About */}
          <Link to="/about" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-14 text-base font-normal">
              About
            </Button>
          </Link>

          {/* Expertise Accordion */}
          <div className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
              className="w-full flex items-center justify-between p-4 hover:bg-accent/50 transition-colors"
            >
              <span className="text-base font-normal">Expertise</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${
                  isExpertiseOpen ? "rotate-180" : "rotate-0"
                }`} 
              />
            </button>

            {/* Expertise Submenu */}
            <div className={`overflow-hidden transition-all duration-300 ${
              isExpertiseOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
            }`}>
              <div className="p-4 space-y-3 bg-muted/30 border-t">
                {expertiseItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleServiceSelect(item)}
                      className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-tight">
                          {item.description}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <Link to="/services" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-14 text-base font-normal">
              Services
            </Button>
          </Link>

          {/* Projects */}
          <Link to="/projects" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-14 text-base font-normal">
              Projects
            </Button>
          </Link>

          {/* Contact */}
          <Link to="/contact" onClick={closeMobileMenu} className="block">
            <Button variant="ghost" className="w-full justify-start h-14 text-base font-normal">
              Contact
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl">NetZero Energy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-foreground' : 'text-foreground/60'} hover:text-foreground transition-colors`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`${location.pathname === '/about' ? 'text-foreground' : 'text-foreground/60'} hover:text-foreground transition-colors`}
            >
              About
            </Link>

            {/* Desktop Expertise Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-foreground/60 hover:text-foreground transition-colors">
                Expertise
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-80 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {expertiseItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        to={`/${item.slug}`}
                        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors rounded-md"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground">{item.title}</div>
                          <div className="text-muted-foreground text-xs mt-1 truncate">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link 
              to="/services" 
              className={`${location.pathname === '/services' ? 'text-foreground' : 'text-foreground/60'} hover:text-foreground transition-colors`}
            >
              Services
            </Link>

            <Link 
              to="/projects" 
              className={`${location.pathname === '/projects' ? 'text-foreground' : 'text-foreground/60'} hover:text-foreground transition-colors`}
            >
              Projects
            </Link>
            
            <Link 
              to="/contact" 
              className={`${location.pathname === '/contact' ? 'text-foreground' : 'text-foreground/60'} hover:text-foreground transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(true)}
              className="hover:bg-accent"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && <MobileMenuAccordion />}
    </>
  );
};

export default Header;
