import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-accent/30 rounded-full mb-4 bg-accent/5"
          >
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">About Us</span>
          </motion.div>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Enablers of Transformation
          </h3>
          <p className="text-accent text-lg md:text-xl font-medium italic">
            Expanding perspective, grounded in priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Navexaa is founded to help businesses unlock value and build strong financial foundations for sustainable growth. We partner closely with founders, CXOs, and investors to deliver clear, actionable insights and measurable outcomes.
              </p>
              <p>
                Our work is shaped by a unique combination of deep, hands-on industry experience and modern advisory practices. We draw on decades of leadership and operational exposure across established businesses, alongside contemporary consulting and financial advisory experience gained at leading global firms.
              </p>
              <p>
                We start with a clear understanding of client objectives, design solutions aligned to business context, and support execution across finance, operations, and technology. The result is advice that is practical, relevant, and designed to stand the test of time.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h4 className="text-3xl font-serif font-bold text-accent mb-2">75+</h4>
                <p className="text-sm text-gray-400">Combined Years of Experience</p>
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
             <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent/50 transition-colors group">
               <h4 className="text-xl font-serif font-bold mb-3 text-accent group-hover:text-accent transition-colors">Outcome Focused</h4>
               <p className="text-gray-400 text-sm">We focus on tangible results, not just theoretical advice. Our success is measured by your growth.</p>
             </div>
             
             <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent/50 transition-colors group">
               <h4 className="text-xl font-serif font-bold mb-3 text-accent group-hover:text-accent transition-colors">Deep Expertise</h4>
               <p className="text-gray-400 text-sm">Leveraging deep financial and operational expertise to solve complex business challenges.</p>
             </div>

             <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-accent/50 transition-colors group">
               <h4 className="text-xl font-serif font-bold mb-3 text-accent group-hover:text-accent transition-colors">Partnership Approach</h4>
               <p className="text-gray-400 text-sm">We work as an extension of your team, providing the support and guidance needed to scale.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
