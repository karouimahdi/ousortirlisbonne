"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "@/translations/provider/localeProvider";
import { motion, AnimatePresence } from "motion/react";

const FAQ = () => {
  const { translations } = useTranslation();
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Conserver les variantes d'animation existantes
  const cardVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    },
    tap: { scale: 0.98 },
  };

  const answerVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="mt-4 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-5xl font-bold text-[#2a2765] text-center mb-16 bg-clip-text"
        >
          {translations["faqTitle"]}
        </motion.h2>

        {/* Remplacer le grid par une div simple */}
        <div className="space-y-6 w-full max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="group w-full bg-gradient-to-r from-[#2a2765] to-[#37b7ab] p-0.5 rounded-2xl hover:shadow-2xl"
            >
              <div className="bg-[#2a2765] rounded-2xl overflow-hidden">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left text-white hover:text-[#37b7ab] focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <motion.span
                    className="text-xl font-semibold"
                    animate={{
                      color: openIndex === index ? "#37b7ab" : "#ffffff",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {faq.question}
                  </motion.span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-[#37b7ab]"
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={answerVariants}
                      className="px-6 pb-6 text-white/80 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
