// src/components/Header.tsx
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, X, Menu, Sun, CloudRain, Zap, BarChart3, Users, Target } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/necl-logo.png";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isDesktopExpertiseOpen, setIsDesktopExpertiseOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const expertiseRef = useRef<HTMLDivElement>(null);

  const expertiseItems = [
    { id: 1, slug: "solar-power", title: "Solar Power", icon: Sun },
    { id: 2, slug: "emission-reduction", title: "Emission Reduction", icon: CloudRain },
    { id: 3, slug: "energy-efficiency", title: "Energy Efficiency", icon: Zap },
    { id: 4, slug: "sustainability-consulting", title: "Sustainability Consulting", icon: BarChart3 },
    { id: 5, slug: "corporate-training", title: "Corporate Training", icon: Users },
    { id: 6, slug: "green-strategy", title: "Green Strategy", icon: Target },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expertiseRef.current && !expertiseRef.current.contains(event.target as Node)) {
        setIsDesktopExpertiseOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsExpertiseOpen(false);
  };

  const handleServiceSelect = (item: any) => {
    navigate(`/${item.slug}`);
    closeMobileMenu();
    setIsDesktopExpertiseOpen(false);
  };

  const toggleDesktopExpertise = () => {
    setIsDesktopExpertiseOpen(!isDesktopExpertiseOpen);
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
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isExpertiseOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
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
        <div className="container mx-auto px-4 h-16 flex items-center">
          {/* Logo with imported image */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="NetZero Energy Experts" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation - Aligned to right with black and green styling */}
          <nav className="hidden lg:flex items-center space-x-1 ml-auto">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md transition-colors font-medium ${
                location.pathname === '/' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-900 text-white hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-md transition-colors font-medium ${
                location.pathname === '/about' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-900 text-white hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              About
            </Link>

            {/* Enhanced Desktop Expertise Dropdown with black and green styling */}
            <div className="relative" ref={expertiseRef}>
              <button 
                onClick={toggleDesktopExpertise}
                className={`flex items-center px-4 py-2 rounded-md transition-colors font-medium ${
                  isDesktopExpertiseOpen || location.pathname.includes('/expertise') || expertiseItems.some(item => location.pathname.includes(item.slug))
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-gray-900 text-white hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Expertise
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isDesktopExpertiseOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDesktopExpertiseOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50 animate-in fade-in-0 zoom-in-95">
                  <div className="p-2">
                    {expertiseItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.id}
                          to={`/${item.slug}`}
                          onClick={() => setIsDesktopExpertiseOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-primary hover:text-primary-foreground transition-colors rounded-md group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold">{item.title}</div>
                            <div className="text-gray-300 text-xs mt-1 truncate group-hover:text-primary-foreground">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/services" 
              className={`px-4 py-2 rounded-md transition-colors font-medium ${
                location.pathname === '/services' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-900 text-white hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              Services
            </Link>
            
            <Link 
              to="/projects" 
              className={`px-4 py-2 rounded-md transition-colors font-medium ${
                location.pathname === '/projects' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-900 text-white hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              Projects
            </Link>
            
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-md transition-colors font-medium ${
                location.pathname === '/contact' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-900 text-white hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden ml-auto">
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
