
import React from "react";

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
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer px-6 py-4 hover:bg-gray-50">
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="px-6 py-4 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
