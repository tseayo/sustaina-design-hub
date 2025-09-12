import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "What are the benefits of renewable energy solutions?",
      answer: "Renewable energy offers numerous advantages including sustainability, cost savings over time, environmental benefits through reduced emissions, energy independence, low maintenance costs, and job creation. Many governments also offer incentives and tax benefits for renewable energy adoption."
    },
    {
      id: "item-2",
      question: "What is net-zero energy?",
      answer: "Net-zero energy refers to the equilibrium where a community or company produces as much energy as it consumes over a year. This means that the total amount of energy used equals the amount of renewable energy generated, creating a balanced energy ecosystem."
    },
    {
      id: "item-3",
      question: "What are the benefits of net-zero energy?",
      answer: "Net-zero energy provides multiple benefits: 1) Reduced greenhouse gas emissions by lowering reliance on fossil fuels, 2) Energy cost savings through reduced utility bills over time, 3) Enhanced energy security and independence, 4) Increased property values, and 5) Contribution to global climate goals."
    },
    {
      id: "item-4",
      question: "How long does it take to achieve net-zero status?",
      answer: "The timeline varies depending on the size and complexity of your operation. Residential projects typically take 6-12 months, while commercial and industrial projects can range from 12-36 months. We provide detailed project timelines during our initial consultation."
    },
    {
      id: "item-5",
      question: "What is included in an energy audit?",
      answer: "Our comprehensive energy audits include analysis of current energy consumption patterns, identification of inefficiencies, assessment of building envelope performance, evaluation of existing systems, and detailed recommendations for improvements with projected cost savings and ROI calculations."
    },
    {
      id: "item-6",
      question: "Do you provide ongoing support after installation?",
      answer: "Yes, we provide comprehensive ongoing support including system monitoring, maintenance guidance, performance optimization, troubleshooting assistance, and regular check-ups to ensure your renewable energy systems continue operating at peak efficiency."
    },
    {
      id: "item-7",
      question: "What financing options are available?",
      answer: "We work with various financing partners to offer flexible solutions including equipment financing, power purchase agreements (PPAs), energy service agreements (ESAs), and help you access available government incentives and grants to make your transition to renewable energy more affordable."
    },
    {
      id: "item-8",
      question: "How do you measure carbon footprint reduction?",
      answer: "We use industry-standard methodologies to measure baseline emissions, track reductions through precise monitoring systems, and provide detailed reporting. Our carbon footprint analysis includes Scope 1, 2, and 3 emissions where applicable, with regular progress updates and verification."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="font-heading text-display-md text-foreground mb-6">
            Get Answers to Common Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to the most frequently asked questions about renewable energy, 
            net-zero solutions, and our consulting services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                className="bg-card border border-border rounded-lg px-6 py-2"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;