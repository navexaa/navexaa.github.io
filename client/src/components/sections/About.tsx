import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">Why Navexaa</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
              Bridging the gap between <span className="text-accent">Strategy</span> and <span className="text-accent">Execution</span>.
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Navexaa Advisors LLP was founded to help businesses unlock value and build strong financial foundations for sustainable growth. We work closely with founders, CXOs, and investors to deliver actionable insights and measurable outcomes.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              With a background in Big-4 consulting and senior finance roles, we bring institutional-grade rigor with the agility required for high-growth companies.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-3xl font-serif font-bold text-accent mb-2">10+</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif font-bold text-accent mb-2">100%</h4>
                <p className="text-sm text-gray-400">Client Commitment</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
             <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent/50 transition-colors">
               <h4 className="text-xl font-serif font-bold mb-3">Outcome Focused</h4>
               <p className="text-gray-400 text-sm">We focus on tangible results, not just theoretical advice. Our success is measured by your growth.</p>
             </div>
             
             <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent/50 transition-colors">
               <h4 className="text-xl font-serif font-bold mb-3">Deep Expertise</h4>
               <p className="text-gray-400 text-sm">Leveraging deep financial and operational expertise to solve complex business challenges.</p>
             </div>

             <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent/50 transition-colors">
               <h4 className="text-xl font-serif font-bold mb-3">Partnership Approach</h4>
               <p className="text-gray-400 text-sm">We work as an extension of your team, providing the support and guidance needed to scale.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
