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
    { name: "About", href: "/about" },
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
    { name: "Energy Audits", path: "/services" },
    { name: "Renewable Energy Solutions", path: "/services" },
    { name: "GHG Accounting and Carbon Credit Certification", path: "/services" },
    { name: "Training and Workshops", path: "/services" }
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
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </Link>
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
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.path} className="w-full cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/projects"
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Projects
            </Link>
            <Link
              to="/faq"
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              FAQ
            </Link>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-2 py-1">
                <Link 
                  to="/focus-areas" 
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Expertise
                </Link>
              </div>
              
              <Link
                to="/services"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              
              <Link
                to="/projects"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              
              <Link
                to="/faq"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 flex space-x-4 justify-center border-t border-border">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-smooth"
                  aria-label="Twitter"
                >
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