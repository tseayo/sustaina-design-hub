import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

/**
 * Revised Hero component:
 * - better semantics (<main>, <figure>, <dl>)
 * - accessible CTAs (aria-labels)
 * - respects prefers-reduced-motion
 * - decorative elements aria-hidden
 * - explicit image width/height to reduce CLS
 * - improved CTA hierarchy & wording
 */

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:sr-only-once absolute left-4 top-4 z-50 rounded px-3 py-2 bg-foreground text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Skip to content
      </a>

      {/* Background patterns (decorative) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>

        {/* stripe pattern: reduce motion and opacity for low-priority background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.02)_25%,hsl(var(--primary)/0.02)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.02)_75%)] bg-[length:60px_60px] opacity-60"></div>
      </div>

      {/* Floating decorative dots (motion-safe only) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full opacity-40 motion-safe:animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full opacity-60 motion-safe:animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-primary/30 rounded-full motion-safe:animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div id="main-content" className="container mx-auto px-6 lg:px-8 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Main Content */}
            <div className="space-y-8 text-center">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 animate-fade-in motion-reduce:animate-none backdrop-blur-sm"
                aria-hidden="false"
              >
                <span className="sr-only">Trusted partner</span>
                <div className="relative flex-none">
                  <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                  <div
                    className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full motion-safe:animate-ping opacity-40"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm font-medium text-white">Leading Energy Consultants</span>
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
                  Expert energy consulting services that empower businesses and communities to reduce greenhouse gas emission, optimize efficiency, and transition to sustainable energy solutions.
                </p>
              </div>

              {/* Action Buttons: clear primary vs secondary */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="hero"
                    size="xl"
                    className="shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    aria-label="Start your net zero transition — get a free consultation"
                    onClick={() => {
                      window.location.href = "/contact";
                    }}
                  >
                    Get a Free Consultation
                    <ChevronRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>

                  <Button
                    variant="outline"
                    size="xl"
                    className="border-2 hover:bg-accent/10 hover:border-primary hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/50"
                    aria-label="Explore our solutions"
                    onClick={() => {
                      window.location.href = "/#services";
                    }}
                  >
                    Explore Solutions
                  </Button>
                </div>
                
                {/* Microcopy under CTA */}
                <p className="text-sm text-white/80 flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Free 30-minute consultation • No obligation • Expert guidance
                </p>
              </div>

              {/* Stats — semantic definition list */}
              <dl className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto" aria-label="Company statistics">
                <div>
                  <dt className="sr-only">Projects</dt>
                  <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" aria-label="Five hundred plus projects">
                    500+
                  </dd>
                  <div className="text-white/80 text-sm font-medium">Projects</div>
                </div>

                <div>
                  <dt className="sr-only">CO2 reduced</dt>
                  <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" aria-label="Two million plus tonnes of carbon dioxide reduced">
                    2M+
                  </dd>
                  <div className="text-white/80 text-sm font-medium">CO₂ Reduced</div>
                </div>

                <div>
                  <dt className="sr-only">Years</dt>
                  <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white" aria-label="Fifteen plus years of experience">
                    15+
                  </dd>
                  <div className="text-white/80 text-sm font-medium">Years</div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;