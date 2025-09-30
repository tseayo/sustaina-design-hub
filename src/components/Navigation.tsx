import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
  ];

  const expertiseAreas = [
    { name: "Solar Power", path: "/focus-areas" },
    { name: "Emission Reduction", path: "/emission-reduction" },
    { name: "Hydrogen", path: "/focus-areas" },
    { name: "E-mobility Charging", path: "/focus-areas" },
    { name: "Hydropower", path: "/focus-areas" },
    { name: "Bioenergy", path: "/focus-areas" }
  ];

  const solutionItems = [
    "Energy Credits",
    "Renewable Energy Solutions",
    "GHG Accounting and Carbon Credit Certification",
    "Training and Workshops"
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-elegant ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-11 h-11 gradient-hero rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-smooth">
              NECL
            </span>
          </div>

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
              <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-smooth font-medium">
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
              <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-smooth font-medium">
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
              href="#case-studies"
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Get Started
            </Button>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
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
              
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </a>
              
              <a
                href="#case-studies"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </a>
              
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;