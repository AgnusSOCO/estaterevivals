import React from 'react';
import { MinusCircle, PlusCircle } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including property management, real estate consulting, and investment advisory. Our team of experts is dedicated to providing tailored solutions for all your real estate needs."
  },
  {
    question: "How can I get started?",
    answer: "Getting started is easy! Simply reach out through our contact form or give us a call. Our team will schedule a consultation to understand your needs and guide you through the process."
  },
  {
    question: "What areas do you serve?",
    answer: "We currently serve major metropolitan areas and surrounding regions. Contact us to check if we operate in your area."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <MinusCircle className="h-5 w-5 text-gray-500" />
                ) : (
                  <PlusCircle className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;