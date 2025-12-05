import { ArrowRight } from "lucide-react";
const MainHeadline = () => {
  return <section className="py-24 container mx-auto px-6">
      <div className="max-w-4xl">
        <h2 className="text-5xl font-light leading-tight mb-8 md:text-5xl">SPACES THAT BLEND
FUNCTION & ELEGANCE
BLEND
FUNCTION &
ELEGANCE<br />
          BLEND<br />
          FUNCTION &<br />
          ELEGANCE
        </h2>
        <a href="/about" className="flex items-center gap-2 text-sm tracking-wider text-muted-foreground hover:text-luxury-gold transition-colors group">
          More about us
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>;
};
export default MainHeadline;