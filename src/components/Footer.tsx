import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Get in Touch */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">GET IN TOUCH</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>E. info@rninteriorbd.com</p>
              <p>T. 01950265606</p>
              <p>T. 01819222457</p>
              <p>T. 01619222458</p>
            </div>
            <div className="mt-6 space-y-1 text-sm text-text-secondary">
              <p>Holding 1/A, Block - A,</p>
              <p>Main Road, Banasree,</p>
              <p>Rampura, Dhaka 1219</p>
              <p>BANGLADESH</p>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">QUICK PAGES</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <a href="/" className="block hover:text-luxury-gold transition-colors">HOME</a>
              <a href="/portfolio" className="block hover:text-luxury-gold transition-colors">PORTFOLIO</a>
              <a href="/services" className="block hover:text-luxury-gold transition-colors">SERVICES</a>
              <a href="/about" className="block hover:text-luxury-gold transition-colors">ABOUT</a>
              <a href="/contact" className="block hover:text-luxury-gold transition-colors">CONTACT</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">CONNECT</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">FACEBOOK</p>
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">INSTAGRAM</p>
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">YOUTUBE</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-text-secondary gap-4 md:gap-8">
          <p className="text-center md:text-left">Copyright 2025 © RN INTERIOR</p>
          <p className="text-center">
            Built with ❤️ By{" "}
            <a 
              href="https://coursefiction.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-luxury-gold hover:underline transition-all"
            >
              Coursefiction
            </a>
          </p>
          <div className="flex gap-6 text-center md:text-right">
            <a href="#" className="hover:text-luxury-gold transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">TERMS</a>
            <a href="#" className="hover:text-luxury-gold transition-colors">SITEMAP</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
