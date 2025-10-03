import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogArticle {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
}

const mockArticles: BlogArticle[] = [
  {
    id: 1,
    title: "Discover Hidden Gems: Top Local Restaurants",
    description: "Explore authentic dining experiences in your neighborhood. From traditional cuisines to modern fusion, find restaurants that locals love.",
    category: "Food & Dining",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Ultimate Guide to Shopping Local Merchants",
    description: "Support local businesses while finding unique products. Learn how shopping local strengthens your community and economy.",
    category: "Shopping",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Wellness & Relaxation: Hammam Experience",
    description: "Traditional hammam treatments offer rejuvenation and cultural immersion. Discover the benefits of this ancient wellness practice.",
    category: "Wellness",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3757657/pexels-photo-3757657.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Insights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tips, guides, and stories to help you discover and support local merchants in your community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockArticles.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.description}
                </p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-semibold text-foreground hover:text-primary hover:bg-transparent"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
