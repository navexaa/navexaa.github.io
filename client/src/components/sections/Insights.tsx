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
    <section id="insights" className="py-24 bg-[#081528] text-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 60, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[100px]" 
        />
        
        {/* Subtle SVG lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-accent/30 rounded-full mb-4 bg-accent/5"
          >
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Our Insights</span>
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">Expert Perspectives</h3>
          <p className="text-gray-400 text-lg">
            Actionable insights for founders, CXOs, and investors on scaling sustainable businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full border border-white/5 shadow-sm hover:shadow-[0_20px_50px_rgba(197,160,89,0.1)] hover:border-accent/30 transition-all duration-500 rounded-none bg-white/5 backdrop-blur-md overflow-hidden group cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-2 py-1 bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-widest rounded-sm">{insight.category}</span>
                    <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">{insight.date}</span>
                  </div>
                  <CardTitle className="text-xl font-serif text-white group-hover:text-accent transition-colors duration-300 flex items-start justify-between gap-4">
                    <span className="leading-tight">{insight.title}</span>
                    <div className="mt-1 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">{insight.description}</p>
                  <div className="w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
