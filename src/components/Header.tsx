import { Search, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/services", label: "SERVICES" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="hidden md:inline">MENU</span>
          </button>
        </div>
        
        <Link to="/">
          <h1 className="text-2xl font-light tracking-[0.2em] hover:text-luxury-gold transition-colors">
            ARRCC
          </h1>
        </Link>
        
        <div className="flex items-center gap-6">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block">
            EN / US
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link 
            to="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Mobile/Desktop Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-background/95 backdrop-blur-lg">
          <nav className="container mx-auto px-6 py-12">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-4xl md:text-6xl font-light tracking-wide hover:text-luxury-gold transition-colors block ${
                      location.pathname === item.path ? "text-luxury-gold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
