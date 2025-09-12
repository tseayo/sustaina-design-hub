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
      title: "Sustainability Strategy Development", 
      description: "Customized sustainability strategies aligned with your organization's objectives, incorporating industry best practices and regulatory compliance.",
      icon: Target,
      features: [
        "Strategic roadmap development",
        "Stakeholder engagement planning",
        "Regulatory compliance guidance",
        "Long-term goal setting"
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
              <Card key={service.id} className="group hover:shadow-elegant transition-smooth bg-card border-border h-full">
                <CardHeader>
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
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