import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-sm tracking-widest mb-4">SIGN UP FOR OUR NEWSLETTER</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="E-MAIL"
                className="bg-secondary border-border"
              />
              <Button variant="secondary" className="tracking-wider">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">GET IN TOUCH</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>E. INFO@ARRCC.COM</p>
              <p>T. +27 (0) 466 5297</p>
              <p>F. +27 (0) 466 5298</p>
            </div>
            <div className="mt-6 space-y-1 text-sm text-text-secondary">
              <p>Unit 12A Parkside Place,</p>
              <p>Cnr Paarden Eiland & East</p>
              <p>Pier Road, Paarden Eiland,</p>
              <p>CAPE TOWN,</p>
              <p>SOUTH AFRICA</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">CONNECT</h3>
            <div className="space-y-2 text-sm text-text-secondary">
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">FACEBOOK</p>
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">INSTAGRAM</p>
              <p className="hover:text-luxury-gold cursor-pointer transition-colors">E-NEWSLETTER</p>
            </div>
            <div className="mt-8">
              <h3 className="text-sm tracking-widest mb-4">CAREERS</h3>
              <p className="text-sm text-text-secondary hover:text-luxury-gold cursor-pointer transition-colors">
                View all open positions
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-text-secondary">
          <p>© ARRCC 2025 | All rights reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
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
