import React, { useState } from 'react';

const FAQSection = () => {
  // State to manage which FAQ is open, default to the index 1 for "Is there an AI credit system?"
  const [openFAQ, setOpenFAQ] = useState(1);

  // Function to toggle FAQ open state
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-[#FBF9F8] py-10 md:py-12" id="faq">
      <div className="max-w-[calc(90%)] mx-auto px-4 sm:px-6 lg:px-2">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl font-medium text-[#161513]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-[#161513] opacity-70">
            Everything you need to know about using Happy People AI's suite of products.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            {[
              { question: "Is it free?", answer: "The AI Credit System allows you to access premium AI features, such as content generation, profile analysis, and mock interviews. Each time you use an AI-powered tool, credits are deducted from your account. You can earn free credits by completing certain actions, such as creating a profile or referring friends, or you can purchase additional credits through our pricing plans." },
              {
                question: "Is there an AI credit system?",
                answer: "The AI Credit System allows you to access premium AI features, such as content generation, profile analysis, and mock interviews. Each time you use an AI-powered tool, credits are deducted from your account. You can earn free credits by completing certain actions, such as creating a profile or referring friends, or you can purchase additional credits through our pricing plans.",
              },
              { question: "How does it work?", answer: "The free trial period provides full access to all premium features of the RiseON Suite, including AI content generation, cover letter creation, and career analytics, for a limited time. This allows you to explore all the benefits of our premium tools without any commitment. At the end of the trial, you can choose to continue with a subscription or switch to the free plan." },
              { question: "Is there a free trial period?", answer: "The free trial period provides full access to all premium features of the RiseON Suite, including AI content generation, cover letter creation, and career analytics, for a limited time. This allows you to explore all the benefits of our premium tools without any commitment. At the end of the trial, you can choose to continue with a subscription or switch to the free plan." },
            ].map((faq, index) => (
              <div
                key={index}
                className="border bg-white border-gray-200 rounded-md mb-4 overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 font-medium flex justify-between items-center"
                >
                  <span
                    className={
                      openFAQ === index ? 'text-[#3498DB]' : 'text-[#3F3F3F]'
                    }
                  >
                    {faq.question}
                  </span>
                  <span>
                    {openFAQ === index ? (
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.9375 9L8.9375 2L1.9375 9"
                          stroke="#3498DB"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.9375 1L8.9375 8L15.9375 1"
                          stroke="#2C3E50"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="p-4 bg-white text-[#161513]">
                    {faq.answer ||
                      'Our Interactive resume website features diverse, easy-to-read content and intuitive design for seamless exploration.'}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {[
              { question: "How does it work?", answer: "" },
              { question: "Is there a free trial period?", answer: "The free trial period provides full access to all premium features of the RiseON Suite, including AI content generation, cover letter creation, and career analytics, for a limited time. This allows you to explore all the benefits of our premium tools without any commitment. At the end of the trial, you can choose to continue with a subscription or switch to the free plan." },
              { question: "How does it work?", answer: "" },
              { question: "Is there a free trial period?", answer: "" },
            ].map((faq, index) => (
              <div
                key={index + 4}
                className="border bg-white border-gray-200 rounded-md mb-4 overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index + 4)}
                  className="w-full text-left p-4 font-medium flex justify-between items-center"
                >
                  <span
                    className={
                      openFAQ === index + 4 ? 'text-[#3498DB]' : 'text-[#161513]'
                    }
                  >
                    {faq.question}
                  </span>
                  <span>
                    {openFAQ === index + 4 ? (
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.9375 9L8.9375 2L1.9375 9"
                          stroke="#3498DB"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.9375 1L8.9375 8L15.9375 1"
                          stroke="#2C3E50"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {openFAQ === index + 4 && (
                  <div className="p-4 bg-white text-[#161513]">
                    {faq.answer ||
                      'Our Interactive resume website features diverse, easy-to-read content and intuitive design for seamless exploration.'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
