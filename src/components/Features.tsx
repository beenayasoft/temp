import discoverIcon from "@/assets/icon-discover.png";
import orderIcon from "@/assets/icon-order.png";
import merchantsIcon from "@/assets/icon-merchants.png";

const features = [
  {
    icon: discoverIcon,
    title: "Discover",
    description: "Find restaurants, cafés, snacks, hammams, and more around you with our smart location-based discovery.",
  },
  {
    icon: orderIcon,
    title: "Order",
    description: "Place orders directly from the app with just a few taps. Fast, easy, and convenient.",
  },
  {
    icon: merchantsIcon,
    title: "Local Merchants",
    description: "Support local businesses and discover hidden gems in your neighborhood.",
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
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center">
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
