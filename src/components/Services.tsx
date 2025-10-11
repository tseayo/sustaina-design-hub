import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Zap, 
  Target, 
  BarChart3, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Energy Audits",
      description: "In-depth assessments of your current energy consumption to identify inefficiencies and uncover opportunities for cost savings with actionable recommendations.",
      icon: Search,
      features: [
        "Comprehensive energy consumption analysis",
        "Detailed efficiency assessments", 
        "Actionable optimization recommendations",
        "Cost savings projections"
      ]
    },
    {
      id: 2,
      title: "Renewable Energy Solutions",
      description: "Tailored renewable energy systems including solar, wind, and other sustainable technologies with complete feasibility studies and implementation support.",
      icon: Zap,
      features: [
        "Solar and wind system design",
        "Feasibility studies and analysis",
        "Installation guidance and support",
        "Ongoing maintenance planning"
      ]
    },
    {
      id: 3,
      title: "Greenhouse Gas (GHG) Accounting & Carbon Credit Certification", 
      description: "Quantify your carbon footprint and achieve sustainability goals with verified GHG accounting and high-quality carbon credit solutions.",
      icon: Target,
      features: [
        "Comprehensive GHG emissions measurement",
        "GHG reporting and documentation",
        "Carbon reduction strategy development",
        "Carbon credit procurement and certification"
      ]
    },
    {
      id: 4,
      title: "Carbon Footprint Analysis",
      description: "Precise measurement and reporting of greenhouse gas emissions with targeted reduction strategies and carbon offset solutions.",
      icon: BarChart3,
      features: [
        "Comprehensive emissions measurement",
        "GHG reporting and documentation",
        "Reduction strategy development",
        "Carbon offset solutions"
      ]
    },
    {
      id: 5,
      title: "Training and Workshops",
      description: "Educational programs to build internal capacity for sustainable practices and energy management within your organization.",
      icon: GraduationCap,
      features: [
        "Customized training programs",
        "Energy management workshops",
        "Best practices education",
        "Ongoing capability building"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-8">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium animate-fade-in">
            <Search className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Comprehensive Energy Solutions
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From initial assessment to full implementation, we provide end-to-end energy consulting services tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Floating dot */}
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

        <div className="text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl text-foreground mb-4">
              Ready to Transform Your Energy Future?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team is ready to help you develop a customized strategy 
              for achieving your net-zero energy goals.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
