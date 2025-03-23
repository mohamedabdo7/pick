"use client";
import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const FaqSection: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      id: 1,
      question: "How does Pick work?",
      answer:
        "Pick is a platform that allows you to watch, record, and earn rewards by engaging with content. Simply download the app, create an account, and start browsing content or creating your own to earn rewards.",
      isOpen: false,
    },
    {
      id: 2,
      question: "How do I download the Pick app?",
      answer:
        "You can download the Pick app from the App Store for iOS devices or from Google Play Store for Android devices. Simply search for 'Pick' and look for our logo, then tap 'Download' or 'Install'.",
      isOpen: true,
    },
    {
      id: 3,
      question: "What kind of rewards can I get?",
      answer:
        "Pick offers various rewards including cashback, discount coupons, exclusive access to premium content, and special promotions with our partners. The more you engage with the platform, the more rewards you can earn.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Can I invite my friends?",
      answer:
        "Yes! Pick has a referral program that allows you to invite friends. When they join using your referral code, both you and your friend receive special bonuses and rewards.",
      isOpen: false,
    },
  ]);

  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleFaq = (id: number) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq))
    );
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <div className="w-full bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Got <span className="text-emerald-400">Questions?</span>
        </h2>

        <div className="space-y-4">
          {displayedFaqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-800 hover:bg-gray-700 text-white text-left"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={faq.isOpen}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-emerald-400 transform transition-transform duration-300 ${
                    faq.isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {faq.isOpen && (
                <div className="px-6 py-4 bg-gray-800 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center bg-emerald-400 hover:bg-emerald-500 text-white font-medium rounded-full px-8 py-2.5 min-w-[140px]"
          >
            <span>View More</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
