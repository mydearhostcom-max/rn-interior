import heroImage from "@/assets/hero-interior.jpg";
const Hero = () => {
  return <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      </div>
      
      <div className="relative h-full flex items-end justify-start">
        <div className="container mx-auto px-6 pb-16">
          <p className="text-sm text-text-secondary mb-2 tracking-wider">RNINTERIORBD.COM</p>
        </div>
      </div>
    </section>;
};
export default Hero;