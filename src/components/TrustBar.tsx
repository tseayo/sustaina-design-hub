import { Shield, Award, CheckCircle2, Users } from "lucide-react";

const TrustBar = () => {
  const trustIndicators = [
    {
      icon: Shield,
      text: "ISO Certified",
      subtext: "Quality Assured"
    },
    {
      icon: Award,
      text: "Industry Leader",
      subtext: "15+ Years Experience"
    },
    {
      icon: CheckCircle2,
      text: "500+ Projects",
      subtext: "Delivered Successfully"
    },
    {
      icon: Users,
      text: "Trusted Partner",
      subtext: "Leading Organizations"
    }
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Trusted by Industry Leaders
          </p>
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
            Your Reliable Energy Partner
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3 p-6 bg-card rounded-xl border border-border/50 hover:shadow-elegant hover:scale-105 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{indicator.text}</div>
                  <div className="text-sm text-muted-foreground">{indicator.subtext}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
