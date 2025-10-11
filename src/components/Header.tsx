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
  Target
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const expertiseItems = [
    {
      id: 1,
      slug: "solar-power",
      title: "Solar Power",
      icon: Sun,
      path: "/solar-power"
    },
    {
      id: 2,
      slug: "emission-reduction", 
      title: "Emission Reduction",
      icon: CloudRain,
      path: "/emission-reduction"
    },
    {
      id: 3,
      slug: "energy-efficiency",
      title: "Energy Efficiency",
      icon: Zap,
      path: "/focus-areas" // or create specific page
    },
    {
      id: 4,
      slug: "sustainability-consulting",
      title: "Sustainability Consulting",
      icon: BarChart3,
      path: "/services" // or create specific page
    },
    {
      id: 5,
      slug: "corporate-training",
      title: "Corporate Training", 
      icon: Users,
      path: "/services" // or create specific page
    },
    {
      id: 6,
      slug: "green-strategy",
      title: "Green Strategy",
      icon: Target,
      path: "/services" // or create specific page
    }
  ];

  const handleExpertiseClick = () => {
    setActiveDropdown(activeDropdown === 'expertise' ? null : 'expertise');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Mobile Navigation Component
  const MobileNavigation = () => (
    <div className="fixed inset-0 bg-background z-50 lg:hidden overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-foreground">Navigation</h2>
          <Button variant="ghost" onClick={closeMobileMenu} size="icon">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2">
          <Link to="/" onClick={closeMobileMenu}>
            <Button variant="ghost" className="w-full justify-start h-14">
              Home
            </Button>
          </Link>
          
          <Link to="/about" onClick={closeMobileMenu}>
            <Button variant="ghost" className="w-full justify-start h-14">
              About
            </Button>
          </Link>

          {/* Expertise Dropdown */}
          <div className="border rounded-lg">
            <Button 
              variant="ghost" 
              className="w-full justify-between h-14"
              onClick={handleExpertiseClick}
            >
              <span>Expertise</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${
                activeDropdown === 'expertise' ? 'rotate-180' : ''
              }`} />
            </Button>

            {/* Expertise Submenu */}
            {activeDropdown === 'expertise' && (
              <div className="border-t px-4 py-2 space-y-1">
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
                        className="w-full justify-start h-12 text-sm"
                      >
                        <IconComponent className="w-4 h-4 mr-3" />
                        {item.title}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link to="/services" onClick={closeMobileMenu}>
            <Button variant="ghost" className="w-full justify-start h-14">
              Services
            </Button>
          </Link>

          <Link to="/projects" onClick={closeMobileMenu}>
            <Button variant="ghost" className="w-full justify-start h-14">
              Projects
            </Button>
          </Link>
          
          <Link to="/contact" onClick={closeMobileMenu}>
            <Button variant="ghost" className="w-full justify-start h-14">
              Contact
            </Button>
          </Link>
        </div>
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

            {/* Expertise Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-foreground/60 hover:text-foreground transition-colors">
                Expertise
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {/* Desktop Dropdown Menu */}
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(true)}
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
