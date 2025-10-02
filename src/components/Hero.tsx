import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-app.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Discover. Order. Enjoy.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Find the best restaurants, cafés, snacks, hammams, and local merchants around you. Order with ease and explore your neighborhood like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-foreground text-foreground hover:bg-secondary transition-all">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="JBUJB app showcasing local discoveries"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
