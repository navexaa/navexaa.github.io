import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import namanImg from '@assets/generated_images/professional_portrait_of_naman_agrawal.png';

const teamMembers = [
  {
    name: "Naman Agrawal",
    role: "Partner",
    degree: "CA, CFA",
    bio: "Ex-Big 4 professional with over 7 years of diverse work experience in consulting and financial advisory. Led multiple engagements in areas like fundraising, finance transformation, finance due diligence, cost optimization, etc. for global clients in sectors like auto ancillary, consumer durables, hospitality, etc.",
    image: namanImg,
    linkedin: "#"
  },
  {
    name: "Prerit Goel",
    role: "Partner",
    degree: "CA",
    bio: "Expert in corporate finance and strategic planning with extensive experience in managing large-scale financial operations and advisory projects.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "#"
  },
  {
    name: "Coming Soon",
    role: "Leadership",
    degree: "",
    bio: "We are constantly expanding our leadership team with industry veterans and domain experts.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "#"
  },
  {
    name: "Coming Soon",
    role: "Leadership",
    degree: "",
    bio: "Join our mission to enable transformation and drive sustainable growth for businesses globaly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    linkedin: "#"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
               backgroundSize: '80px 80px',
               maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
             }} />
        
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border border-white/10 shadow-sm hover:shadow-2xl hover:border-accent/40 transition-all duration-500 rounded-sm overflow-hidden group bg-[#0c1a32]/50 backdrop-blur-xl relative flex flex-col">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="aspect-[4/5] overflow-hidden bg-white/10 relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2 relative z-20">
                  <CardTitle className="text-lg font-serif text-white group-hover:text-accent transition-colors duration-300">{member.name}</CardTitle>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <p className="text-accent text-[10px] font-semibold uppercase tracking-widest">{member.role}</p>
                    {member.degree && <p className="text-gray-400 text-[10px] font-medium">{member.degree}</p>}
                  </div>
                </CardHeader>
                <CardContent className="relative z-20 flex-grow">
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed line-clamp-[8]">{member.bio}</p>
                  <a href={member.linkedin} className="absolute bottom-6 left-6 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300">
                    <Linkedin size={14} />
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
