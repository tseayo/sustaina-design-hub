import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Calendar, 
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Leaf
} from "lucide-react";

const KnowledgeHub = () => {
  const articles = [
    {
      id: 1,
      title: "The Ultimate Guide to Net-Zero Energy Buildings",
      excerpt: "Discover the key principles, technologies, and strategies for achieving net-zero energy status in commercial and residential buildings.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Guides",
      icon: BookOpen,
      featured: true
    },
    {
      id: 2,
      title: "Renewable Energy Trends 2024: What's Next?",
      excerpt: "Explore the latest trends in renewable energy technology, policy changes, and market developments shaping the industry.",
      date: "March 10, 2024", 
      readTime: "6 min read",
      category: "Trends",
      icon: TrendingUp,
      featured: false
    },
    {
      id: 3,
      title: "Carbon Footprint Reduction: Practical Steps for Businesses",
      excerpt: "Learn actionable strategies and best practices for reducing your organization's carbon footprint effectively.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Best Practices",
      icon: Leaf,
      featured: false
    },
    {
      id: 4,
      title: "Energy Efficiency Innovations in Manufacturing",
      excerpt: "Case studies and insights on how manufacturing companies are implementing energy-efficient solutions.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Case Studies",
      icon: Lightbulb,
      featured: false
    }
  ];

  const categories = [
    "All Articles",
    "Guides", 
    "Trends",
    "Best Practices",
    "Case Studies"
  ];

  return (
    <section id="knowledge-hub" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Hub
          </Badge>
          <h2 className="font-heading text-display-md text-foreground mb-6">
            Latest Insights & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest insights and news about sustainable energy practices, 
            innovations, and industry developments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {articles.filter(article => article.featured).map(article => {
          const IconComponent = article.icon;
          return (
            <Card key={article.id} className="mb-8 bg-card border-border overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                  <div className="w-20 h-20 gradient-hero rounded-full flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{article.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-2xl font-heading text-foreground mb-4 hover:text-primary transition-smooth cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      Read More 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.filter(article => !article.featured).map(article => {
            const IconComponent = article.icon;
            return (
              <Card key={article.id} className="group hover:shadow-elegant transition-smooth bg-card border-border">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-lg font-heading text-foreground group-hover:text-primary transition-smooth cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card rounded-2xl border border-border p-8 text-center">
          <h3 className="font-heading text-2xl text-foreground mb-4">
            Stay Informed
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights on sustainable energy 
            practices delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-6 py-3">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;