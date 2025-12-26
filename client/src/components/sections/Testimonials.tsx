import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">Client Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Trusted by Leading Businesses</h3>
          <p className="text-muted-foreground text-lg">
            Hear from founders and executives who have partnered with us to drive growth and build stronger financial foundations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm bg-secondary/20">
                      <CardContent className="p-8">
                        <p className="text-muted-foreground mb-6 text-base leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="border-t border-gray-100 pt-4 mt-auto">
                          <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{testimonial.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="absolute -right-12 border-primary text-primary hover:bg-primary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
