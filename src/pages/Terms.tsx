import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Terms of Service" 
        description="Read the terms of service for RN Interior & Farjana Thai Aluminium. Understand our policies, project agreements, and legal terms for interior design and aluminium services."
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                RN Interior & Farjana Thai Aluminium provides interior and exterior design services, Thai aluminium fabrication, and glass solutions. All services are subject to availability and may vary based on project requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of RN Interior and is protected by copyright laws. You may not reproduce, distribute, or transmit any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">4. Project Agreements</h2>
              <p className="text-muted-foreground leading-relaxed">
                Individual project terms, pricing, and timelines will be specified in separate project agreements. These terms supplement but do not replace individual project contracts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                RN Interior shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">6. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of the website constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif mb-4">7. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these terms, please contact us through our contact page or reach out directly to our team.
              </p>
            </section>
          </div>

          <p className="text-sm text-muted-foreground mt-12">
            Last updated: December 2024
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
