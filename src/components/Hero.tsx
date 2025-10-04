import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#F5F3EE]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8F5A8] rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="flex items-center justify-center gap-3 animate-fade-in">
            <div className="flex -space-x-3">
              <Avatar className="w-12 h-12 border-3 border-white">
                <AvatarImage src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="w-12 h-12 border-3 border-white">
                <AvatarImage src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="w-12 h-12 border-3 border-white">
                <AvatarImage src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
            <div className="bg-white rounded-full px-4 py-2 shadow-sm">
              <p className="text-sm font-medium text-gray-700">
                Loved by 2.4M users with a 4.8 rating
              </p>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              From <span className="relative inline-block">
                <span className="relative z-10">local merchants</span>
                <span className="absolute inset-0 bg-[#D4F477] -skew-y-1 rounded-lg"></span>
              </span> to daily{" "}
              <br className="hidden md:block" />
              essentials, shop smarter!
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            Discover the best restaurants, cafés, supermarkets, pharmacies, hammams, and local shops in your neighborhood.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button
              size="lg"
              className="text-lg px-10 py-6 h-auto bg-[#2C5446] text-white hover:bg-[#234437] rounded-full transition-all shadow-lg"
            >
              Get the app
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 h-auto bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 rounded-full transition-all"
            >
              Discover app
            </Button>
          </div>

          <div className="relative mt-16 animate-fade-in max-w-4xl mx-auto" style={{ animationDelay: '800ms' }}>
            <div className="absolute -left-32 top-1/4 bg-white rounded-3xl p-6 shadow-xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-[#D4F477] rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🛍️</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">Subscription Services</h3>
              <p className="text-sm text-gray-600">
                Automatically receive necessities of your most-used items, saving you time and hassle.
              </p>
            </div>

            <div className="absolute -right-32 top-1/4 bg-white rounded-3xl p-6 shadow-xl max-w-xs hidden lg:block">
              <p className="text-sm text-gray-600 mb-2">Receipt</p>
              <h3 className="font-bold text-xl mb-1">Italian Carbonara</h3>
              <p className="text-sm text-gray-500 mb-4">5 products · 30 min</p>
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                <div className="w-10 h-10 rounded-lg bg-gray-200"></div>
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-sm font-semibold">
                  +4
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Shopping experience"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🔍</span>
                <span className="text-gray-600">Ingredients for carbonara</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
