
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-company-darkGray leading-tight mb-6 animate-fade-in">
            Transform Your Business With Our 
            <span className="text-company-red"> Expert Services</span>
          </h1>
          <p className="text-lg md:text-xl text-company-gray mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We help ambitious businesses like yours generate more revenue through effective strategies and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button className="bg-company-red hover:bg-company-red/90 text-lg px-8 py-6">
              Get Started
            </Button>
            <Button variant="outline" className="border-company-red text-company-red hover:bg-company-red hover:text-white text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
