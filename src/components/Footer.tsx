import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import neclLogo from "@/assets/necl-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <img 
                src={neclLogo} 
                alt="NetZero Energy Consultant Limited" 
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Expert energy consulting services that empower businesses and communities to reduce greenhouse gas emission and transition to sustainable energy solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-smooth"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-smooth"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-smooth"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About
                </a>
              </li>
              <li>
                <Link to="/focus-areas" className="text-muted-foreground hover:text-primary transition-smooth">
                  Expertise
                </Link>
              </li>
              <li>
                <a href="/#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-muted-foreground hover:text-primary transition-smooth">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Expertise Areas */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Expertise</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/solar-power" className="text-muted-foreground hover:text-primary transition-smooth">
                  Solar Power
                </Link>
              </li>
              <li>
                <Link to="/emission-reduction" className="text-muted-foreground hover:text-primary transition-smooth">
                  Emission Reduction
                </Link>
              </li>
              <li>
                <Link to="/focus-areas" className="text-muted-foreground hover:text-primary transition-smooth">
                  Hydrogen
                </Link>
              </li>
              <li>
                <a href="/#faq" className="text-muted-foreground hover:text-primary transition-smooth">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@netzeroenergyconsultantltd.com" className="text-muted-foreground hover:text-primary transition-smooth">
                  info@netzeroenergyconsultantltd.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+44 203 937 9903" className="text-muted-foreground hover:text-primary transition-smooth">
                  +44 203 937 9903
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  NetZero Energy Consultant Limited
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} NetZero Energy Consultant Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
