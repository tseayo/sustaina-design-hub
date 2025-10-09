import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building, Users, Leaf } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Retail Chain Energy Transformation",
      client: "Client A: Major Retail Chain",
      description: "Implemented comprehensive energy management systems across 50+ locations, resulting in significant cost reductions and improved sustainability metrics.",
      results: [
        "30% reduction in energy costs",
        "25% decrease in carbon emissions",
        "ROI achieved within 18 months"
      ],
      icon: Building,
      category: "Commercial",
      timeline: "12 months"
    },
    {
      id: 2,
      title: "Municipal Sustainability Initiative",
      client: "Client B: Local Government",
      description: "Developed and executed a comprehensive sustainability plan covering public buildings, transportation, and community engagement programs.",
      results: [
        "50% reduction in carbon emissions",
        "£2M annual cost savings",
        "Community engagement increased by 200%"
      ],
      icon: Users,
      category: "Government",
      timeline: "5 years"
    },
    {
      id: 3,
      title: "Manufacturing Facility Optimization",
      client: "Industrial Manufacturing Company",
      description: "Complete energy audit and renewable integration for large manufacturing facility, focusing on operational efficiency and sustainability.",
      results: [
        "40% energy consumption reduction",
        "Net-zero status achieved",
        "£1.5M annual savings"
      ],
      icon: Leaf,
      category: "Industrial",
      timeline: "24 months"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium animate-fade-in">
            <TrendingUp className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Proven Results,{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover how we've helped organizations across industries achieve their net-zero ambitions. 
            Each project showcases our commitment to delivering measurable, sustainable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => {
            const IconComponent = study.icon;
            return (
              <Card key={study.id} className="group hover:shadow-elegant transition-smooth bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline">{study.category}</Badge>
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground group-hover:text-primary transition-smooth">
                    {study.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-primary">{study.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Timeline: {study.timeline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to become our next success story?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;