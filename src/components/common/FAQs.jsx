import { useState } from 'react';

const FAQs = () => {
  const faqsData = [
    {
      question: 'What are your opening hours?',
      answer: 'Mon-Fri: 11 AM - 10 PM, Sat-Sun: 10 AM - 11 PM',
    },
    {
      question: 'Do you offer delivery services?',
      answer: 'Yes, we deliver to locations within 10 miles.',
    },
    {
      question: 'Do you cater for events?',
      answer: 'Absolutely! Contact us for custom packages.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md"
          >
            {/* FAQ Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-lg font-semibold text-left text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {faq.question}
              <span className="ml-4">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>

            {/* FAQ Answer */}
            {activeIndex === index && (
              <div className="p-4 text-gray-600 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
