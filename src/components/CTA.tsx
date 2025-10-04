import { Button } from "@/components/ui/button";
import { Bike, Store } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-[#F5F3EE]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-[#FFE8D6] rounded-3xl flex items-center justify-center transform -rotate-3">
                <Bike className="w-12 h-12 text-[#FF5722]" strokeWidth={2} />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Become a Delivery Partner
            </h3>

            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              Generate your own income and choose flexible hours that work for you. Join our delivery network today.
            </p>

            <Button
              className="w-full text-lg py-6 h-auto bg-[#FF5722] text-white hover:bg-[#E64A19] rounded-full transition-all shadow-lg"
            >
              Start Now
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-[#FFE8D6] rounded-3xl flex items-center justify-center transform rotate-3">
                <Store className="w-12 h-12 text-[#FF5722]" strokeWidth={2} />
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Become a Partner
            </h3>

            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              Do you own a restaurant or shop? Join us and reach thousands of new customers in your area.
            </p>

            <Button
              className="w-full text-lg py-6 h-auto bg-[#FF5722] text-white hover:bg-[#E64A19] rounded-full transition-all shadow-lg"
            >
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
