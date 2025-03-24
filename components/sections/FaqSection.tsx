"use client";
import React, { useState } from "react";
import { useI18n } from "@/locales/client";
import { useParams } from "next/navigation";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const FaqSection: React.FC = () => {
  const t = useI18n();
  const params = useParams();
  const isRTL = params.locale === "ar";

  const [faqs, setFaqs] = useState<FaqItem[]>([
    {
      id: 1,
      question: t("faq.questions.howItWorks.question"),
      answer: t("faq.questions.howItWorks.answer"),
      isOpen: false,
    },
    {
      id: 2,
      question: t("faq.questions.download.question"),
      answer: t("faq.questions.download.answer"),
      isOpen: true,
    },
    {
      id: 3,
      question: t("faq.questions.rewards.question"),
      answer: t("faq.questions.rewards.answer"),
      isOpen: false,
    },
    {
      id: 4,
      question: t("faq.questions.invite.question"),
      answer: t("faq.questions.invite.answer"),
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
    <div
      className="w-full bg-gray-900 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-xl sm:max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
          {t("faq.got")}{" "}
          <span className="text-emerald-400">{t("faq.questions.title")}</span>
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {displayedFaqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-lg overflow-hidden transition-all duration-300 border border-gray-700"
            >
              <button
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center bg-gray-800 hover:bg-gray-700 text-white text-left"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={faq.isOpen}
              >
                <span className="font-medium text-sm sm:text-base">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 transform transition-transform duration-300 flex-shrink-0 ${
                    isRTL ? "mr-2" : "ml-2"
                  } ${faq.isOpen ? "rotate-180" : ""}`}
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
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800 text-gray-300 text-sm sm:text-base">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center bg-emerald-400 hover:bg-emerald-500 text-white font-medium rounded-full px-5 sm:px-8 py-2 sm:py-2.5 text-sm sm:text-base min-w-[120px] sm:min-w-[140px] transition-colors duration-200"
          >
            <span>{showAll ? t("faq.viewLess") : t("faq.viewMore")}</span>
            <svg
              className={`w-3 h-3 sm:w-4 sm:h-4 ${
                isRTL ? "mr-2" : "ml-2"
              } transform transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
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
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
