import focusAreasImage from "@/assets/focus-areas.png";

const FocusAreas = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-display-lg text-foreground mb-6">
            NECL Business Focus Areas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NetZero Energy Consultant Limited is driven by 5 "A"s: Energy Availability, Accessibility, Affordability, Acceptability and Assurance
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elegant p-8 border border-border/50">
            <img 
              src={focusAreasImage} 
              alt="NECL Business Focus Areas - Solar Power, Emission Reduction, Hydrogen, E-mobility Charging, Hydropower and Bioenergy" 
              className="w-full h-auto rounded-xl shadow-medium hover:shadow-glow transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-card rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300">
            <h3 className="font-heading text-xl text-foreground mb-3">Solar Power</h3>
            <p className="text-muted-foreground text-sm">Solar energy generation and profitable investments (public, scale, commercial and industrial and distributed generation)</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300">
            <h3 className="font-heading text-xl text-foreground mb-3">Emission Reduction</h3>
            <p className="text-muted-foreground text-sm">Investment in Carbon Projects (Flare down, CCUs and provision services FCAS, DLOF, Biogas Recovery)</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300">
            <h3 className="font-heading text-xl text-foreground mb-3">Hydrogen</h3>
            <p className="text-muted-foreground text-sm">Hydrogen energy production and strategic investments (Green & Blue)</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300">
            <h3 className="font-heading text-xl text-foreground mb-3">E-mobility Charging</h3>
            <p className="text-muted-foreground text-sm">Invest in EV charging infrastructure and accessories</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300">
            <h3 className="font-heading text-xl text-foreground mb-3">Hydropower</h3>
            <p className="text-muted-foreground text-sm">Hydro Power Generation And Profitable Investments</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl border border-border/50 hover:shadow-elegant transition-all duration-300">
            <h3 className="font-heading text-xl text-foreground mb-3">Bioenergy</h3>
            <p className="text-muted-foreground text-sm">Bio-energy production and investments (Biomass & Biodisel, Waste to Energy & SAF)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;