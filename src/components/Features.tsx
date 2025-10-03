import { Store, Pill, Coffee, UtensilsCrossed, ShoppingBag, Sparkles } from "lucide-react";

const features = [
  {
    Icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Discover the best restaurants in your neighborhood and order your favorite meals.",
  },
  {
    Icon: Coffee,
    title: "Cafés & Snacks",
    description: "Find cozy cafés and quick snack spots for your daily cravings.",
  },
  {
    Icon: Store,
    title: "Supermarkets",
    description: "Get groceries delivered from local supermarkets with just a few taps.",
  },
  {
    Icon: Pill,
    title: "Pharmacies",
    description: "Order medicines and health products from nearby pharmacies.",
  },
  {
    Icon: Sparkles,
    title: "Hammams & Spas",
    description: "Book appointments at local hammams and wellness centers.",
  },
  {
    Icon: ShoppingBag,
    title: "Local Merchants",
    description: "Support local businesses and discover unique shops in your area.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground to-foreground/95"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-lg font-semibold mb-3 tracking-wide uppercase">
            Discover Your Neighborhood
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
            JBUJB brings the best of your neighborhood <br className="hidden md:block" />
            right to your fingertips
          </h2>
          <p className="text-background/70 text-lg max-w-3xl mx-auto">
            From dining to wellness, shopping to services, explore local merchants that make your community unique
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/10 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-background/60 text-sm max-w-2xl mx-auto">
            Join thousands of users discovering and supporting local businesses in their community
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
