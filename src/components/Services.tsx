import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Zap, 
  Target, 
  BarChart3, 
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  ChevronRight
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentView, setCurrentView] = useState('overview'); // 'overview' | 'sublist' | 'detail'

  const services = [
    {
      id: 1,
      slug: "energy-audits",
      title: "Energy Audits",
      description: "In-depth assessments of your current energy consumption to identify inefficiencies and uncover opportunities for cost savings with actionable recommendations.",
      icon: Search,
      features: [
        "Comprehensive energy consumption analysis",
        "Detailed efficiency assessments", 
        "Actionable optimization recommendations",
        "Cost savings projections"
      ],
      detailedDescription: "Our comprehensive energy audits provide a thorough analysis of your energy consumption patterns, identifying inefficiencies and opportunities for significant cost savings. We deliver actionable recommendations tailored to your specific needs."
    },
    {
      id: 2,
      slug: "renewable-energy",
      title: "Renewable Energy Solutions",
      description: "Tailored renewable energy systems including solar, wind, and other sustainable technologies with complete feasibility studies and implementation support.",
      icon: Zap,
      features: [
        "Solar and wind system design",
        "Feasibility studies and analysis",
        "Installation guidance and support",
        "Ongoing maintenance planning"
      ],
      detailedDescription: "Transform your energy infrastructure with our renewable energy solutions. We design and implement solar, wind, and other sustainable technologies with complete feasibility studies and ongoing support."
    },
    {
      id: 3,
      slug: "ghg-accounting",
      title: "Greenhouse Gas (GHG) Accounting & Carbon Credit Certification", 
      description: "Quantify your carbon footprint and achieve sustainability goals with verified GHG accounting and high-quality carbon credit solutions.",
      icon: Target,
      features: [
        "Comprehensive GHG emissions measurement",
        "GHG reporting and documentation",
        "Carbon reduction strategy development",
        "Carbon credit procurement and certification"
      ],
      detailedDescription: "Accurately measure and manage your carbon footprint with our verified GHG accounting services. We help you achieve sustainability goals and navigate carbon credit certification."
    },
    {
      id: 4,
      slug: "carbon-footprint",
      title: "Carbon Footprint Analysis",
      description: "Precise measurement and reporting of greenhouse gas emissions with targeted reduction strategies and carbon offset solutions.",
      icon: BarChart3,
      features: [
        "Comprehensive emissions measurement",
        "GHG reporting and documentation",
        "Reduction strategy development",
        "Carbon offset solutions"
      ],
      detailedDescription: "Gain precise insights into your greenhouse gas emissions with our comprehensive carbon footprint analysis. We provide targeted reduction strategies and carbon offset solutions."
    },
    {
      id: 5,
      slug: "training-workshops",
      title: "Training and Workshops",
      description: "Educational programs to build internal capacity for sustainable practices and energy management within your organization.",
      icon: GraduationCap,
      features: [
        "Customized training programs",
        "Energy management workshops",
        "Best practices education",
        "Ongoing capability building"
      ],
      detailedDescription: "Build internal capacity for sustainable practices with our educational programs and workshops. We empower your team with the knowledge and skills for effective energy management."
    }
  ];

  // Handle service selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentView('detail');
  };

  // Show service sublist
  const showSublist = () => {
    setCurrentView('sublist');
    setSelectedService(null);
  };

  // Back to overview
  const backToOverview = () => {
    setCurrentView('overview');
    setSelectedService(null);
  };

  // Back to sublist from detail
  const backToSublist = () => {
    setCurrentView('sublist');
  };

  // Service Sublist View
  const renderServiceSublist = () => (
    <div className="animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={backToOverview}
        className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Overview
      </Button>

      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
          Our Expertise
        </h2>
        <p className="text-lg text-muted-foreground">
          Select a service to learn more about our specialized solutions
        </p>
      </div>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <Card 
              key={service.id}
              className="group cursor-pointer border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              onClick={() => handleServiceSelect(service)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  // Service Detail View
  const renderServiceDetail = () => {
    if (!selectedService) return null;
    
    const IconComponent = selectedService.icon;
    
    return (
      <div className="animate-fade-in">
        <Button 
          variant="ghost" 
          onClick={backToSublist}
          className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              {selectedService.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {selectedService.detailedDescription}
            </p>
          </div>

          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Service Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedService.description}
                  </p>
                  
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                    Get Started with {selectedService.title}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-4 flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  // Main Overview View (Original Grid)
  const renderOverview = () => (
    <>
      <div className="max-w-4xl mx-auto text-center mb-20 space-y-8">
        <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium animate-fade-in">
          <Search className="w-4 h-4" />
          Our Services
        </div>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Comprehensive Energy Solutions
        </h2>
        <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          From initial assessment to full implementation, we provide end-to-end energy consulting services tailored to your unique needs.
        </p>
        
        {/* Mobile Navigation Button */}
        <div className="lg:hidden pt-4">
          <Button 
            variant="outline" 
            size="lg"
            onClick={showSublist}
            className="animate-fade-in"
          >
            Expertise
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Desktop Grid - Hidden on mobile when navigation is active */}
      <div className="hidden lg:block">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => handleServiceSelect(service)}
              >
                {/* ... rest of your existing card code ... */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold group-hover:text-primary transition-colors duration-300 mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-sm mb-4 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Key Features
                    </h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Mobile Grid - Only show in overview mode */}
      {currentView === 'overview' && (
        <div className="lg:hidden grid gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => handleServiceSelect(service)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-sm font-medium">Learn More</span>
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {currentView === 'overview' && renderOverview()}
        {currentView === 'sublist' && renderServiceSublist()}
        {currentView === 'detail' && renderServiceDetail()}
      </div>
    </section>
  );
};

export default Services;
