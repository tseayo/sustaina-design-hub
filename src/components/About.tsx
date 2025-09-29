import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Lightbulb, Shield, Users, Target, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to protecting the planet by promoting responsible energy practices and reducing environmental impact."
    },
    {
      icon: Lightbulb,
      title: "Innovation", 
      description: "Embracing cutting-edge technologies and forward-thinking strategies to deliver the most effective energy solutions."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Believing in transparency, honesty, and ethical decision-making in all aspects of our work."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients, partners, and stakeholders to develop solutions that create lasting positive change."
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--accent)/0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Target className="w-4 h-4" />
            About NetZero Energy
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Pioneering the Future of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sustainable Energy</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Expert energy consulting services that empower businesses and communities to reduce greenhouse gas emission, optimize efficiency, and transition to sustainable energy solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Who We Are */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl text-foreground">Who We Are</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              At NetZero Energy Consultant Limited, we provide tailored solutions that empower businesses and communities to reduce their carbon footprint, optimize energy efficiency, and transition toward a cleaner, more sustainable future.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              We understand that every client has unique energy needs and goals. That's why we take a personalized approach, working closely with you to develop strategies that maximize efficiency, minimize costs, and contribute to a net-zero future.
            </p>
            
            <Button variant="hero" size="lg" className="mt-6 hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium">
              Learn More About Our Approach
            </Button>
          </div>

          {/* Our Vision */}
          <Card className="gradient-card shadow-medium border-0 hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 animate-scale-in overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/15 transition-all duration-300 hover:scale-110 shadow-soft">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground">Our Vision</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be a global leader in driving the transition to a net-zero energy future, helping businesses and communities create a more sustainable and resilient world.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Global sustainability leadership</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Community-focused solutions</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Resilient energy systems</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-display-sm text-foreground mb-4">Our Core Values</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision and drive our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 cursor-pointer border border-border/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-soft group-hover:shadow-medium">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="font-heading text-xl text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {value.title}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 gradient-card rounded-2xl shadow-elegant hover:shadow-glow hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h3 className="font-heading text-2xl text-foreground mb-4">
              Ready to Shape a Better Future?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              At NetZero Energy Consultant Limited, we don't just offer energy solutions—we help shape a better future. Let's work together to make net zero a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;