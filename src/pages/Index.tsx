import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainHeadline from "@/components/MainHeadline";
import PortfolioGrid from "@/components/PortfolioGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Home" 
        description="Your trusted partner for complete interior and exterior transformation in Bangladesh. Specializing in residential, commercial interiors, Thai aluminium fabrication, glass solutions, and architectural exterior work."
      />
      <Header />
      <Hero />
      <MainHeadline />
      <PortfolioGrid />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
