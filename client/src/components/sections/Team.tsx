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
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Led by Industry Professionals</h3>
          <p className="text-gray-400 text-lg">
            Our team brings together institutional-grade rigor from Big-4 and top-tier advisory backgrounds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-white/10 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300 rounded-sm overflow-hidden group bg-white/5 backdrop-blur-sm">
                <div className="aspect-square overflow-hidden bg-white/10">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-serif text-white">{member.name}</CardTitle>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <a href={member.linkedin} className="text-gray-400 hover:text-accent transition-colors">
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
