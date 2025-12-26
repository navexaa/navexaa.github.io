import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const insights = [
  {
    title: "Navigating Growth-Stage Fundraising",
    category: "Fundraising",
    date: "Dec 2025",
    description: "Key strategies for startup founders to successfully navigate equity and debt fundraising in the current market environment."
  },
  {
    title: "The Role of a Fractional CFO",
    category: "Strategic Finance",
    date: "Nov 2025",
    description: "How growing SMEs can leverage senior financial leadership without the full-time overhead costs."
  },
  {
    title: "Maximizing Business Valuation",
    category: "Valuation",
    date: "Oct 2025",
    description: "Common pitfalls and best practices for preparing your company for a successful valuation exercise."
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative diagonal line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">Our Insights</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Expert Perspectives</h3>
          <p className="text-gray-400 text-lg">
            Actionable insights for founders, CXOs, and investors on scaling sustainable businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-white/10 shadow-sm hover:shadow-2xl hover:border-accent/40 transition-all duration-300 rounded-sm bg-white/5 backdrop-blur-sm overflow-hidden group cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{insight.category}</span>
                    <span className="text-xs text-gray-500">{insight.date}</span>
                  </div>
                  <CardTitle className="text-xl font-serif text-white group-hover:text-accent transition-colors flex items-start justify-between gap-2">
                    {insight.title}
                    <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
