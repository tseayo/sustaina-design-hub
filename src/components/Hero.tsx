import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";
import { Link } from "react-router-dom"; // ✅ Use React Router Link

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:sr-only-once absolute left-4 top-4 z-50 rounded px-3 py-2 bg-foreground text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Skip to content
      </a>

      {/* Decorative background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.02)_25%,hsl(var(--primary)/0.02)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.02)_75%)] bg-[length:60px_60px] opacity-60"></div>
      </div>

      <div id="main-content" className="container mx-auto px-6 lg:px-8 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 backdrop-blur-sm"
            aria-hidden="false"
          >
            <div className="relative flex-none">
              <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
              <div
                className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full motion-safe:animate-ping opacity-40"
                aria-hidden="true"
              />
            </div>
            <span className="text-sm font-medium text-white">
              Leading Energy Consultants
            </span>
          </div>

          {/* Headline + Subhead */}
          <div className="space-y-6">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight tracking-tight"
            >
              Driving your journey to Net Zero Energy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              Expert energy consulting services that empower businesses and communities to reduce greenhouse gas emissions, optimize efficiency, and transition to sustainable energy solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Contact Button */}
              <Link to="/contact"> {/* ✅ FIXED: href → to */}
                <Button
                  variant="hero"
                  size="xl"
                  className="shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  aria-label="Start your net zero transition — get a free consultation"
                >
                  Get a Free Consultation
                  <ChevronRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>

              {/* 🌿 Carbon Calculator Button (replaces Explore Solutions) */}
              <Link to="/carbon-calculator"> {/* ✅ FIXED: href → to */}
                <Button
                  variant="outline"
                  size="xl"
                  className="border-2 hover:bg-accent/10 hover:border-primary hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50"
                  aria-label="Carbon Emission Calculator"
                >
                  Open Carbon Calculator
                </Button>
              </Link>
            </div>

            <p className="text-sm text-white/80 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Free 30-minute consultation • No obligation • Expert guidance
            </p>
          </div>

          {/* Stats */}
          <dl className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto" aria-label="Company statistics">
            <div>
              <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">500+</dd>
              <div className="text-white/80 text-sm font-medium">Projects</div>
            </div>

            <div>
              <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">2M+</dd>
              <div className="text-white/80 text-sm font-medium">CO₂ Reduced</div>
            </div>

            <div>
              <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">15+</dd>
              <div className="text-white/80 text-sm font-medium">Years</div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
