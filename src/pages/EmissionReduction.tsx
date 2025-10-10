import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingDown, 
  DollarSign, 
  Shield, 
  Award,
  Target,
  ClipboardCheck,
  Cog,
  Flame,
  Wind,
  Zap,
  Battery,
  TreePine,
  Leaf,
  Settings
} from "lucide-react";

const EmissionReduction = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Reduction & Operational Efficiency",
      description: "Cut energy use and operating expenses. Reduce product losses and maintenance costs with advanced leak detection and energy optimization."
    },
    {
      icon: TrendingDown,
      title: "Revenue Growth & Investment",
      description: "Generate new income through carbon credits and green financing. Attract ESG-focused investors and technology partners."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance & Risk Management",
      description: "Stay compliant with national and international standards. Minimize risks from carbon pricing and upcoming environmental trade barriers."
    },
    {
      icon: Award,
      title: "Reputational Leadership",
      description: "Strengthen trust with customers, regulators, and communities. Position your company as a leader in the global energy transition."
    }
  ];

  const framework = [
    {
      icon: ClipboardCheck,
      title: "Assess & Baseline",
      description: "Conduct a full greenhouse gas inventory and establish a clear emissions baseline."
    },
    {
      icon: Target,
      title: "Strategize & Plan",
      description: "Set science-based targets and create an actionable roadmap tailored to your business goals."
    },
    {
      icon: Cog,
      title: "Implement & Manage",
      description: "Deliver targeted projects to reduce and offset emissions, while embedding ongoing performance management."
    }
  ];

  const solutions = [
    {
      category: "Emission Management",
      items: [
        { icon: Wind, text: "Leak Detection and Repair (LDAR)" },
        { icon: Flame, text: "Flare Down Projects" }
      ]
    },
    {
      category: "Energy Optimization",
      items: [
        { icon: Zap, text: "Energy Efficiency Projects" },
        { icon: Battery, text: "Carbon Capture, Utilisation, and Storage (CCUS)" }
      ]
    },
    {
      category: "Nature-Based Solutions",
      items: [
        { icon: TreePine, text: "Nature-Based Solution Projects" },
        { icon: Leaf, text: "Carbon Offset Projects" }
      ]
    },
    {
      category: "Advanced Integration",
      items: [
        { icon: Settings, text: "Advanced Technology Integration" }
      ]
    }
  ];

  const standards = [
    "Nigeria's Nationally Determined Contributions (NDC)",
    "The Oil & Gas Decarbonization Charter (OGDC)",
    "The EU Carbon Border Adjustment Mechanism (CBAM)"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="bg-background">
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--accent)/0.1)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <TrendingDown className="w-4 h-4" />
              Decarbonization Solutions
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Transform Environmental Responsibility into Competitive Advantage
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Go beyond simple compliance — turn sustainability into a driver of growth, efficiency, and long-term resilience. Our comprehensive decarbonization solutions help energy and industrial leaders successfully navigate the energy transition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="xl" className="shadow-2xl shadow-primary/20">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="xl">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              The Value of Partnering With Us
            </h2>
            <p className="text-xl text-muted-foreground">
              A strategic approach to decarbonization creates measurable impact across your entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 border border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-soft">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--accent)/0.1)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Our End-to-End Decarbonization Framework
            </h2>
            <p className="text-xl text-muted-foreground">
              We guide you through every stage of your journey — from baseline to long-term results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {framework.map((step, index) => (
              <Card key={index} className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 border border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-soft">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Our Comprehensive Suite of Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              We provide a complete spectrum of technical and strategic services to accelerate your decarbonization goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-6 pb-4 border-b border-border">
                    {solution.category}
                  </h3>
                  <div className="space-y-4">
                    {solution.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 group/item">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-none group-hover/item:bg-primary/20 transition-colors duration-300">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed pt-2 group-hover/item:text-foreground transition-colors duration-300">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                Alignment With Global Standards
              </h2>
              <p className="text-xl text-muted-foreground">
                Our strategies are built to help you meet and exceed international and national commitments, including:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {standards.map((standard, index) => (
                <Card key={index} className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 border border-border/50 text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {standard}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="gradient-card shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-all duration-500 border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
                Ready to Build Your Decarbonization Strategy?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's explore how we can help you achieve your environmental and business goals.
              </p>
              <Button variant="hero" size="xl" className="shadow-2xl shadow-primary/20">
                Contact Our Experts Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EmissionReduction;
