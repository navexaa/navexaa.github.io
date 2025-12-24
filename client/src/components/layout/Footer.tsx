import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import whiteLogo from "@assets/Navexaa_logo_design_Transparent_White_1766580087033.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Section - Logo and Company Info */}
          <div className="text-left">
            <img src={whiteLogo} alt="Navexaa" className="h-10 mb-6" />
            <p className="text-gray-400 text-sm max-w-xs mb-8">
              Collaborate. Execute. Move forward with confidence.
            </p>
            
            {/* Address */}
            <div className="mb-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-accent mb-2">Address</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                310-311, 3rd Floor, Tower A, Nextra The Address,<br />
                Mayur Vihar Extension, New Delhi - 110091
              </p>
            </div>

            {/* Social Handles */}
            <div className="mb-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-accent mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/company/navexaa-advisors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://instagram.com/navexaa_advisors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors"
                  title="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="text-left md:text-right">
            {/* Phone */}
            <div className="mb-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-accent mb-3">Phone</h4>
              <div className="space-y-2">
                <a 
                  href="tel:+919650900443" 
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 md:justify-end"
                >
                  <Phone size={16} />
                  +91-9650900443
                </a>
                <a 
                  href="tel:+919910311681" 
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 md:justify-end"
                >
                  <Phone size={16} />
                  +91-9910311681
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <h4 className="font-bold text-xs uppercase tracking-widest text-accent mb-3">Email</h4>
              <a 
                href="mailto:info@navexaa.com" 
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 md:justify-end"
              >
                <Mail size={16} />
                info@navexaa.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Navexaa Advisors LLP. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
