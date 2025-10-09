import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import neclLogo from "@/assets/necl-logo.png";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
  ];

  const expertiseAreas = [
    { name: "Solar Power", path: "/solar-power" },
    { name: "Emission Reduction", path: "/emission-reduction" },
    { name: "Hydrogen", path: "/focus-areas" },
    { name: "E-mobility Charging", path: "/focus-areas" },
    { name: "Hydropower", path: "/focus-areas" },
    { name: "Bioenergy", path: "/focus-areas" }
  ];

  const solutionItems = [
    "Energy Audits",
    "Renewable Energy Solutions",
    "GHG Accounting and Carbon Credit Certification",
    "Training and Workshops"
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-elegant" 
        : "bg-background/80 backdrop-blur-md border-b border-transparent"
    } ${className}`}>
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
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Expertise Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-smooth font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Expertise
                <ChevronDown className="ml-1 w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-elegant">
                {expertiseAreas.map((area) => (
                  <DropdownMenuItem key={area.name} asChild>
                    <Link to={area.path} className="w-full cursor-pointer">
                      {area.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-smooth font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Solutions
                <ChevronDown className="ml-1 w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-elegant">
                {solutionItems.map((service) => (
                  <DropdownMenuItem key={service} asChild>
                    <a href="#services" className="w-full cursor-pointer">
                      {service}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="/#projects"
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Projects
            </a>
            <a
              href="/#faq"
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              FAQ
            </a>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Slide from Left */}
        <div
          className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-background/98 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <img 
                  src={neclLogo} 
                  alt="NetZero Energy" 
                  className="h-10 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto py-6 px-6">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium px-4 py-3 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Expertise with Expandable Sub-items */}
                <details className="group">
                  <summary className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium px-4 py-3 rounded-lg cursor-pointer list-none flex items-center justify-between">
                    <span>Expertise</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                    {expertiseAreas.map((area) => (
                      <Link
                        key={area.name}
                        to={area.path}
                        className="block text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-2 px-3 rounded-lg text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </details>
                
                {/* Solutions with Expandable Sub-items */}
                <details className="group">
                  <summary className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium px-4 py-3 rounded-lg cursor-pointer list-none flex items-center justify-between">
                    <span>Solutions</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2 ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                    {solutionItems.map((solution) => (
                      <a
                        key={solution}
                        href="#services"
                        className="block text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-2 px-3 rounded-lg text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {solution}
                      </a>
                    ))}
                  </div>
                </details>
                
                <a
                  href="/#projects"
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium px-4 py-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
                
                <a
                  href="/#faq"
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium px-4 py-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </a>
                
                <Link
                  to="/contact"
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium px-4 py-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Mobile Menu Footer */}
            <div className="border-t border-border p-6">
              <p className="text-sm text-muted-foreground mb-4">Connect with us</p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for Mobile Menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;