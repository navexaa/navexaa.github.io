import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Founder Name",
    role: "Managing Partner",
    bio: "Ex-Big 4 professional with over 15 years of experience in management consulting and financial advisory. Specializes in growth strategy and finance transformation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "#"
  },
  {
    name: "Partner Name",
    role: "Senior Partner",
    bio: "Strategic finance leader with a background in private equity and investment banking. Expert in business valuation and fundraising support.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "#"
  },
  {
    name: "Advisor Name",
    role: "Consultant",
    bio: "Operations expert focusing on process optimization and PMO support. Helps businesses build efficient financial foundations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "#"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid with perspective */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
               backgroundSize: '80px 80px',
               maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
             }} />
        
        {/* Floating geometric shapes */}
        <motion.div 
          animate={{ 
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute -top-20 -left-20 w-80 h-80 border border-white/5 rounded-full" 
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            transition: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] border border-accent/10 rounded-[40%] opacity-20" 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-accent/30 rounded-full mb-4 bg-accent/5"
          >
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Our Team</span>
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Led by Industry Professionals</h3>
          <p className="text-gray-400 text-lg">
            Our team brings together institutional-grade rigor from Big-4 and top-tier advisory backgrounds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border border-white/10 shadow-sm hover:shadow-2xl hover:border-accent/40 transition-all duration-500 rounded-sm overflow-hidden group bg-[#0c1a32]/50 backdrop-blur-xl relative">
                {/* Individual card accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="aspect-square overflow-hidden bg-white/10 relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2 relative z-20">
                  <CardTitle className="text-xl font-serif text-white group-hover:text-accent transition-colors duration-300">{member.name}</CardTitle>
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest mt-1">{member.role}</p>
                </CardHeader>
                <CardContent className="relative z-20">
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-4">{member.bio}</p>
                  <a href={member.linkedin} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300">
                    <Linkedin size={18} />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
