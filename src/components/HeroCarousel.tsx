import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from "@/translations/provider/localeProvider";

const HeroCarousel = ({ 
  autoplayInterval = 5000
}) => {
  const { translations } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: "/ImageCar2.jpeg",
      title: translations["heroSlide1Title"],
      subtitle: translations["heroSlide1Subtitle"],
      description: translations["heroSlide1Description"]
    },
    {
      image: "/ImageCarousel1.jpeg",
      title: translations["heroSlide2Title"],
      subtitle: translations["heroSlide2Subtitle"],
      description: translations["heroSlide2Description"]
    },
    {
      image: "/Tokyo.jpeg",
      title: translations["heroSlide3Title"],
      subtitle: translations["heroSlide3Subtitle"],
      description: translations["heroSlide3Description"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [currentSlide, autoplayInterval]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 750);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 750);
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full mt-16 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className={`object-cover transition-transform duration-1000 ${
                currentSlide === index ? 'scale-110' : 'scale-100'
              }`}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a2765]/90 via-[#2a2765]/70 to-[#2a2765]/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 
              className={`text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight transform transition-all duration-1000 ${
                currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {slide.title}
              <br />
              <span className="text-[#37b7ab] relative">
                {slide.subtitle}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#37b7ab]/30 transform -skew-x-12" />
              </span>
            </h1>
            <p 
              className={`text-xl md:text-2xl text-center mb-12 max-w-2xl text-gray-200 transform transition-all duration-1000 delay-300 ${
                currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label={translations["previousSlide"]}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        aria-label={translations["nextSlide"]}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`${translations["goToSlide"]} ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;