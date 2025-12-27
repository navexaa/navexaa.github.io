import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Linkedin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const insights = [
  // Placeholder insights for layout demonstration
  {
    title: "Navigating Growth-Stage Fundraising",
    category: "Fundraising",
    date: "Coming Soon",
    description: "Key strategies for startup founders to successfully navigate equity and debt fundraising."
  },
  {
    title: "The Role of a Fractional CFO",
    category: "Strategic Finance",
    date: "Coming Soon",
    description: "How growing SMEs can leverage senior financial leadership without the full-time overhead costs."
  },
  {
    title: "Maximizing Business Valuation",
    category: "Valuation",
    date: "Coming Soon",
    description: "Common pitfalls and best practices for preparing your company for a successful valuation exercise."
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-[#081528] text-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/4 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 60, 0],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/60 rounded-full blur-[100px]" 
        />
        
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
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
          <p className="text-gray-400 text-lg mb-8">
            Actionable insights for founders, CXOs, and investors on scaling sustainable businesses.
          </p>
          <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-md">
            <p className="text-gray-300 text-lg mb-4">
              Our first set of articles will be published shortly.
            </p>
            <p className="text-gray-400 text-base flex items-center justify-center gap-2">
              If you'd like to be notified when new articles are published, connect with us on 
              <a 
                href="https://www.linkedin.com/company/navexaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors flex items-center gap-1 font-semibold"
              >
                LinkedIn <Linkedin size={16} />
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full opacity-50 pointer-events-none grayscale"
          >
            <CarouselContent className="-ml-4">
              {insights.map((insight, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="h-full border border-white/5 shadow-sm rounded-none bg-white/5 backdrop-blur-md overflow-hidden opacity-40">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center mb-6">
                          <span className="px-2 py-1 bg-accent/10 border border-accent/20 text-[10px] font-bold text-accent uppercase tracking-widest rounded-sm">{insight.category}</span>
                          <span className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">{insight.date}</span>
                        </div>
                        <CardTitle className="text-xl font-serif text-white">
                          <span className="leading-tight">{insight.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{insight.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 border-white/10 text-white/40" />
            <CarouselNext className="absolute -right-12 border-white/10 text-white/40" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
