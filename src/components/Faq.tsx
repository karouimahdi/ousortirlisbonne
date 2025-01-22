"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from "@/translations/provider/localeProvider"; // Import the translation hook

const FAQ = () => {
  const { translations } = useTranslation(); // Use the translation hook
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: translations["faqBookingConditionsQuestion"],
      answer: (
        <div>
          <p>{translations["faqBookingConditionsAnswer1"]}</p>
          <p>
            {translations["faqBookingConditionsAnswer2"]}
            <br />
            {translations["faqBookingConditionsAnswer3"]}
          </p>
          <p>
            {translations["faqBookingConditionsAnswer4"]}
            <br />
            {translations["faqBookingConditionsAnswer5"]}
            <br />
            {translations["faqBookingConditionsAnswer6"]}
          </p>
          <p>{translations["faqBookingConditionsAnswer7"]}</p>
        </div>
      ),
    },
    {
      question: translations["faqCancellationQuestion"],
      answer: <p>{translations["faqCancellationAnswer"]}</p>,
    },
    {
      question: translations["faqBadWeatherQuestion"],
      answer: <p>{translations["faqBadWeatherAnswer"]}</p>,
    },
    {
      question: translations["faqSafetyMeasuresQuestion"],
      answer: (
        <div>
          <p>{translations["faqSafetyMeasuresAnswer1"]}</p>
          <p>{translations["faqSafetyMeasuresAnswer2"]}</p>
        </div>
      ),
    },
    {
      question: translations["faqRatesQuestion"],
      answer: (
        <div>
          <p>
            {translations["faqRatesAnswer1"]}
            <br />
            {translations["faqRatesAnswer2"]}
            <br />
            {translations["faqRatesAnswer3"]}
            <br />
            {translations["faqRatesAnswer4"]}
            <br />
            {translations["faqRatesAnswer5"]}
            <br />
            {translations["faqRatesAnswer6"]}
            <br />
            {translations["faqRatesAnswer7"]}
          </p>
        </div>
      ),
    },
    {
      question: translations["faqProhibitedItemsQuestion"],
      answer: (
        <div>
          <p>
            {translations["faqProhibitedItemsAnswer1"]}
            <br />
            {translations["faqProhibitedItemsAnswer2"]}
            <br />
            {translations["faqProhibitedItemsAnswer3"]}
            <br />
            {translations["faqProhibitedItemsAnswer4"]}
          </p>
        </div>
      ),
    },
    {
      question: translations["faqDrinksMealsQuestion"],
      answer: (
        <div>
          <p>{translations["faqDrinksMealsAnswer1"]}</p>
          <p>{translations["faqDrinksMealsAnswer2"]}</p>
          <p>{translations["faqDrinksMealsAnswer3"]}</p>
        </div>
      ),
    },
    {
      question: translations["faqCheckInQuestion"],
      answer: <p>{translations["faqCheckInAnswer"]}</p>,
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-4 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-[#2a2765] text-center mb-16 bg-clip-text">
          {translations["faqTitle"]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-[#2a2765] to-[#37b7ab] p-0.5 rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-[#2a2765] rounded-2xl overflow-hidden h-full">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-8 text-left text-white hover:text-[#37b7ab] focus:outline-none transition-all duration-300"
                >
                  <span className="text-2xl font-semibold">{faq.question}</span>
                  <span className="text-[#37b7ab] transform transition-transform duration-300">
                    {activeIndex === index ? (
                      <ChevronUp className="w-8 h-8" />
                    ) : (
                      <ChevronDown className="w-8 h-8" />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-8 pb-8 text-white/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;