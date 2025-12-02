import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/rn-logo.png";
const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    path: "/",
    label: "HOME"
  }, {
    path: "/portfolio",
    label: "PORTFOLIO"
  }, {
    path: "/services",
    label: "SERVICES"
  }, {
    path: "/about",
    label: "ABOUT"
  }, {
    path: "/contact",
    label: "CONTACT"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="hidden md:inline">MENU</span>
          </button>
        </div>
        
        <Link to="/" className="flex items-center">
          <img alt="RN Enterprise" src="/lovable-uploads/6696cb99-e513-4665-903a-0667860ee54c.png" className="h-12 w-auto transition-opacity opacity-100 object-cover border-0" />
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            CONTACT
          </Link>
        </div>
      </div>

      {/* Compact Menu Dropdown */}
      {isMenuOpen && <>
          {/* Backdrop */}
          <div className="fixed inset-0 top-[73px] bg-black/40 backdrop-blur-sm animate-fade-in" onClick={() => setIsMenuOpen(false)} />
          
          {/* Menu Box */}
          <div className="fixed top-[85px] left-6 bg-background/90 backdrop-blur-xl border border-border shadow-2xl animate-slide-in-right rounded-sm w-64 overflow-hidden">
            <nav className="py-4">
              <ul className="space-y-1">
                {navItems.map((item, index) => <li key={item.path} style={{
              animationDelay: `${index * 50}ms`
            }} className="animate-fade-in">
                    <Link to={item.path} onClick={() => setIsMenuOpen(false)} className={`block px-6 py-3 text-sm tracking-widest transition-all duration-300 relative overflow-hidden group ${location.pathname === item.path ? "text-luxury-gold bg-secondary" : "text-foreground hover:text-luxury-gold"}`}>
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </Link>
                  </li>)}
              </ul>
            </nav>
          </div>
        </>}
    </header>;
};
export default Header;