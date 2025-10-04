import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

const mockArticles: BlogArticle[] = [
  {
    id: 1,
    title: "Top 10 Hidden Gem Restaurants in Your Neighborhood",
    date: "3 October 2025",
    category: "News",
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "How to Support Local Businesses Through JBUJB",
    date: "2 October 2025",
    category: "Features",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Health & Wellness: Benefits of Traditional Hammam",
    date: "2 October 2025",
    category: "News",
    image: "https://images.pexels.com/photos/3757657/pexels-photo-3757657.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    title: "Quick Guide: Same-Day Grocery Delivery in Your Area",
    date: "1 October 2025",
    category: "News",
    image: "https://images.pexels.com/photos/6560266/pexels-photo-6560266.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    title: "Discover the Best Coffee Shops for Remote Work",
    date: "30 September 2025",
    category: "Features",
    image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Blog = () => {
  return (
    <section className="py-24 bg-[#F5F3EE]">
      <div className="container mx-auto px-4">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Latest Articles
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {mockArticles.map((article, index) => (
              <div
                key={article.id}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group animate-fade-in snap-start"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>🏠</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-[#F75F16] transition-colors duration-300">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <button className="w-3 h-3 rounded-full bg-[#F75F16]"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6 h-auto border-2 border-gray-200 text-gray-900 hover:bg-white rounded-full transition-all"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
