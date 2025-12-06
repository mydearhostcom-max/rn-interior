import { Link } from "react-router-dom";

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
              <Link to="/" className="block hover:text-luxury-gold transition-colors">HOME</Link>
              <Link to="/portfolio" className="block hover:text-luxury-gold transition-colors">PORTFOLIO</Link>
              <Link to="/services" className="block hover:text-luxury-gold transition-colors">SERVICES</Link>
              <Link to="/about" className="block hover:text-luxury-gold transition-colors">ABOUT</Link>
              <Link to="/contact" className="block hover:text-luxury-gold transition-colors">CONTACT</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">CONNECT</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <a href="https://www.facebook.com/rninteriorbd" target="_blank" rel="noopener noreferrer" className="block hover:text-luxury-gold transition-colors">FACEBOOK</a>
              <a href="https://www.instagram.com/rninterior.bd/" target="_blank" rel="noopener noreferrer" className="block hover:text-luxury-gold transition-colors">INSTAGRAM</a>
              <a href="https://www.youtube.com/channel/UCqXg4UEHsFQ7rLsxjLFzrCQ" target="_blank" rel="noopener noreferrer" className="block hover:text-luxury-gold transition-colors">YOUTUBE</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-text-secondary gap-4 md:gap-8">
          <p className="text-center md:text-left">Copyright 2025 © RN INTERIOR</p>
          <p className="text-center">
            Built with ❤️ By{" "}
            <a href="https://coursefiction.com" target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline transition-all">
              Coursefiction
            </a>
          </p>
          <div className="flex gap-6 text-center md:text-right">
            <Link to="/privacy" className="hover:text-luxury-gold transition-colors">PRIVACY</Link>
            <Link to="/terms" className="hover:text-luxury-gold transition-colors">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
