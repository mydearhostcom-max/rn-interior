import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light mb-12 text-center">
              ABOUT ARRCC
            </h1>
            
            <div className="space-y-12">
              <p className="text-2xl font-light leading-relaxed text-center">
                ARRCC is an acclaimed interior design and decor studio based in Cape Town, 
                South Africa. Our footprint is global, as we apply our distinctly refined 
                design sensibility to residential, hospitality and leisure interiors around the world.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                <div className="space-y-4">
                  <Award className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                  <h3 className="text-2xl font-light">OUR PHILOSOPHY</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We believe in creating spaces that are not just beautiful, but deeply personal 
                    and reflective of those who inhabit them. Our design philosophy centers on 
                    timeless elegance, meticulous craftsmanship, and a laid-back luxury that 
                    defines contemporary coastal living.
                  </p>
                </div>

                <div className="space-y-4">
                  <Users className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                  <h3 className="text-2xl font-light">OUR TEAM</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Led by visionary designers and supported by talented architects, project 
                    managers, and craftspeople, our team brings decades of combined experience 
                    to every project. We collaborate closely with clients, artisans, and 
                    contractors to ensure exceptional results.
                  </p>
                </div>

                <div className="space-y-4">
                  <Globe className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                  <h3 className="text-2xl font-light">GLOBAL REACH</h3>
                  <p className="text-text-secondary leading-relaxed">
                    While rooted in Cape Town, our projects span continents. From Moroccan 
                    riads to Miami penthouses, we bring our distinctive South African 
                    design perspective to create spaces that resonate with their context 
                    while maintaining our signature aesthetic.
                  </p>
                </div>

                <div className="space-y-4">
                  <TrendingUp className="w-12 h-12 text-luxury-gold" strokeWidth={1} />
                  <h3 className="text-2xl font-light">RECOGNITION</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Our work has been featured in leading design publications worldwide 
                    and recognized with numerous industry awards. We're proud to have 
                    contributed to some of the most prestigious residential and hospitality 
                    projects internationally.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-16 mt-16">
                <h2 className="text-3xl font-light mb-8 text-center">OUR VALUES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-xl font-light mb-3 text-luxury-gold">EXCELLENCE</h3>
                    <p className="text-sm text-text-secondary">
                      Uncompromising commitment to quality in every detail
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-light mb-3 text-luxury-gold">INNOVATION</h3>
                    <p className="text-sm text-text-secondary">
                      Pushing boundaries while respecting timeless principles
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-light mb-3 text-luxury-gold">COLLABORATION</h3>
                    <p className="text-sm text-text-secondary">
                      Building lasting relationships with clients and partners
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-12 rounded-none mt-16">
                <p className="text-2xl font-light text-center leading-relaxed">
                  "Design is not just about aesthetics—it's about creating environments 
                  that enhance how we live, work, and connect with each other."
                </p>
                <p className="text-center text-text-secondary mt-6 tracking-wider text-sm">
                  — ARRCC DESIGN STUDIO
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
