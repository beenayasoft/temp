const features = [
  {
    title: "Restaurants",
    description: "Discover the best restaurants in your neighborhood and order your favorite meals.",
    details: "500+ locations",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    title: "Cafés & Snacks",
    description: "Find cozy cafés and quick snack spots for your daily cravings.",
    details: "300+ locations",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    featured: true
  },
  {
    title: "Supermarkets",
    description: "Get groceries delivered from local supermarkets with just a few taps.",
    details: "150+ locations",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    title: "Pharmacies",
    description: "Order medicines and health products from nearby pharmacies.",
    details: "200+ locations",
    image: "https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    title: "Hammams & Spas",
    description: "Book appointments at local hammams and wellness centers.",
    details: "80+ locations",
    image: "https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    title: "Local Merchants",
    description: "Support local businesses and discover unique shops in your area.",
    details: "1000+ locations",
    image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Discover Your Neighborhood
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            JBUJB brings the best of your neighborhood right to your fingertips.
            From dining to wellness, shopping to services, explore local merchants that make your community unique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${
                feature.featured
                  ? 'bg-primary shadow-xl'
                  : 'bg-card shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-32 h-32 rounded-full overflow-hidden ${feature.featured ? 'ring-4 ring-primary-foreground/30' : 'ring-4 ring-primary/10'}`}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className={`text-2xl font-bold mb-3 ${feature.featured ? 'text-primary-foreground' : 'text-card-foreground'}`}>
                  {feature.title}
                </h3>

                <p className={`text-sm mb-4 ${feature.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {feature.description}
                </p>

                <p className={`text-xs font-semibold ${feature.featured ? 'text-primary-foreground/70' : 'text-primary'}`}>
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
