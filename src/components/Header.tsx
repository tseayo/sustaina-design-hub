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
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState('main'); // 'main' | 'expertise' | 'service-detail'
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const expertiseItems = [
    {
      id: 1,
      slug: "solar-power",
      title: "Solar Power",
      icon: Sun,
      description: "Complete solar energy solutions for residential, commercial, and industrial applications",
      content: `
        <h3>Solar Power Solutions</h3>
        <p>We provide comprehensive solar energy solutions tailored to your specific needs. Our services include:</p>
        <ul>
          <li>Residential solar panel installation</li>
          <li>Commercial solar energy systems</li>
          <li>Solar farm development</li>
          <li>Energy storage solutions</li>
          <li>Maintenance and monitoring</li>
        </ul>
        <p><strong>Benefits:</strong> Reduce electricity costs by up to 80%, 25-year performance warranty, Government incentives and rebates</p>
      `
    },
    {
      id: 2,
      slug: "emission-reduction",
      title: "Emission Reduction", 
      icon: CloudRain,
      description: "Strategies and technologies to reduce your carbon footprint and environmental impact",
      content: `
        <h3>Emission Reduction Strategies</h3>
        <p>Our comprehensive emission reduction solutions help organizations meet sustainability goals while improving operational efficiency.</p>
        <ul>
          <li>Carbon footprint assessment</li>
          <li>Emission reduction planning</li>
          <li>Clean technology implementation</li>
          <li>Sustainability reporting</li>
          <li>Regulatory compliance</li>
        </ul>
        <p><strong>Benefits:</strong> Meet regulatory requirements, Enhance corporate reputation, Access green financing</p>
      `
    },
    {
      id: 3,
      slug: "energy-efficiency",
      title: "Energy Efficiency",
      icon: Zap,
      description: "Optimize energy consumption and reduce waste through advanced efficiency measures",
      content: `
        <h3>Energy Efficiency Consulting</h3>
        <p>Identify and implement energy efficiency measures to reduce consumption and costs while maintaining performance.</p>
        <ul>
          <li>Energy audits and assessments</li>
          <li>Efficiency improvement plans</li>
          <li>Equipment optimization</li>
          <li>Building automation systems</li>
          <li>Performance monitoring</li>
        </ul>
      `
    },
    {
      id: 4,
      slug: "sustainability-consulting",
      title: "Sustainability Consulting",
      icon: BarChart3,
      description: "Strategic guidance for sustainable business practices and environmental stewardship",
      content: `
        <h3>Sustainability Consulting Services</h3>
        <p>Develop and implement sustainability strategies that align with your business objectives and environmental responsibilities.</p>
        <ul>
          <li>Sustainability strategy development</li>
          <li>ESG reporting framework</li>
          <li>Stakeholder engagement</li>
          <li>Sustainable supply chain management</li>
          <li>Performance metrics and tracking</li>
        </ul>
      `
    },
    {
      id: 5,
      slug: "corporate-training",
      title: "Corporate Training", 
      icon: Users,
      description: "Educational programs to build organizational capacity for sustainable practices",
      content: `
        <h3>Corporate Training Programs</h3>
        <p>Empower your team with the knowledge and skills needed to implement and maintain sustainable energy practices.</p>
        <ul>
          <li>Customized training workshops</li>
          <li>Energy management certification</li>
          <li>Sustainability best practices</li>
          <li>Technical skill development</li>
          <li>Ongoing support and resources</li>
        </ul>
      `
    },
    {
      id: 6,
      slug: "green-strategy",
      title: "Green Strategy",
      icon: Target,
      description: "Long-term planning for sustainable growth and environmental responsibility",
      content: `
        <h3>Green Business Strategy</h3>
        <p>Develop comprehensive green strategies that integrate sustainability into your core business operations.</p>
        <ul>
          <li>Long-term sustainability planning</li>
          <li>Green technology integration</li>
          <li>Carbon neutral roadmap</li>
          <li>Sustainable investment strategies</li>
          <li>Performance measurement framework</li>
        </ul>
      `
    }
  ];

  const handleExpertiseClick = () => {
    setMobileView('expertise');
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setMobileView('service-detail');
  };

  const handleBackToExpertise = () => {
    setMobileView('expertise');
    setSelectedService(null);
  };

  const handleBackToMain = () => {
    setMobileView('main');
    setSelectedService(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileView('main');
    setSelectedService(null);
  };

  const handleNavigateToPage = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  // Mobile Navigation - Main Menu
  const MobileMainMenu = () => (
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

      {/* Expertise Dropdown Trigger */}
      <Button 
        variant="ghost" 
        className="w-full justify-between h-14"
        onClick={handleExpertiseClick}
      >
        <span>Expertise</span>
        <ChevronRight className="w-4 h-4" />
      </Button>

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
  );

  // Mobile Navigation - Expertise Submenu
  const MobileExpertiseMenu = () => (
    <div className="space-y-2">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        className="w-full justify-start h-14 mb-4"
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
            <Button
              key={item.id}
              variant="ghost"
              className="w-full justify-start h-16 text-left px-4"
              onClick={() => handleServiceSelect(item)}
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
          );
        })}
      </div>
    </div>
  );

  // Mobile Navigation - Service Detail View
  const MobileServiceDetail = () => {
    if (!selectedService) return null;
    
    const IconComponent = selectedService.icon;

    return (
      <div className="space-y-4">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="w-full justify-start h-14 mb-4"
          onClick={handleBackToExpertise}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Expertise
        </Button>

        {/* Service Header */}
        <div className="text-center mb-6 px-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
            {selectedService.title}
          </h2>
          <p className="text-muted-foreground text-sm">
            {selectedService.description}
          </p>
        </div>

        {/* Service Content */}
        <div className="bg-card rounded-lg p-4 mx-4">
          <div 
            className="prose prose-sm max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: selectedService.content }}
          />
        </div>

        {/* Action Buttons */}
        <div className="px-4 space-y-3">
          <Button 
            className="w-full"
            onClick={() => handleNavigateToPage('/contact')}
          >
            Get Started with {selectedService.title}
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={handleBackToExpertise}
          >
            View Other Expertise Areas
          </Button>
        </div>
      </div>
    );
  };

  // Main Mobile Navigation Component
  const MobileNavigation = () => (
    <div className="fixed inset-0 bg-background z-50 lg:hidden overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-foreground">
            {mobileView === 'main' && 'Navigation'}
            {mobileView === 'expertise' && 'Our Expertise'}
            {mobileView === 'service-detail' && selectedService?.title}
          </h2>
          <Button variant="ghost" onClick={closeMobileMenu} size="icon">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Dynamic Content Based on View */}
        {mobileView === 'main' && <MobileMainMenu />}
        {mobileView === 'expertise' && <MobileExpertiseMenu />}
        {mobileView === 'service-detail' && <MobileServiceDetail />}
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
                        to={`/${item.slug}`}
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
