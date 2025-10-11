// src/components/Header.tsx
import { useState } from "react";
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
  ArrowLeft
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState('main'); // 'main' | 'expertise'
  const location = useLocation();

  const expertiseItems = [
    {
      id: 1,
      title: "Solar Power",
      icon: Sun,
      description: "Complete solar energy solutions",
      path: "/solar-power"
    },
    {
      id: 2,
      title: "Emission Reduction", 
      icon: CloudRain,
      description: "Reduce carbon footprint and environmental impact",
      path: "/emission-reduction"
    },
    {
      id: 3,
      title: "Energy Efficiency",
      icon: Zap,
      description: "Optimize energy consumption and reduce waste",
      path: "/focus-areas"
    },
    {
      id: 4,
      title: "Sustainability Consulting",
      icon: BarChart3,
      description: "Strategic guidance for sustainable practices",
      path: "/services"
    },
    {
      id: 5,
      title: "Corporate Training", 
      icon: Users,
      description: "Educational programs for sustainable practices",
      path: "/services"
    },
    {
      id: 6,
      title: "Green Strategy",
      icon: Target,
      description: "Long-term planning for sustainable growth",
      path: "/services"
    }
  ];

  const handleExpertiseClick = () => {
    setMobileView('expertise');
  };

  const handleBackToMain = () => {
    setMobileView('main');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileView('main');
  };

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    setMobileView('main');
  };

  // Mobile Navigation - Main Menu
  const MobileMainMenu = () => (
    <div className="space-y-2">
      <Link to="/" onClick={closeMobileMenu}>
        <Button variant="ghost" className="w-full justify-start h-14 text-base">
          Home
        </Button>
      </Link>
      
      <Link to="/about" onClick={closeMobileMenu}>
        <Button variant="ghost" className="w-full justify-start h-14 text-base">
          About
        </Button>
      </Link>

      {/* Expertise Dropdown Trigger */}
      <Button 
        variant="ghost" 
        className="w-full justify-between h-14 text-base"
        onClick={handleExpertiseClick}
      >
        <span>Expertise</span>
        <ChevronRight className="w-4 h-4" />
      </Button>

      <Link to="/services" onClick={closeMobileMenu}>
        <Button variant="ghost" className="w-full justify-start h-14 text-base">
          Services
        </Button>
      </Link>

      <Link to="/projects" onClick={closeMobileMenu}>
        <Button variant="ghost" className="w-full justify-start h-14 text-base">
          Projects
        </Button>
      </Link>
      
      <Link to="/contact" onClick={closeMobileMenu}>
        <Button variant="ghost" className="w-full justify-start h-14 text-base">
          Contact
        </Button>
      </Link>
    </div>
  );

  // Mobile Navigation - Expertise Submenu
  const MobileExpertiseMenu = () => (
    <div className="space-y-2">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        className="w-full justify-start h-14 text-base mb-4"
        onClick={handleBackToMain}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Menu
      </Button>

      <h3 className="font-heading text-lg font-bold text-foreground mb-4 px-4">
        Our Expertise Areas
      </h3>

      {/* Expertise Items */}
      <div className="space-y-2">
        {expertiseItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={closeMobileMenu}
            >
              <Button
                variant="ghost"
                className="w-full justify-start h-16 text-left px-4"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground text-sm">{item.title}</div>
                    <div className="text-muted-foreground text-xs truncate">{item.description}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </div>
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );

  // Main Mobile Navigation Component
  const MobileNavigation = () => (
    <div className="fixed inset-0 bg-background z-50 lg:hidden overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-foreground">
            {mobileView === 'main' ? 'Navigation' : 'Our Expertise'}
          </h2>
          <Button 
            variant="ghost" 
            onClick={closeMobileMenu} 
            size="icon"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Dynamic Content Based on View */}
        {mobileView === 'main' && <MobileMainMenu />}
        {mobileView === 'expertise' && <MobileExpertiseMenu />}
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
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {expertiseItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        className="flex items-center px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <IconComponent className="w-4 h-4 mr-3" />
                        {item.title}
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

          {/* Mobile Menu Button - This is ONLY for navigation */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={openMobileMenu}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && <MobileNavigation />}
    </>
  );
};

export default Header;
🔧 Important: Restore Your Original Services Component
Make sure your Services.tsx component is back to its original state without any mobile navigation code. It should only contain the "Solutions" content without any hamburger menus or dropdowns.

Your original Services component should look like this (without any mobile navigation):

jsx
// pages/Services.tsx - Keep this as your original Solutions content
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Zap, 
  Target, 
  BarChart3, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    // Your original services array
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Your original Solutions content */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-8">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium animate-fade-in">
            <Search className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Comprehensive Energy Solutions
          </h2>
          {/* ... rest of your original Solutions content */}
        </div>
        {/* ... your services grid */}
      </div>
    </section>
  );
};

export default Services;
