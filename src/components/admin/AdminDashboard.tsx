import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, Star, Mail, MailOpen } from "lucide-react";

const AdminDashboard = () => {
  const { data: projectStats } = useQuery({
    queryKey: ["admin-project-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("id, is_featured");
      if (error) throw error;
      return {
        total: data?.length || 0,
        featured: data?.filter((p) => p.is_featured).length || 0,
      };
    },
  });

  const { data: contactStats } = useQuery({
    queryKey: ["admin-contact-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select("id, is_read");
      if (error) throw error;
      return {
        total: data?.length || 0,
        unread: data?.filter((c) => !c.is_read).length || 0,
      };
    },
  });

  const stats = [
    {
      title: "Total Projects",
      value: projectStats?.total || 0,
      icon: FolderOpen,
      color: "text-blue-500",
    },
    {
      title: "Featured Projects",
      value: projectStats?.featured || 0,
      icon: Star,
      color: "text-luxury-gold",
    },
    {
      title: "Total Contacts",
      value: contactStats?.total || 0,
      icon: Mail,
      color: "text-green-500",
    },
    {
      title: "Unread Messages",
      value: contactStats?.unread || 0,
      icon: MailOpen,
      color: "text-red-500",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-light mb-8">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-text-secondary">
                {stat.title}
              </CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
