import whiteLogo from "@assets/Navexaa_logo_design_Transparent_White_1766580087033.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-8">
          <div className="text-left">
            <img src={whiteLogo} alt="Navexaa" className="h-6 mb-4" />
            <p className="text-gray-400 text-sm max-w-xs">
              Collaborate. Execute. Move forward with confidence.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
             <div className="space-y-2">
               <h4 className="font-bold text-xs uppercase tracking-widest text-accent">Services</h4>
               <ul className="space-y-2 text-sm text-gray-400">
                 <li><a href="#services" className="hover:text-white transition-colors">Management Consulting</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Core Finance Services</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors">Fractional CFO</a></li>
               </ul>
             </div>
             
             <div className="space-y-2">
               <h4 className="font-bold text-xs uppercase tracking-widest text-accent">Company</h4>
               <ul className="space-y-2 text-sm text-gray-400">
                 <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                 <li><a href="#approach" className="hover:text-white transition-colors">Our Approach</a></li>
                 <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
               </ul>
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
