"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialsSection } from "@/components/Testimential";
import CategorySection from "@/components/CategorySection";

const heroImages = [
  {
    src: "/73.webp",
    title: "Visite touristique avec guides",
    description:
      "Découvrez la ville accompagnés de nos guides portugais francophones",
  },
  {
    src: "/Sintra-Catarina-Ferreira-min.jpg",
    title: "Sintra Magique",
    description: "Explorez les merveilles architecturales de Sintra",
  },
  {
    src: "/place-du-commerce-min.jpg",
    title: "Saveurs Portugaises",
    description: "Dégustez les meilleurs vins et tapas locaux",
  },
];

const DecouvertePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const experiences = [
    {
      title: "Visite privée à pied",
      icon: "🚶‍♂️",
      color: "#FF4B6E",
      gradient: "from-[#FF4B6E] via-[#FF4B6E]/40 to-[#FF4B6E]/10",
      description: "Dégustation incluse",
      highlights: ["Guide francophone", "Personnalisable", "3h minimum"],
      route: "/decouvertes/visite-privee",
    },
    {
      title: "Tour en tuktuk",
      icon: "🛺",
      color: "#4A4FE4",
      gradient: "from-[#4A4FE4] via-[#4A4FE4]/40 to-[#4A4FE4]/10",
      description: "6 places disponibles",
      highlights: ["Visite complète", "Commentaires audio", "Photos incluses"],
      route: "/decouvertes/tuktuk-tour",
    },
    {
      title: "Virée en side-car",
      icon: "🏍️",
      color: "#00C9A7",
      gradient: "from-[#00C9A7] via-[#00C9A7]/40 to-[#00C9A7]/10",
      description: "Sensation unique",
      highlights: [
        "Pilote expérimenté",
        "Casques fournis",
        "Circuit personnalisé",
      ],
      route: "/decouvertes/side-car",
    },
    {
      title: "Croisière sur le Tejo",
      icon: "⛵",
      color: "#FF8F3F",
      gradient: "from-[#FF8F3F] via-[#FF8F3F]/40 to-[#FF8F3F]/10",
      description: "Vue panoramique",
      highlights: [
        "2h de croisière",
        "Commentaires historiques",
        "Rafraîchissements",
      ],
      route: "/boats",
    },
  ];
  return (
    <div className="bg-white">
      {/* Enhanced Hero Section with Slider */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full"
          >
            <Image
              src={heroImages[currentSlide].src}
              alt="Tour Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center text-center"
            >
              <div className="max-w-4xl px-4 text-white">
                <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">
                  {heroImages[currentSlide].title}
                </h1>
                <p className="text-2xl mb-8 text-white/90">
                  {heroImages[currentSlide].description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Link
                    href="#"
                    className="hover:bg-[#37b7ab] bg-[#ea3e4e] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Découvrir nos expériences
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#37b7ab] w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full text-white transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Enhanced Experience Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-[#2a2765] mb-16 text-center"
        >
          Visite de Lisbonne sur mesure
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <CategorySection
              key={index}
              index={index}
              icon={() => <span className="text-4xl">{experience.icon}</span>} // Gestion des emojis
              label={experience.title}
              color={experience.color}
              description={experience.description}
              gradient={experience.gradient}
              accent={experience.gradient}
              highlights={experience.highlights}
              route={experience.route}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Sintra Section */}
      <div className="bg-gradient-to-r from-[#2a2765] to-[#15103a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className="text-white">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold mb-8"
              >
                Sintra, ses monuments et sa côte
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-lg text-white/90 leading-relaxed"
              >
                Cette ville est un haut lieu de l'architecture romantique et
                abrite l'une des 7 merveilles du Portugal...
                <br />
                <br />
                Nous proposons la visite de Sintra accompagné de nos
                chauffeur/guide passionnés d'histoire, d'architecture et de
                botanique.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                className="mt-8"
              >
                <Link
                  href="/sintra"
                  className="inline-block bg-[#37b7ab] hover:bg-[#ea3e4e] text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  Découvrir Sintra
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/Sintra-Catarina-Ferreira-min.jpg"
                alt="Sintra"
                fill
                className="object-cover  hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Previous code remains the same until the Sintra section... */}

      {/* Enhanced Bike Discovery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-[#2a2765] mb-8"
            >
              Découverte de la ville en vélo
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-6 text-lg text-gray-700"
            >
              <p>
                Partez à la découverte de Lisbonne et ses alentours à vélo !
                Notre guide Taibat vous concoctera un parcours au fil de ses
                passions : les arts, les évènements culturels, les plages, la
                photo et la vidéo.
              </p>
              <p>
                Équipée de sa caméra, elle réalise des reportages photos/vidéos
                digne des plus grands journalistes du tour de France. Ce qui
                fera de votre rencontre un souvenir inoubliable.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Link
                  href="#"
                  className="mt-6 inline-block bg-[#ea3e4e] hover:bg-[#2a2765] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Découvrez les programmes de Taibat
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
          >
            <div className="relative w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/znrU7Ka2aEM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Tasting Section */}
      <div className="bg-gradient-to-r from-[#2a2765] to-[#15103a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className="text-white order-2 md:order-1">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold mb-8"
              >
                Dégustation de vins, tapas & produits locaux
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-6 text-lg text-white/90"
              >
                <p>
                  Ces expériences sont l'occasion de découvrir le terroir
                  portugais et ibérique au travers de ses produits, expression
                  de leur savoir faire au fil des époques, autour d'une belle
                  table.
                </p>
                <div className="space-y-2">
                  <h3 className="text-[#37b7ab] font-semibold mb-3">
                    Nos propositions :
                  </h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {[
                      "Fromages et charcuteries",
                      "Porto de 10, 20, 30 et 40 ans",
                      "Vins blancs ou rouge",
                      "Gin portugais",
                      "Sardines en boîtes",
                      "Spécialités ibériques",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#37b7ab]" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Link
                    href="#"
                    className="mt-6 inline-block hover:bg-[#37b7ab] bg-[#ea3e4e] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Réservez votre dégustation
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-[600px] order-1 md:order-2"
            >
              <motion.div
                className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/produits-locaux.jpg"
                  alt="Dégustation"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <TestimonialsSection />
    </div>
  );
};

export default DecouvertePage;
