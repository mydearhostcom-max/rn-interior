import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, User, Globe, Calendar } from "lucide-react";
const AdminSystem = () => {
  const systemInfo = {
    appName: "RN Interior & Farjana Thai Aluminium",
    version: "2.0.1",
    developer: "Coursefiction",
    website: "https://rninteriorbd.com",
    buildDate: new Date().toLocaleDateString(),
    environment: "Production"
  };
  return <div>
      <h2 className="text-3xl font-light mb-8">System Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Badge variant={systemInfo.environment === "production" ? "default" : "outline"}>
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

        <Card className="bg-card border-border md:col-span-2">
          
          
        </Card>
      </div>
    </div>;
};
export default AdminSystem;