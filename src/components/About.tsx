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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            About NetZero Energy
          </div>
          
          <h2 className="font-heading text-display-md text-foreground mb-6">
            Pioneering the Future of{" "}
            <span className="text-primary">Sustainable Energy</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a dedicated team of energy professionals committed to driving sustainability and innovation in the energy sector.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Who We Are */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-2xl text-foreground">Who We Are</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              At NetZero Energy Consultant Limited, we provide tailored solutions that empower businesses and communities to reduce their carbon footprint, optimize energy efficiency, and transition toward a cleaner, more sustainable future.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              We understand that every client has unique energy needs and goals. That's why we take a personalized approach, working closely with you to develop strategies that maximize efficiency, minimize costs, and contribute to a net-zero future.
            </p>
            
            <Button variant="hero" size="lg" className="mt-6">
              Learn More About Our Approach
            </Button>
          </div>

          {/* Our Vision */}
          <Card className="gradient-card shadow-medium border-0">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-foreground">Our Vision</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To be a global leader in driving the transition to a net-zero energy future, helping businesses and communities create a more sustainable and resilient world.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Global sustainability leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Community-focused solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Resilient energy systems</span>
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
            <Card key={index} className="group hover:shadow-medium transition-smooth cursor-pointer border border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bouncy">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="font-heading text-xl text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {value.title}
                </h4>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 gradient-card rounded-2xl shadow-medium">
          <h3 className="font-heading text-2xl text-foreground mb-4">
            Ready to Shape a Better Future?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            At NetZero Energy Consultant Limited, we don't just offer energy solutions—we help shape a better future. Let's work together to make net zero a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;