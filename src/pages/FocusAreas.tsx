import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, TrendingDown, Wind, BatteryCharging, Droplets, Leaf } from "lucide-react";

const FocusAreas = () => {
  const focusAreas = [
    {
      icon: Zap,
      title: "Solar Power",
      description: "Solar energy generation and profitable investments (public, scale, commercial and industrial and distributed generation)",
      available: true
    },
    {
      icon: TrendingDown,
      title: "Emission Reduction",
      description: "Investment in Carbon Projects (Flare down, CCUs and provision services FCAS, DLOF, Biogas Recovery)",
      available: true
    },
    {
      icon: Wind,
      title: "Hydrogen",
      description: "Hydrogen energy production and strategic investments (Green & Blue)",
      available: false
    },
    {
      icon: BatteryCharging,
      title: "E-mobility Charging",
      description: "Invest in EV charging infrastructure and accessories",
      available: false
    },
    {
      icon: Droplets,
      title: "Hydropower",
      description: "Hydro Power Generation And Profitable Investments",
      available: false
    },
    {
      icon: Leaf,
      title: "Bioenergy",
      description: "Bio-energy production and investments (Biomass & Biodisel, Waste to Energy & SAF)",
      available: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl lg:text-6xl text-foreground mb-6 font-bold">
              NECL Business Focus Areas
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              NetZero Energy Consultant Limited is driven by 5 "A"s: Energy Availability, Accessibility, Affordability, Acceptability and Assurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className={`relative p-8 bg-card rounded-2xl border border-border/50 hover:shadow-elegant transition-all duration-300 ${
                    area.available ? "hover:scale-105 cursor-pointer" : ""
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      area.available 
                        ? "gradient-hero shadow-soft" 
                        : "bg-muted"
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        area.available ? "text-white" : "text-muted-foreground"
                      }`} />
                    </div>
                    <h3 className="font-heading text-xl text-foreground font-semibold">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </p>
                    {!area.available && (
                      <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FocusAreas;