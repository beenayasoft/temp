import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Floating badges */}
          <div className="absolute -top-10 left-10 bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-foreground animate-fade-in hidden lg:block">
            Pizza Bella
          </div>
          <div className="absolute top-20 right-10 bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-foreground animate-fade-in hidden lg:block">
            Café Moderne
          </div>
          
          {/* Main headline with highlighted words */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="inline-block px-4 py-2 border-4 border-primary/30 rounded-xl">Discover</span>{" "}
              <span className="text-foreground">Local</span>
              <br />
              <span className="text-foreground">Flavors</span>{" "}
              <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-xl">Nearby</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the best restaurants, cafés, snacks, hammams, and local merchants around you — order with ease and explore your neighborhood like never before.
          </p>
          
          {/* Location Search */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Input 
                type="text" 
                placeholder="Enter your city or neighborhood..." 
                className="h-14 pl-6 pr-4 text-lg rounded-full border-2 border-border focus-visible:border-primary w-full"
              />
            </div>
            <Button size="lg" className="text-lg px-10 py-4 h-14 bg-foreground text-background hover:bg-foreground/90 rounded-full transition-all shadow-lg whitespace-nowrap">
              Explore →
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 pt-8 animate-fade-in">
            <div className="flex -space-x-2">
              <Avatar className="w-10 h-10 border-2 border-background">
                <AvatarFallback className="bg-primary text-primary-foreground">JS</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-background">
                <AvatarFallback className="bg-accent text-accent-foreground">MK</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-background">
                <AvatarFallback className="bg-secondary text-secondary-foreground">AL</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-background">
                <AvatarFallback className="bg-muted text-muted-foreground">RH</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              10.2k Users joined this month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
