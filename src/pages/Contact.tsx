import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Map from "@/components/Map";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll be in touch soon!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              GET IN TOUCH
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Whether you're starting a new project or seeking design consultation, 
              we'd love to hear from you. Let's create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-8">CONTACT INFORMATION</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-luxury-gold mt-1" strokeWidth={1} />
                    <div>
                      <h3 className="text-sm tracking-widest mb-2">ADDRESS</h3>
                      <p className="text-text-secondary">
                        Unit 12A Parkside Place<br />
                        Cnr Paarden Eiland & East Pier Road<br />
                        Paarden Eiland<br />
                        Cape Town, 7405<br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-luxury-gold mt-1" strokeWidth={1} />
                    <div>
                      <h3 className="text-sm tracking-widest mb-2">PHONE</h3>
                      <p className="text-text-secondary">T. +27 (0) 466 5297</p>
                      <p className="text-text-secondary">F. +27 (0) 466 5298</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-luxury-gold mt-1" strokeWidth={1} />
                    <div>
                      <h3 className="text-sm tracking-widest mb-2">EMAIL</h3>
                      <p className="text-text-secondary">INFO@ARRCC.COM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-sm tracking-widest mb-4">OFFICE HOURS</h3>
                <p className="text-text-secondary">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-light mb-8">SEND US A MESSAGE</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm tracking-widest mb-2 block">NAME *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>

                <div>
                  <label className="text-sm tracking-widest mb-2 block">EMAIL *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>

                <div>
                  <label className="text-sm tracking-widest mb-2 block">PHONE</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-secondary border-border"
                  />
                </div>

                <div>
                  <label className="text-sm tracking-widest mb-2 block">MESSAGE *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary border-border min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-luxury-gold text-background hover:bg-luxury-gold/90"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="border-t border-border pt-16">
            <h2 className="text-2xl font-light mb-8">FIND US</h2>
            <Map />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
