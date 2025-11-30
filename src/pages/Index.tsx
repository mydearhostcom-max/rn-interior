import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainHeadline from "@/components/MainHeadline";
import PortfolioGrid from "@/components/PortfolioGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
