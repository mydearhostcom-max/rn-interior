import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
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
              Whether you're planning a residential interior, commercial space, or need expert 
              aluminium and glass solutions, we're here to help. Let's discuss your project and 
              bring your vision to life with precision and quality.
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
                        Holding 1/A, Block - A<br />
                        Main Road, Banasree<br />
                        Rampura, Dhaka 1219<br />
                        Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-luxury-gold mt-1" strokeWidth={1} />
                    <div>
                      <h3 className="text-sm tracking-widest mb-2">PHONE</h3>
                      <p className="text-text-secondary">01950265606</p>
                      <p className="text-text-secondary">01819222457</p>
                      <p className="text-text-secondary">01619222458</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-luxury-gold mt-1" strokeWidth={1} />
                    <div>
                      <h3 className="text-sm tracking-widest mb-2">EMAIL</h3>
                      <p className="text-text-secondary">info@rninteriorbd.com</p>
                    </div>
                  </div>
                </div>
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
            <div className="w-full h-[450px] rounded-sm overflow-hidden border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3651.4536923896544!2d90.42252727533642!3d23.766853278659145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ2JzAwLjciTiA5MMKwMjUnMzAuNCJF!5e0!3m2!1sen!2sbd!4v1764582249125!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
