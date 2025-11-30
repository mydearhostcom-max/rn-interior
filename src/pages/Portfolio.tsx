import Header from "@/components/Header";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";

const projects = [
  { id: 1, title: "HERMANUS RESIDENCE", location: "Hermanus, South Africa", category: "RESIDENTIAL", image: project1, description: "Contemporary coastal living" },
  { id: 2, title: "AMAN RESIDENCES", location: "Marrakech, Morocco", category: "HOSPITALITY", image: project2, description: "Luxury resort design" },
  { id: 3, title: "CLIFTON SUNSET", location: "Clifton, Cape Town", category: "RESIDENTIAL", image: project3, description: "Modern urban elegance" },
  { id: 4, title: "HOTEL IVAN", location: "Miami Beach, USA", category: "HOSPITALITY", image: project4, description: "Grand lobby experience" },
  { id: 5, title: "CLIFTON VILLA", location: "Clifton, Cape Town", category: "RESIDENTIAL", image: project3, description: "Beachfront luxury" },
  { id: 6, title: "BEACHFRONT VILLA", location: "Plettenberg Bay", category: "RESIDENTIAL", image: project5, description: "Ocean view retreat" },
  { id: 7, title: "MODERN VILLA", location: "Hermanus, South Africa", category: "RESIDENTIAL", image: project6, description: "Sophisticated sanctuary" },
  { id: 8, title: "WATERFRONT", location: "Cape Town, South Africa", category: "LEISURE", image: project7, description: "Penthouse living" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              OUR PORTFOLIO
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              A curated selection of our most distinguished residential, hospitality, 
              and leisure projects from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer bg-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <span className="text-xs text-luxury-gold tracking-widest">
                    {project.category}
                  </span>
                  <div>
                    <p className="text-xs text-text-secondary mb-2 tracking-widest">
                      {project.location}
                    </p>
                    <h3 className="text-xl font-light tracking-wide mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
