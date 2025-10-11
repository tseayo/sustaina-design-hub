// components/MobileNavigation.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronRight, 
  X,
  Menu,
  Sun, // Solar icon
  CloudRain, // Emission reduction icon
  Zap, // Energy
  BarChart3, // Consulting
  Users, // Training
  Target // Strategy
} from "lucide-react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeService, setActiveService] = useState(null);

  const expertiseItems = [
    {
      id: 1,
      slug: "solar-power",
      title: "Solar Power",
      icon: Sun,
      description: "Complete solar energy solutions for residential, commercial, and industrial applications",
      content: {
        title: "Solar Power Solutions",
        description: "We provide comprehensive solar energy solutions tailored to your specific needs. Our services include site assessment, system design, installation, and ongoing maintenance.",
        features: [
          "Residential solar panel installation",
          "Commercial solar energy systems",
          "Solar farm development",
          "Energy storage solutions",
          "Maintenance and monitoring"
        ],
        benefits: [
          "Reduce electricity costs by up to 80%",
          "25-year performance warranty",
          "Government incentives and rebates",
          "Carbon footprint reduction",
          "Energy independence"
        ]
      }
    },
    {
      id: 2,
      slug: "emission-reduction",
      title: "Emission Reduction",
      icon: CloudRain,
      description: "Strategies and technologies to reduce your carbon footprint and environmental impact",
      content: {
        title: "Emission Reduction Strategies",
        description: "Our comprehensive emission reduction solutions help organizations meet sustainability goals while improving operational efficiency.",
        features: [
          "Carbon footprint assessment",
          "Emission reduction planning",
          "Clean technology implementation",
          "Sustainability reporting",
          "Regulatory compliance"
        ],
        benefits: [
          "Meet regulatory requirements",
          "Enhance corporate reputation",
          "Access green financing",
          "Reduce operational costs",
          "Attract environmentally conscious customers"
        ]
      }
    },
    {
      id: 3,
      slug: "energy-efficiency",
      title: "Energy Efficiency",
      icon: Zap,
      description: "Optimize energy consumption and reduce waste through advanced efficiency measures",
      content: {
        title: "Energy Efficiency Consulting",
        description: "Identify and implement energy efficiency measures to reduce consumption and costs while maintaining performance.",
        features: [
          "Energy audits and assessments",
          "Efficiency improvement plans",
          "Equipment optimization",
          "Building automation systems",
          "Performance monitoring"
        ]
      }
    },
    {
      id: 4,
      slug: "sustainability-consulting",
      title: "Sustainability Consulting",
      icon: BarChart3,
      description: "Strategic guidance for sustainable business practices and environmental stewardship",
      content: {
        title: "Sustainability Consulting Services",
        description: "Develop and implement sustainability strategies that align with your business objectives and environmental responsibilities.",
        features: [
          "Sustainability strategy development",
          "ESG reporting framework",
          "Stakeholder engagement",
          "Sustainable supply chain management",
          "Performance metrics and tracking"
        ]
      }
    },
    {
      id: 5,
      slug: "corporate-training",
      title: "Corporate Training",
      icon: Users,
      description: "Educational programs to build organizational capacity for sustainable practices",
      content: {
        title: "Corporate Training Programs",
        description: "Empower your team with the knowledge and skills needed to implement and maintain sustainable energy practices.",
        features: [
          "Customized training workshops",
          "Energy management certification",
          "Sustainability best practices",
          "Technical skill development",
          "Ongoing support and resources"
        ]
      }
    },
    {
      id: 6,
      slug: "green-strategy",
      title: "Green Strategy",
      icon: Target,
      description: "Long-term planning for sustainable growth and environmental responsibility",
      content: {
        title: "Green Business Strategy",
        description: "Develop comprehensive green strategies that integrate sustainability into your core business operations.",
        features: [
          "Long-term sustainability planning",
          "Green technology integration",
          "Carbon neutral roadmap",
          "Sustainable investment strategies",
          "Performance measurement framework"
        ]
      }
    }
  ];

  const handleExpertiseClick = () => {
    setActiveDropdown(activeDropdown === 'expertise' ? null : 'expertise');
  };

  const handleServiceSelect = (service) => {
    setActiveService(service);
    setActiveDropdown(null);
  };

  const handleBackToMenu = () => {
    setActiveService(null);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveService(null);
  };

  // Render Service Detail View
  const renderServiceDetail = () => {
    if (!activeService) return null;

    const IconComponent = activeService.icon;

    return (
      <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" onClick={handleBackToMenu} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back
            </Button>
            <Button variant="ghost" onClick={closeAll} size="icon">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Service Content */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
                {activeService.content.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {activeService.content.description}
              </p>
            </div>

            <div className="space-y-6">
              {/* Features */}
              <div className="bg-card rounded-xl p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Key Features
                </h3>
                <div className="space-y-3">
                  {activeService.content.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits - Show for Solar and Emission Reduction */}
              {(activeService.slug === "solar-power" || activeService.slug === "emission-reduction") && (
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    Key Benefits
                  </h3>
                  <div className="space-y-3">
                    {activeService.content.benefits?.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="text-center">
                <Button size="lg" className="w-full">
                  Get Started with {activeService.title}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Main Navigation Menu
  const renderNavigationMenu = () => (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-foreground">Navigation</h2>
          <Button variant="ghost" onClick={closeAll} size="icon">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start h-14" onClick={closeAll}>
            Home
          </Button>
          
          <Button variant="ghost" className="w-full justify-start h-14" onClick={closeAll}>
            About
          </Button>

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
                    <Button
                      key={item.id}
                      variant="ghost"
                      className="w-full justify-start h-12 text-sm"
                      onClick={() => handleServiceSelect(item)}
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      {item.title}
                    </Button>
                  );
                })}
              </div>
            )}
          </div>

          <Button variant="ghost" className="w-full justify-start h-14" onClick={closeAll}>
            Services
          </Button>
          
          <Button variant="ghost" className="w-full justify-start h-14" onClick={closeAll}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Navigation Overlays */}
      {isOpen && activeService && renderServiceDetail()}
      {isOpen && !activeService && renderNavigationMenu()}
    </>
  );
};

export default MobileNavigation;
