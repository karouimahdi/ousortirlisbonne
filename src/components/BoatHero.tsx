import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/translations/provider/localeProvider";

interface BoatHeroSliderProps {}

const BoatHeroSlider: React.FC<BoatHeroSliderProps> = () => {
  const { translations } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      image: "/Bateau-lisbonne-min.jpg",
      title: translations["boatSlide1Title"],
      subtitle: translations["boatSlide1Subtitle"],
      description: translations["boatSlide1Description"],
    },
    {
      image: "/Evora-Mail-2.jpg",
      title: translations["boatSlide2Title"],
      subtitle: translations["boatSlide2Subtitle"],
      description: translations["boatSlide2Description"],
    },
    {
      image: "/Portinho-de-Arrabida.jpeg",
      title: translations["boatSlide3Title"],
      subtitle: translations["boatSlide3Subtitle"],
      description: translations["boatSlide3Description"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 1 },
    }),
    center: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#2a2765] bg-opacity-70"></div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white space-y-8 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#37b7ab] text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {slides[currentSlide].subtitle}
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-white/70 text-center max-w-2xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {slides[currentSlide].description}
        </motion.p>
        <motion.p
          className="text-xl text-[#ea3e4e]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {translations["makeLifeEvent"]}
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <Button
            className="hover:bg-[#37b7ab] bg-[#ea3e4e] rounded-full text-xl py-6 px-8 font-bold shadow-md"
            onClick={() => {
              document
                .getElementById("boats")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {translations["discoverBoats"]}
          </Button>
        </motion.div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[#37b7ab]"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={handlePrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full transition-all duration-300"
        aria-label={translations["previousSlide"]}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full transition-all duration-300"
        aria-label={translations["nextSlide"]}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BoatHeroSlider;