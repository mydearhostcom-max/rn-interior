import { Skeleton } from "@/components/ui/skeleton";

type ProjectSkeletonProps = {
  count?: number;
  variant?: "home" | "portfolio";
};

const ProjectSkeleton = ({ count = 8, variant = "home" }: ProjectSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="relative aspect-[4/3] overflow-hidden bg-card"
        >
          <Skeleton className="w-full h-full" />
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-6 w-48" />
            {variant === "portfolio" && <Skeleton className="h-4 w-32" />}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectSkeleton;
