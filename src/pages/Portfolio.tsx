import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import ProjectGalleryDialog from "@/components/ProjectGalleryDialog";

type Project = {
  id: string;
  title: string;
  location: string | null;
  description: string | null;
  category: string;
  subcategories: string[];
  images: string[];
  is_featured: boolean;
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", "all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data as Project[];
    },
  });

  const handleProjectClick = (project: Project) => {
    if (project.images.length > 1) {
      setSelectedProject(project);
    }
  };

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
              A curated selection of our most distinguished residential, commercial, 
              interior, and exterior projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border">
            {isLoading ? (
              <ProjectSkeleton count={9} variant="portfolio" />
            ) : projects?.length === 0 ? (
              <div className="col-span-3 py-20 text-center text-text-secondary">
                No projects available yet.
              </div>
            ) : (
              projects?.map((project) => (
                <div
                  key={project.id}
                  className={`relative aspect-[4/3] overflow-hidden group bg-card ${
                    project.images.length > 1 ? "cursor-pointer" : ""
                  }`}
                  onClick={() => handleProjectClick(project)}
                >
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <span className="text-text-secondary">No image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <span className="text-xs text-luxury-gold tracking-widest uppercase">
                      {project.category}
                    </span>
                    <div>
                      <p className="text-xs text-text-secondary mb-2 tracking-widest">
                        {project.location || ""}
                      </p>
                      <h3 className="text-xl font-light tracking-wide mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {project.description || ""}
                      </p>
                      {project.images.length > 1 && (
                        <p className="text-xs text-luxury-gold mt-2">
                          Click to view gallery ({project.images.length} images)
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />

      {selectedProject && (
        <ProjectGalleryDialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
          images={selectedProject.images}
          title={selectedProject.title}
          location={selectedProject.location || undefined}
          description={selectedProject.description || undefined}
        />
      )}
    </div>
  );
};

export default Portfolio;
