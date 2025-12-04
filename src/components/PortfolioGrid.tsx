import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import ProjectSkeleton from "./ProjectSkeleton";
import ProjectGalleryDialog from "./ProjectGalleryDialog";

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

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("is_featured", true)
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
    <section className="py-12 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-border">
        {isLoading ? (
          <ProjectSkeleton count={8} variant="home" />
        ) : projects?.length === 0 ? (
          <div className="col-span-2 py-20 text-center text-text-secondary">
            No featured projects yet.
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs text-text-secondary mb-2 tracking-widest">
                  {project.location || ""}
                </p>
                <h3 className="text-xl font-light tracking-wide">
                  {project.title}
                </h3>
                {project.images.length > 1 && (
                  <p className="text-xs text-luxury-gold mt-2">
                    Click to view gallery ({project.images.length} images)
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>

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
    </section>
  );
};

export default PortfolioGrid;
