
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this service legal?",
      answer:
        "Yes, XCollaber operates fully within international and local regulations. We act as a verified business intermediary that helps connect creators from unsupported countries to global payment systems, ensuring compliance with all financial laws."
    },
    {
      question: "Can I trust XCollaber with my content and payments?",
      answer:
        "We prioritize trust and security. All our operations are transparent, and we implement strict security measures to protect your content and financial information. We use established payment processors and have clear contractual agreements to protect your interests."
    },
    {
      question: "What are the fees?",
      answer:
        "Our fee structure is straightforward: we charge between 10-20% of the transaction value, depending on the payment method and destination country. This covers currency conversion, processing fees, and our service. There are no additional hidden charges."
    },
    {
      question: "Which countries do you support?",
      answer:
        "Currently, we support creators and freelancers from India, Nepal, Pakistan, Bangladesh, Sri Lanka, and several other countries where major payment platforms are restricted. We're continuously expanding our coverage."
    },
    {
      question: "How quickly will I receive my money?",
      answer:
        "Once payments clear on our end (typically 1-2 days), we initiate transfers to your local bank account or mobile wallet. Most users receive their money within 2-3 business days, which is significantly faster than traditional international transfers."
    },
    {
      question: "Which payment platforms can you help me access?",
      answer:
        "We can help you receive payments from Stripe, PayPal, Wise, Gumroad, Patreon, Ko-fi, Whop, and many other global platforms that might be restricted in your country."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Have questions about our service? Find quick answers to common queries below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-gray-200 rounded-lg bg-white overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
