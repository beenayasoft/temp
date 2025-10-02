import { Store, Pill, Coffee, UtensilsCrossed, ShoppingBag, Sparkles, ShoppingCart, Heart } from "lucide-react";

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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            JBUJB brings the best of your neighborhood right to your fingertips
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.Icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center bg-primary/10 rounded-xl">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
