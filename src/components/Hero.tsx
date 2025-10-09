import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";
import neclLogo from "@/assets/necl-logo.png";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/30"
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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo and Tagline */}
              <div className="flex items-center gap-4 mb-4 animate-fade-in">
                <img 
                  src={neclLogo}
                  alt="NetZero Energy Consultants Ltd Logo" 
                  className="h-16 w-auto"
                  loading="eager"
                />
                <div className="h-12 w-px bg-border"></div>
                <span className="text-sm font-medium text-muted-foreground">
                  Driving your journey to Net Zero Energy
                </span>
              </div>

              {/* Badge */}
              <div
                className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-full px-6 py-3 animate-fade-in motion-reduce:animate-none"
                aria-hidden="false"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="sr-only">Trusted partner</span>
                <div className="relative flex-none">
                  <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                  <div
                    className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full motion-safe:animate-ping opacity-40"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm font-medium text-foreground/80">Leading Energy Consultants</span>
              </div>

              {/* Headline + Subhead */}
              <div className="space-y-6">
                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight tracking-tight"
                  style={{ animationDelay: '0.2s' }}
                >
                  Your Trusted Partner for{" "}
                  <span className="bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent">
                    Sustainable Energy Transitions
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl font-light" style={{ animationDelay: '0.3s' }}>
                  We empower businesses and communities to achieve net-zero goals through expert consulting in renewable energy, carbon reduction, and sustainable solutions. Partner with us to reduce emissions, optimize efficiency, and build a greener future.
                </p>
              </div>

              {/* Action Buttons: clear primary vs secondary */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Free 30-minute consultation • No obligation • Expert guidance
                </p>
              </div>

              {/* Stats — semantic definition list */}
              <dl className="grid grid-cols-3 gap-8 pt-8" aria-label="Company statistics">
                <div>
                  <dt className="sr-only">Projects</dt>
                  <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground" aria-label="Five hundred plus projects">
                    500+
                  </dd>
                  <div className="text-muted-foreground text-sm font-medium">Projects</div>
                </div>

                <div>
                  <dt className="sr-only">CO2 reduced</dt>
                  <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground" aria-label="Two million plus tonnes of carbon dioxide reduced">
                    2M+
                  </dd>
                  <div className="text-muted-foreground text-sm font-medium">CO₂ Reduced</div>
                </div>

                <div>
                  <dt className="sr-only">Years</dt>
                  <dd className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground" aria-label="Fifteen plus years of experience">
                    15+
                  </dd>
                  <div className="text-muted-foreground text-sm font-medium">Years</div>
                </div>
              </dl>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <figure className="relative rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
                {/* If you can add responsive images, replace this with <picture> + srcSet */}
                <img
                  src={heroImage}
                  alt="Solar panels and energy infrastructure — sustainable energy solutions in practice."
                  width={1200}
                  height={800}
                  loading="eager" // hero LCP: eager is OK; change to lazy if below-fold
                  decoding="async"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay card — accessible, but ensure it's visible to keyboard users if actionable */}
                <figcaption
                  className="absolute -bottom-8 -left-8 bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-sm w-64"
                  aria-hidden="false"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-none">
                      <span className="sr-only">Carbon reduction</span>
                      <div className="w-6 h-6 bg-green-500 rounded-full" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Carbon Reduction</div>
                      <div className="text-2xl font-bold text-foreground">-87%</div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;