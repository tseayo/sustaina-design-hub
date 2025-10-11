// src/components/Header.tsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Sun,
  CloudRain,
  Zap,
  BarChart3,
  Users,
  Target,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const expertiseItems = [
    { id: 1, slug: "solar-power", title: "Solar Power", icon: Sun },
    { id: 2, slug: "emission-reduction", title: "Emission Reduction", icon: CloudRain },
    { id: 3, slug: "energy-efficiency", title: "Energy Efficiency", icon: Zap },
    { id: 4, slug: "sustainability-consulting", title: "Sustainability Consulting", icon: BarChart3 },
    { id: 5, slug: "corporate-training", title: "Corporate Training", icon: Users },
    { id: 6, slug: "green-strategy", title: "Green Strategy", icon: Target },
  ];

  const closeMobile = () => {
    setIsMobileOpen(false);
    setIsExpertiseOpen(false);
  };

  const goTo = (path: string) => {
    navigate(path);
    closeMobile();
  };

  // Mobile drawer (left)
  const MobileDrawer: React.FC = () => {
    return (
      // Backdrop
      <div className="fixed inset-0 z-50 lg:hidden">
        {/* semi-transparent backdrop */}
        <button
          aria-label="Close menu"
          onClick={closeMobile}
          className="absolute inset-0 bg-black/40"
        />

        {/* Drawer (left) */}
        <aside
          className="fixed left-0 top-0 bottom-0 w-[86%] max-w-xs bg-card shadow-2xl z-60 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" onClick={closeMobile} className="font-bold text-lg">
                NetZero Energy
              </Link>
              <Button variant="ghost" size="icon" onClick={closeMobile}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <nav className="space-y-1">
              <Link to="/" onClick={closeMobile} className="block">
                <Button variant="ghost" className="w-full justify-start h-12">Home</Button>
              </Link>

              <Link to="/about" onClick={closeMobile} className="block">
                <Button variant="ghost" className="w-full justify-start h-12">About</Button>
              </Link>

              {/* Expertise: accordion inline under Expertise button */}
              <div>
                <button
                  aria-expanded={isExpertiseOpen}
                  aria-controls="mobile-expertise-list"
                  onClick={() => setIsExpertiseOpen((s) => !s)}
                  className="w-full flex items-center justify-between h-12 px-2 rounded-md hover:bg-muted transition"
                >
                  <span className="text-left">Expertise</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpertiseOpen ? "rotate-180" : "rotate-0"}`} />
                </button>

                <div
                  id="mobile-expertise-list"
                  className={`mt-2 overflow-hidden transition-all ${isExpertiseOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <ul className="space-y-1 px-1">
                    {expertiseItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => goTo(`/${item.slug}`)}
                            className="flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-accent/10 transition"
                            aria-label={`Go to ${item.title}`}
                          >
                            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">{item.title}</div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <Link to="/services" onClick={closeMobile} className="block">
                <Button variant="ghost" className="w-full justify-start h-12">Services</Button>
              </Link>

              <Link to="/projects" onClick={closeMobile} className="block">
                <Button variant="ghost" className="w-full justify-start h-12">Projects</Button>
              </Link>

              <Link to="/contact" onClick={closeMobile} className="block">
                <Button variant="ghost" className="w-full justify-start h-12">Contact</Button>
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl">NetZero Energy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`${location.pathname === "/" ? "text-foreground" : "text-foreground/60"} hover:text-foreground transition-colors`}>Home</Link>
            <Link to="/about" className={`${location.pathname === "/about" ? "text-foreground" : "text-foreground/60"} hover:text-foreground transition-colors`}>About</Link>

            {/* Desktop Expertise dropdown (unchanged) */}
            <div className="relative group">
              <button className="flex items-center text-foreground/60 hover:text-foreground transition-colors">
                Expertise
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-card border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {expertiseItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.id}
                        to={`/${item.slug}`}
                        className="flex items-center px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Icon className="w-4 h-4 mr-3" />
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link to="/services" className={`${location.pathname === "/services" ? "text-foreground" : "text-foreground/60"} hover:text-foreground transition-colors`}>Services</Link>
            <Link to="/projects" className={`${location.pathname === "/projects" ? "text-foreground" : "text-foreground/60"} hover:text-foreground transition-colors`}>Projects</Link>
            <Link to="/contact" className={`${location.pathname === "/contact" ? "text-foreground" : "text-foreground/60"} hover:text-foreground transition-colors`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && <MobileDrawer />}
    </>
  );
};

export default Header;
