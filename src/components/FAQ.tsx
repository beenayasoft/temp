import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is JBUJB?",
    answer: "JBUJB is a local marketplace app that connects you with the best restaurants, cafés, supermarkets, pharmacies, hammams, and local merchants in your neighborhood. Order with ease and discover local businesses."
  },
  {
    question: "How does JBUJB work?",
    answer: "Simply download the app, enter your location, browse local merchants, place your order, and track your delivery in real-time. It's that easy!"
  },
  {
    question: "How do I register as a delivery partner?",
    answer: "Click on 'Become a Delivery Partner' on our website or app, fill out the registration form, and our team will contact you with next steps."
  },
  {
    question: "What payment methods are available?",
    answer: "We accept cash on delivery, credit/debit cards, and mobile payment methods for your convenience."
  },
  {
    question: "How can small businesses benefit from JBUJB?",
    answer: "JBUJB helps local businesses reach more customers, manage orders efficiently, and grow their revenue through our easy-to-use merchant platform."
  },
  {
    question: "How do I join as a merchant partner?",
    answer: "Click on 'Become a Partner', complete the registration process, and our team will help you set up your profile and start receiving orders."
  },
  {
    question: "Are there additional fees?",
    answer: "Delivery fees vary by location and order size. Service fees are transparently displayed before you complete your order."
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through the app's help center, email us at support@jbujb.com, or call our customer service hotline."
  },
  {
    question: "How does JBUJB protect my personal data?",
    answer: "We use industry-standard encryption and security measures to protect your personal information. Your data is never shared without your consent."
  },
  {
    question: "How do I download the app and create an account?",
    answer: "Download JBUJB from the App Store or Google Play, open the app, and follow the simple registration process to create your account in minutes."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Have a question? We're here to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-2xl px-6 bg-white hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Have another question?
          </h3>
          <Button
            size="lg"
            className="text-lg px-10 py-6 h-auto bg-[#FF5722] text-white hover:bg-[#E64A19] rounded-full transition-all shadow-lg"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
