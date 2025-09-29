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
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Expertise
          </Badge>
          <h2 className="font-heading text-display-md text-foreground mb-6">
            Comprehensive Energy Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide a comprehensive range of services to help businesses and communities 
            transition toward a sustainable, net-zero future across multiple areas of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 bg-card border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground group-hover:text-primary transition-smooth leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 flex flex-col min-h-[280px]">
                  <p className="text-muted-foreground mb-8 leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold text-foreground text-sm mb-4 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-3 mt-2.5 flex-shrink-0 group-hover:bg-primary transition-colors duration-300"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
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