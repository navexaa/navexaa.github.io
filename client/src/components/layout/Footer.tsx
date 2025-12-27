import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import whiteLogo from "@assets/Navexaa_logo_design_Transparent_White_1766580087033.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Design Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-64 h-64 border border-white/5 rounded-full" />
        <div className="absolute top-12 right-12 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo */}
          <div className="flex flex-col items-start">
            <img 
              src={whiteLogo} 
              alt="Navexaa" 
              className="h-16 mb-6 grayscale brightness-0 invert-[.6] sepia-[.4] saturate-[4] hue-rotate-[5deg]"
              style={{ filter: 'brightness(0) saturate(100%) invert(73%) sepia(16%) saturate(1054%) hue-rotate(3deg) brightness(89%) contrast(85%)' }}
            />
          </div>

          {/* Column 2 - Follow Us */}
          <div>
            <h4 className="font-serif font-bold text-lg text-accent mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/navexaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors p-2 bg-white/5 rounded-full"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/grow_with_navexaa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors p-2 bg-white/5 rounded-full"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 3 - Contact Us */}
          <div>
            <h4 className="font-serif font-bold text-lg text-accent mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href="tel:+919650900443" 
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-3"
              >
                <Phone size={18} className="text-accent" />
                +91-96509000443 / +91-9910311681
              </a>
              <a 
                href="mailto:info@navexaa.com" 
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-3"
              >
                <Mail size={18} className="text-accent" />
                info@navexaa.com
              </a>
            </div>
          </div>

          {/* Column 4 - Address */}
          <div>
            <h4 className="font-serif font-bold text-lg text-accent mb-6">Address</h4>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0 mt-1" />
              <p className="text-gray-400 text-sm leading-relaxed">
                310-311, 3rd Floor, Tower A, Nextra The Address,<br />
                Mayur Vihar Extension, New Delhi - 110091
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Navexaa Advisors LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
