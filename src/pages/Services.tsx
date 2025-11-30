import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Building2, Palmtree, Layers, Lightbulb, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "RESIDENTIAL DESIGN",
    description: "From penthouse apartments to sprawling estates, we create bespoke living spaces that reflect your lifestyle and aspirations. Our approach combines timeless elegance with contemporary comfort."
  },
  {
    icon: Building2,
    title: "HOSPITALITY DESIGN",
    description: "We craft immersive hotel and resort experiences that captivate guests and create lasting impressions. Our designs balance luxury, functionality, and brand identity."
  },
  {
    icon: Palmtree,
    title: "LEISURE SPACES",
    description: "Transform your leisure environments into destinations. From spa retreats to private clubs, we design spaces that elevate relaxation and entertainment."
  },
  {
    icon: Layers,
    title: "COMPLETE DESIGN PACKAGES",
    description: "Comprehensive interior design services from concept to completion. We handle architecture, interior design, furniture specification, and art curation."
  },
  {
    icon: Lightbulb,
    title: "DESIGN CONSULTATION",
    description: "Expert guidance for your design projects. Our consultation services provide professional insights on spatial planning, style direction, and material selection."
  },
  {
    icon: Paintbrush,
    title: "FURNITURE & DECOR",
    description: "Curated furniture and decor selection that perfectly complements your space. We source unique pieces from around the world and create custom designs."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              OUR SERVICES
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              We offer comprehensive interior design and decor services for residential, 
              hospitality, and leisure projects worldwide. Each project is approached with 
              a unique perspective, refined sensibility, and meticulous attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {services.map((service) => (
              <div key={service.title} className="space-y-4">
                <service.icon className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                <h3 className="text-2xl font-light tracking-wide">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-light mb-6">OUR PROCESS</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light mb-2 text-luxury-gold">01 / DISCOVERY</h3>
                  <p className="text-text-secondary">
                    We begin by understanding your vision, lifestyle, and aspirations. 
                    This phase includes site analysis, client consultations, and research.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-luxury-gold">02 / CONCEPT DEVELOPMENT</h3>
                  <p className="text-text-secondary">
                    Our team develops conceptual designs, mood boards, and spatial plans 
                    that capture the essence of your project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-luxury-gold">03 / DESIGN REFINEMENT</h3>
                  <p className="text-text-secondary">
                    We refine every detail, from materials and finishes to furniture 
                    selection and lighting design, ensuring perfect harmony.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 text-luxury-gold">04 / IMPLEMENTATION</h3>
                  <p className="text-text-secondary">
                    Our project management team oversees the entire implementation, 
                    coordinating with contractors and artisans to bring the vision to life.
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
