import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Sun, 
  DollarSign, 
  Zap, 
  TrendingDown, 
  Shield, 
  Leaf,
  Battery,
  Settings,
  Layers,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileText,
  Calendar
} from "lucide-react";

const SolarPower = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2">
              <Sun className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Solar PV Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Solar PV Power Solutions for{" "}
              <span className="bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent">
                Oil & Gas Operations
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Engineered for reliability and built for impact. Our modular solar PV solutions deliver clean, 
              cost-competitive power to metering stations, compressor stations, and remote facilities, ensuring 
              operational resilience and advancing your sustainability goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="xl" className="shadow-2xl">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Technical Assessment
              </Button>
              <Button variant="outline" size="xl">
                <FileText className="w-5 h-5 mr-2" />
                Download Solution Brief
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Triple Value Proposition */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The Triple Value Proposition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We deliver more than just solar power. Our solutions are designed to provide a clear 
              competitive edge in the energy transition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cost Competitiveness */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Cost Competitiveness & Financial Certainty
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Achieve 30-40% lower Levelized Cost of Energy (LCOE) compared to diesel generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Zero upfront CAPEX required with our tailored financing models</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lock in competitive, stable energy prices for 15-20 years</span>
                </li>
              </ul>
            </Card>

            {/* Operational Resilience */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Operational Resilience & Diesel Displacement
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Eliminate operational dependency on complex diesel logistics and supply chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Shield your operations from global diesel price volatility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Enhance power reliability for critical, remote infrastructure</span>
                </li>
              </ul>
            </Card>

            {/* Sustainability & ESG */}
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-border/50">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Sustainability & ESG Leadership
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Directly integrate renewables into your core operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Strengthen your ESG profile to meet the expectations of international partners and investors</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Technically Engineered */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Technically Engineered for Your Environment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systems are specifically designed to meet the rigorous demands of gas processing and transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Modular & Scalable Designs
                  </h3>
                  <p className="text-muted-foreground">
                    Solutions for Metering Stations, CP Stations, Gas Treatment Plants, and Compressor Stations
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    24/7 Reliability
                  </h3>
                  <p className="text-muted-foreground">
                    Hybrid systems integrated with advanced battery storage for uninterrupted power
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Ruggedized for Challenge
                  </h3>
                  <p className="text-muted-foreground">
                    Built to perform in the most demanding environments
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Future-Proof Scalability
                  </h3>
                  <p className="text-muted-foreground">
                    Capacity designed to evolve with your operational needs
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Implementation Pathway */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Proven Project Implementation Pathway
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured, collaborative process designed for success without disruption.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    Technical Assessment & Feasibility
                  </h3>
                  <p className="text-muted-foreground">
                    We conduct a joint technical assessment of your facilities to evaluate solar potential, 
                    energy loads, and integration points.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    Custom Solution Design & Financial Modeling
                  </h3>
                  <p className="text-muted-foreground">
                    We develop a tailored system design, complete with performance projections and a clear 
                    financial model outlining your ROI.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                    Phased Pilot Deployment & Monitoring
                  </h3>
                  <p className="text-muted-foreground">
                    We implement a pilot at a priority site with rigorous performance monitoring to validate 
                    system output and reliability before full-scale rollout.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Engineered for Seamless Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We ensure a smooth transition to solar power with zero compromise on your ongoing operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border/50">
              <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">Seamless Grid Integration</h3>
                <p className="text-muted-foreground">
                  Designed to work in harmony with your existing power infrastructure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border/50">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">Zero Operational Downtime</h3>
                <p className="text-muted-foreground">
                  Meticulous planning ensures installations proceed without disrupting your production
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border/50">
              <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">Minimal Site Footprint</h3>
                <p className="text-muted-foreground">
                  Efficient designs that require minimal site preparation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border/50">
              <Layers className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">Phased Asset Deployment</h3>
                <p className="text-muted-foreground">
                  A strategic, roll-out plan across your asset portfolio to manage risk and capital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to Power Your Operations with Solar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our technical team to schedule an initial assessment and discover the potential for your assets.
          </p>
          <Button variant="hero" size="xl" className="shadow-2xl">
            Schedule Your Initial Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolarPower;
