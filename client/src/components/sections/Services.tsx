import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const services = [
  {
    title: "Management Consulting",
    description: "Driving operational excellence and strategic clarity.",
    items: [
      "Finance transformation",
      "Growth and business strategy",
      "Process optimisation",
      "PMO and execution support"
    ]
  },
  {
    title: "Core Finance Services",
    description: "Building the financial backbone for fundraising and valuation.",
    items: [
      "Pitch deck creation",
      "Financial modelling",
      "Business valuation",
      "End-to-end fundraising support (equity and debt)"
    ]
  },
  {
    title: "Fractional CFO Services",
    description: "High-level financial leadership without the full-time cost.",
    items: [
      "Strategic FP&A",
      "MIS reporting and dashboards",
      "Working capital optimisation",
      "Financial governance and decision support"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Comprehensive Advisory Solutions</h3>
          <p className="text-muted-foreground text-lg">
            From strategic planning to financial execution, we provide the expertise needed to scale sustainable businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 rounded-sm bg-secondary/40">
                <CardHeader className="pb-4">
                  <div className="w-12 h-1 bg-accent mb-6" />
                  <CardTitle className="text-2xl font-serif text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-primary/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
