import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Code, User, Image, Video, Save, Loader2 } from "lucide-react";
import { toast } from "sonner";

const AdminSystem = () => {
  const queryClient = useQueryClient();
  const [mediaType, setMediaType] = useState<string>("image");
  const [mediaUrl, setMediaUrl] = useState<string>("");

  const systemInfo = {
    appName: "RN Interior & Farjana Thai Aluminium",
    version: "2.0.1",
    developer: "Coursefiction",
    website: "https://rninteriorbd.com",
    buildDate: new Date().toLocaleDateString(),
    environment: "Production",
  };

  const { data: settings, isLoading } = useQuery({
    queryKey: ["hero-settings-admin"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("key, value")
        .in("key", ["hero_media_type", "hero_media_url"]);

      if (error) throw error;

      const settingsMap: Record<string, string> = {};
      data?.forEach((item) => {
        settingsMap[item.key] = item.value || "";
      });
      return settingsMap;
    },
  });

  useEffect(() => {
    if (settings) {
      setMediaType(settings.hero_media_type || "image");
      setMediaUrl(settings.hero_media_url || "");
    }
  }, [settings]);

  const updateSettingsMutation = useMutation({
    mutationFn: async () => {
      const updates = [
        { key: "hero_media_type", value: mediaType },
        { key: "hero_media_url", value: mediaUrl },
      ];

      for (const update of updates) {
        const { error } = await supabase
          .from("site_settings")
          .update({ value: update.value })
          .eq("key", update.key);

        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hero-settings"] });
      queryClient.invalidateQueries({ queryKey: ["hero-settings-admin"] });
      toast.success("Hero settings saved successfully");
    },
    onError: (error) => {
      toast.error("Failed to save settings: " + error.message);
    },
  });

  const handleSave = () => {
    updateSettingsMutation.mutate();
  };

  return (
    <div>
      <h2 className="text-3xl font-light mb-8">System Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hero Media Settings */}
        <Card className="bg-card border-border md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              {mediaType === "video" ? (
                <Video className="w-5 h-5 text-luxury-gold" />
              ) : (
                <Image className="w-5 h-5 text-luxury-gold" />
              )}
              Hero Media Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Media Type</Label>
              <RadioGroup
                value={mediaType}
                onValueChange={setMediaType}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="image" id="image" />
                  <Label htmlFor="image" className="cursor-pointer flex items-center gap-2">
                    <Image className="w-4 h-4" />
                    Image
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="video" id="video" />
                  <Label htmlFor="video" className="cursor-pointer flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    Video
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mediaUrl">
                {mediaType === "video" ? "Video URL" : "Image URL"}
              </Label>
              <Input
                id="mediaUrl"
                placeholder={
                  mediaType === "video"
                    ? "https://example.com/video.mp4"
                    : "https://example.com/image.jpg"
                }
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                {mediaType === "video"
                  ? "Enter a direct link to an MP4 video file. Leave empty to use default image."
                  : "Enter a direct link to an image. Leave empty to use default image."}
              </p>
            </div>

            <Button
              onClick={handleSave}
              disabled={updateSettingsMutation.isPending || isLoading}
              className="gap-2"
            >
              {updateSettingsMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Code className="w-5 h-5 text-luxury-gold" />
              Application Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">App Name</span>
              <span className="font-medium">{systemInfo.appName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Version</span>
              <Badge variant="secondary">{systemInfo.version}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Environment</span>
              <Badge
                variant={
                  systemInfo.environment === "production" ? "default" : "outline"
                }
              >
                {systemInfo.environment}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <User className="w-5 h-5 text-luxury-gold" />
              Developer Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Developed By</span>
              <span className="font-medium">{systemInfo.developer}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Build Date</span>
              <span className="font-medium">{systemInfo.buildDate}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSystem;
