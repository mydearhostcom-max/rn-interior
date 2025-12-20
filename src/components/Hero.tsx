import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  const { data: settings } = useQuery({
    queryKey: ["hero-settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key, value")
        .in("key", ["hero_media_type", "hero_media_url"]);
      
      if (error) throw error;
      
      const settingsMap: Record<string, string> = {};
      data?.forEach(item => {
        settingsMap[item.key] = item.value || "";
      });
      return settingsMap;
    },
  });

  const mediaType = settings?.hero_media_type || "image";
  const mediaUrl = settings?.hero_media_url || "";
  const hasCustomMedia = mediaUrl && mediaUrl.length > 0;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {mediaType === "video" && hasCustomMedia ? (
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={mediaUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hasCustomMedia ? mediaUrl : heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
        </div>
      )}

      <div className="relative h-full flex items-end justify-start">
        <div className="container mx-auto px-6 pb-16">
          <p className="text-sm text-text-secondary mb-2 tracking-wider">
            RNINTERIORBD.COM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
