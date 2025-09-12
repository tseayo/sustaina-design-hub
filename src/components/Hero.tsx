import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sustainable energy landscape with wind turbines and solar panels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 gradient-hero opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-8 animate-fade-in shadow-glow">
            <span className="w-2 h-2 bg-accent rounded-full mr-3 animate-pulse"></span>
            Leading Energy Consulting Experts
          </div>

          {/* Headline */}
          <h1 className="font-heading text-display-lg md:text-display-xl text-white mb-6 leading-tight">
            Driving Your Journey to{" "}
            <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
              Net Zero
            </span>{" "}
            Energy
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert energy consulting services that empower businesses and communities to reduce carbon footprints, optimize efficiency, and transition to sustainable energy solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
            <Button variant="gradient" size="xl" className="group hover:shadow-glow hover:scale-105 transition-all duration-300">
              Start Your Transition
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
            </Button>
            
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300">
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">50%</div>
              <div className="text-white/80 text-sm">Avg. Energy Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;