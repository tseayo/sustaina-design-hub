import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--accent)/0.1)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Mail className="w-4 h-4" />
              Contact Us
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Get in Touch
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Have questions about our services? We're here to help you achieve your sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Contact Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  NetZero Energy Consultant LTD
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team of experts is ready to help you transform your energy future. Reach out to discuss your project and discover how we can support your sustainability goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@netzeroenergyexperts.com"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      info@netzeroenergyexperts.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+44 203 937 9903"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      +44 203 937 9903
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      NetZero Energy Consultant Limited<br />
                      Contact us for office location details
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
