import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/30">
      {/* Stripe-inspired Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.02)_25%,hsl(var(--primary)/0.02)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.02)_75%)] bg-[length:60px_60px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-full px-6 py-3 animate-fade-in">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-40"></div>
                </div>
                <span className="text-sm font-medium text-foreground/80">Leading Energy Consultants</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold text-foreground leading-[0.9] tracking-tight">
                  Driving Your Journey to{' '}
                  <span className="bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent">
                    Net Zero Energy
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-xl">
                  Transform your energy future with expert consulting services that reduce emissions, optimize efficiency, and accelerate sustainable growth.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Button variant="hero" size="xl" className="shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
                  Start Your Transition
                </Button>
                <Button variant="outline" size="xl" className="hover:shadow-lg transition-all duration-300">
                  Watch Our Story
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">500+</div>
                  <div className="text-muted-foreground text-sm font-medium">Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">2M+</div>
                  <div className="text-muted-foreground text-sm font-medium">CO₂ Reduced</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">15+</div>
                  <div className="text-muted-foreground text-sm font-medium">Years</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Sustainable energy solutions" 
                  className="w-full h-auto rounded-3xl shadow-2xl border border-border/50"
                />
                {/* Overlay Card */}
                <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Carbon Reduction</div>
                      <div className="text-2xl font-bold text-foreground">-87%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;