import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";

const projects = [
  { id: 1, title: "HERMANUS RESIDENCE", location: "Hermanus, South Africa", image: project1 },
  { id: 2, title: "AMAN RESIDENCES, MARRAKECH", location: "Marrakech, Morocco", image: project2 },
  { id: 3, title: "CLIFTON SUNSET", location: "Clifton, Cape Town", image: project3 },
  { id: 4, title: "HOTEL IVAN", location: "Miami Beach, USA", image: project4 },
  { id: 5, title: "CLIFTON VILLA", location: "Clifton, Cape Town", image: project3 },
  { id: 6, title: "BEACHFRONT VILLA", location: "Plettenberg Bay", image: project5 },
  { id: 7, title: "MODERN VILLA", location: "Hermanus, South Africa", image: project6 },
  { id: 8, title: "WATERFRONT", location: "Cape Town, South Africa", image: project7 },
];

const PortfolioGrid = () => {
  return (
    <section className="py-12 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
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
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs text-text-secondary mb-2 tracking-widest">
                {project.location}
              </p>
              <h3 className="text-xl font-light tracking-wide">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
