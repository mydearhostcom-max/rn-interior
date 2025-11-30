import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            MENU
          </button>
        </div>
        
        <h1 className="text-2xl font-light tracking-[0.2em]">
          ARRCC
        </h1>
        
        <div className="flex items-center gap-6">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            EN / US
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            CONTACT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
