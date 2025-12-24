import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Founder & CEO, TechScale Ventures",
    content: "Navexaa transformed our financial strategy from ad-hoc to structured. Their fractional CFO support was instrumental in helping us raise our Series A round. Highly recommended.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    title: "Managing Director, Retail Innovations Ltd.",
    content: "The team's process optimization work reduced our operational costs by 25% in just six months. They bring Big 4 rigor with a startup-friendly approach.",
    rating: 5
  },
  {
    name: "Aditya Patel",
    title: "CFO, Manufacturing Excellence Co.",
    content: "Working with Navexaa on our business valuation was a game-changer. Their financial modelling expertise and communication made a complex process straightforward.",
    rating: 5
  },
  {
    name: "Meera Singh",
    title: "Co-founder, FinTech Collective",
    content: "Their pitch deck creation and fundraising support helped us articulate our value proposition clearly. We closed our Series B with ease.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Trusted by Leading Businesses</h3>
          <p className="text-muted-foreground text-lg">
            Hear from founders and executives who have partnered with us to drive growth and build stronger financial foundations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm bg-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-base leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
