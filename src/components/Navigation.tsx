// src/components/Navigation.tsx
import { Menu, X, ChevronDown, Facebook, Instagram, Twitter, Sun, CloudRain, Zap, BarChart3, Users, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import neclLogo from "@/assets/necl-logo.png";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isDesktopExpertiseOpen, setIsDesktopExpertiseOpen] = useState(false);
  const [isDesktopSolutionsOpen, setIsDesktopSolutionsOpen] = useState(false);
  
  const expertiseRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expertiseRef.current && !expertiseRef.current.contains(event.target as Node)) {
        setIsDesktopExpertiseOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsDesktopSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const expertiseAreas = [
    { name: "Solar Power", path: "/solar-power", icon: Sun },
    { name: "Emission Reduction", path: "/emission-reduction", icon: CloudRain },
    { name: "Energy Efficiency", path: "/focus-areas", icon: Zap },
    { name: "Sustainability Consulting", path: "/focus-areas", icon: BarChart3 },
    { name: "Corporate Training", path: "/focus-areas", icon: Users },
    { name: "Green Strategy", path: "/focus-areas", icon: Target },
  ];

  const solutionItems = [
    { name: "Energy Audits", path: "/services" },
    { name: "Renewable Energy Solutions", path: "/services" },
    { name: "GHG Accounting and Carbon Credit Certification", path: "/services" },
    { name: "Training and Workshops", path: "/services" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl border-b border-border shadow-elegant"
          : "bg-background/95 backdrop-blur-xl border-b border-border/40"
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <img
              src={neclLogo}
              alt="NetZero Energy Consultant Limited"
              className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-smooth font-semibold"
              >
                {item.name}
              </Link>
            ))}

            {/* Custom Expertise Dropdown with Icons */}
            <div className="relative" ref={expertiseRef}>
              <button
                onClick={() => setIsDesktopExpertiseOpen(!isDesktopExpertiseOpen)}
                className="flex items-center text-foreground hover:text-primary transition-smooth font-semibold"
              >
                Expertise
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDesktopExpertiseOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDesktopExpertiseOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border shadow-elegant rounded-lg z-50 animate-in fade-in-0 zoom-in-95">
                  <div className="p-2">
                    {expertiseAreas.map((area) => {
                      const Icon = area.icon;
                      return (
                        <Link
                          key={area.name}
                          to={area.path}
                          onClick={() => setIsDesktopExpertiseOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-accent rounded-md transition-colors group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-foreground">{area.name}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Custom Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setIsDesktopSolutionsOpen(!isDesktopSolutionsOpen)}
                className="flex items-center text-foreground hover:text-primary transition-smooth font-semibold"
              >
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDesktopSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDesktopSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border shadow-elegant rounded-lg z-50 animate-in fade-in-0 zoom-in-95">
                  <div className="p-2">
                    {solutionItems.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setIsDesktopSolutionsOpen(false)}
                        className="block px-4 py-3 text-sm hover:bg-accent rounded-md transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/projects" className="text-foreground hover:text-primary transition-smooth font-semibold">
              Projects
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-smooth font-semibold">
              FAQ
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth font-semibold">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                  onClick={() => {
                    setIsOpen(false);
                    setIsExpertiseOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}

              {/* Expertise accordion on mobile with icons */}
              <div className="w-full">
                <button
                  onClick={() => setIsExpertiseOpen(!isExpertiseOpen)}
                  aria-expanded={isExpertiseOpen}
                  aria-controls="mobile-expertise-list"
                  className="w-full flex items-center justify-between text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-2"
                >
                  <span>Expertise</span>
                  <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${isExpertiseOpen ? "rotate-180" : "rotate-0"}`} />
                </button>

                <div
                  id="mobile-expertise-list"
                  className={`overflow-hidden transition-all duration-300 ${isExpertiseOpen ? "max-h-[1200px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <ul className="flex flex-col space-y-1 px-2">
                    {expertiseAreas.map((area) => {
                      const Icon = area.icon;
                      return (
                        <li key={area.name}>
                          <Link
                            to={area.path}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary px-3 py-2 rounded-md transition-colors group"
                            onClick={() => {
                              setIsOpen(false);
                              setIsExpertiseOpen(false);
                            }}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span>{area.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Solutions (unchanged) */}
              <Link
                to="/services"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>

              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                Projects
              </Link>

              <Link to="/faq" className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                FAQ
              </Link>

              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              <div className="pt-4 flex space-x-4 justify-center border-t border-border">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
