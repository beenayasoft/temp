const categories = [
  {
    title: "Fresh and Health Restaurants",
    calories: "500+ merchants",
    servings: "Fast delivery",
    price: "From 30 DH",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    title: "Cafés & Snacks",
    calories: "300+ merchants",
    servings: "Quick orders",
    price: "From 15 DH",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    featured: true
  },
  {
    title: "Supermarkets",
    calories: "150+ stores",
    servings: "Same day delivery",
    price: "From 50 DH",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    title: "Pharmacies",
    calories: "200+ pharmacies",
    servings: "Express delivery",
    price: "From 20 DH",
    image: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-[#F5F3EE] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Your Neighborhood,<br />One App Away
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From dining to wellness, shopping to services, explore and order from local merchants with ease and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${
                category.featured
                  ? 'bg-[#F5A623] shadow-xl'
                  : 'bg-white shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-32 h-32 rounded-full overflow-hidden ${
                  category.featured
                    ? 'ring-4 ring-white/30'
                    : 'ring-4 ring-gray-100'
                }`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className={`text-xl font-bold mb-4 ${
                  category.featured ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>

                <div className={`flex items-center justify-center gap-2 text-sm mb-2 ${
                  category.featured ? 'text-white/90' : 'text-gray-600'
                }`}>
                  <span>{category.calories}</span>
                  <span>•</span>
                  <span>{category.servings}</span>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <span className={`text-2xl font-bold ${
                    category.featured ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.price}
                  </span>
                  <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    category.featured
                      ? 'bg-white text-[#F5A623] hover:scale-110'
                      : 'bg-[#F5A623] text-white hover:scale-110'
                  }`}>
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
