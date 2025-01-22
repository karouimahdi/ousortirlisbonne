import React, { useState, useEffect, RefObject } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import Image from 'next/image';


interface BoatHeroSliderProps {
  heroRef: RefObject<HTMLDivElement>;
}

const slides=[
  {
    image: "/Bateau-lisbonne-min.jpg",
    title: "Croisière au départ de Lisbonne, Cascais et Setubal",
    subtitle: "Découvrez notre catalogue composé d’une cinquantaine d’offres",
    description: "Croisières de groupe et excursions privées sur mesure."
  },
  {
    image: "/Evora-Mail-2.jpg",
    title: "Location de bateau à Setubal – TROIA – Portinho da Arrábida",
    subtitle: "Au programme de votre croisière dans la Serra de Arrabida",
    description: "Paysage à couper le souffle, du bleu-vert à perte de vue, des eaux cristallines, baignade, plages désertes, détente, convivialité et 95% de chance de rencontrer des dauphins."
  },
  {
    image: "/Portinho-de-Arrabida.jpeg",
    title: "Louer un bateau à Cascais",
    subtitle: "Yacht, voilier, bateau de pêche..",
    description: "Cascais, connue sous le nom de la «ville de rois et de pêcheurs», est l’une des stations balnéaires les plus appréciées du littoral de Lisbonne. Partez au large de Cascais à bord de l’une de nos embarcations, pour une journée hors du commun."
  }
];

const BoatHeroSlider: React.FC<BoatHeroSliderProps> = ({ heroRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { duration: 1 }
    }),
    center: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut' }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.8, ease: 'easeInOut' }
    })
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
    <div className="relative h-[80vh] w-full overflow-hidden" ref={heroRef}>
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
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {slides[currentSlide].title}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-[#37b7ab]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {slides[currentSlide].subtitle}
        </motion.p>
        <motion.p
          className="text-base md:text-lg text-white/70"
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
          "Faites de votre vie un évènement!"
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <Button
            className="hover:bg-[#37b7ab] bg-[#ea3e4e] rounded-full text-xl py-6 px-8 font-bold shadow-md"
            onClick={() => {
              document.getElementById('boats')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Découvrir les Bateaux
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
              currentSlide === index ? 'bg-[#37b7ab]' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={handlePrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full transition-all duration-300"
        aria-label="Précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-4 rounded-full transition-all duration-300"
        aria-label="Suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default BoatHeroSlider;