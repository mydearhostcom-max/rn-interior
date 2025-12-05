import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About" 
        description="Learn about RN Interior & Farjana Thai Aluminium - your trusted partner for interior design, Thai aluminium fabrication, and glass solutions in Bangladesh since years of excellence."
      />
      <Header />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light mb-12 text-center">
              ABOUT US
            </h1>
            
            <div className="space-y-12">
              <p className="text-2xl font-light leading-relaxed text-center">
                RN Interior & Farjana Thai Aluminium is your trusted partner for complete interior and exterior 
                transformation. We specialize in designing functional, modern, and aesthetically balanced spaces 
                that match your lifestyle and business needs across Bangladesh.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                <div className="space-y-4">
                  <Award className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                  <h3 className="text-2xl font-light">OUR EXPERTISE</h3>
                  <p className="text-text-secondary leading-relaxed">
                    From residential interiors to full-scale commercial environments, we bring creativity, 
                    precision, and long-term durability to every project. Our expertise in Thai aluminium 
                    fabrication and glass solutions ensures high-quality installations that stand the test of time.
                  </p>
                </div>

                <div className="space-y-4">
                  <Users className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                  <h3 className="text-2xl font-light">OUR TEAM</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Our skilled team includes experienced designers, fabricators, and installers who work 
                    seamlessly together. We prioritize clear communication, technical excellence, and customer 
                    satisfaction from initial consultation through final handover.
                  </p>
                </div>

                <div className="space-y-4">
                  <Globe className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                  <h3 className="text-2xl font-light">COMPREHENSIVE SOLUTIONS</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Whether it's a home, office, showroom, restaurant, or multipurpose hall, we deliver 
                    complete solutions including aluminium windows, curtain walls, spider glass systems, 
                    ACP panels, automatic doors, and full interior design services.
                  </p>
                </div>

                <div className="space-y-4">
                  <TrendingUp className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                  <h3 className="text-2xl font-light">QUALITY COMMITMENT</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We focus on reliability, craftsmanship, and timely delivery. Using premium materials 
                    and proven techniques, we build spaces that not only look great but function smoothly 
                    and last for years without compromise.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-16 mt-16">
                <h2 className="text-3xl font-light mb-8 text-center">OUR VALUES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-light mb-3 text-luxury-gold">RELIABILITY</h3>
                    <p className="text-sm text-text-secondary">
                      Timely delivery and dependable service you can trust
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-light mb-3 text-luxury-gold">CRAFTSMANSHIP</h3>
                    <p className="text-sm text-text-secondary">
                      Expert fabrication and flawless installation every time
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-light mb-3 text-luxury-gold">DURABILITY</h3>
                    <p className="text-sm text-text-secondary">
                      Premium materials and quality that lasts for years
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-12 rounded-none mt-16">
                <p className="text-2xl font-light text-center leading-relaxed">
                  "We believe great spaces are built on precision, quality materials, 
                  and a commitment to exceed expectations—creating environments that 
                  truly work for those who use them."
                </p>
                <p className="text-center text-text-secondary mt-6 tracking-wider text-sm">
                  — RN INTERIOR & FARJANA THAI ALUMINIUM
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
