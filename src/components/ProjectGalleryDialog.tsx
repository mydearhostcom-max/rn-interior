import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ProjectGalleryDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  images: string[];
  title: string;
  location?: string;
  description?: string;
};

const ProjectGalleryDialog = ({
  open,
  onOpenChange,
  images,
  title,
  location,
  description,
}: ProjectGalleryDialogProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-sm border-border">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-background"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              {location && (
                <p className="text-xs text-text-secondary tracking-widest mb-1">
                  {location}
                </p>
              )}
              <h2 className="text-2xl font-light">{title}</h2>
            </div>
            {images.length > 1 && (
              <span className="text-sm text-text-secondary">
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>

          {description && (
            <p className="text-text-secondary">{description}</p>
          )}

          {images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
                    index === currentIndex
                      ? "border-luxury-gold"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGalleryDialog;
