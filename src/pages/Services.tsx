import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Home, Building2 } from "lucide-react";

const interiorServices = [
  "Residential Interior",
  "Kitchen Cabinet",
  "Commercial Interior",
  "Showroom Interior",
  "Office Interior",
  "Multipurpose Hall",
  "Studio / Theatre",
  "Restaurant Interior"
];

const exteriorServices = [
  "Aluminium Window Work",
  "Curtain Wall / Glass Work",
  "Spider Glass Work",
  "Aluminium Composite Panel",
  "Glass Door / Sensor Door",
  "Auto / Manual Folding Door",
  "CNC Cutting Work"
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services" 
        description="Comprehensive interior and exterior services including residential design, commercial interiors, Thai aluminium fabrication, curtain walls, glass systems, and ACP panels in Bangladesh."
      />
      <Header />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              OUR SERVICES
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              We offer comprehensive interior and exterior solutions including residential and commercial design, 
              Thai aluminium fabrication, glass systems, and architectural installations. Every project is executed 
              with precision, quality materials, and expert craftsmanship to ensure lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Interior Services */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Home className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                <h2 className="text-3xl font-light tracking-wide">INTERIOR</h2>
              </div>
              <ul className="space-y-4">
                {interiorServices.map((service) => (
                  <li key={service} className="text-lg text-text-secondary border-l-2 border-luxury-gold pl-4 py-2">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exterior Services */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Building2 className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                <h2 className="text-3xl font-light tracking-wide">EXTERIOR</h2>
              </div>
              <ul className="space-y-4">
                {exteriorServices.map((service) => (
                  <li key={service} className="text-lg text-text-secondary border-l-2 border-luxury-gold pl-4 py-2">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-light mb-6">OUR PROCESS</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light mb-2 text-luxury-gold">01 / CONSULTATION</h3>
                  <p className="text-text-secondary">
                    We start by understanding your needs, space requirements, and budget. 
                    Our team conducts a thorough site visit to assess dimensions and technical feasibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-luxury-gold">02 / DESIGN & PLANNING</h3>
                  <p className="text-text-secondary">
                    We create detailed design plans, material selections, and 3D visualizations 
                    to help you envision the final result before work begins.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-luxury-gold">03 / FABRICATION & INSTALLATION</h3>
                  <p className="text-text-secondary">
                    Our skilled fabricators and installers work with precision using quality materials. 
                    We ensure all aluminium, glass, and interior elements are perfectly fitted.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-luxury-gold">04 / QUALITY CHECK & HANDOVER</h3>
                  <p className="text-text-secondary">
                    Before completion, we conduct rigorous quality checks and final touches. 
                    Your project is delivered on time with a commitment to durability and finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
