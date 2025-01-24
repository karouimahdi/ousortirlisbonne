"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Fish, Bike, Car, Users, Clock, Camera, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { sports } from "../data/sport";
import HeroSection from "@/components/Hero";

const SportsPage = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [activeParaSlide, setActiveParaSlide] = useState(0);

  const parapenteSlides = [
    {
      title: "Baptême de parapente",
      subtitle: "Arrabida/Sesimbra - Praia das Bicas – Fonte da Telha",
      content: `Envie d’un expérience hors du commun dans un décor paradisiaque...`,
    },
    // Ajouter les autres slides
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        imageUrl="/activites-sportives-min.jpg"
        title=" Activités à Sesimbra Arrabida
"
        description="Surf, Parapente, Jet ski - Profitez toute l'année de nos activités outdoor"
        buttonText="Voir les activitées"
        buttonLink="#"
      />

      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center text-[#2a2765] mb-16">
          Nos activités en plein air
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sports.map((activity) => {
            return (
              <motion.div
                key={activity.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  {activity.badge && (
                    <div className="absolute top-4 left-4 bg-[#37b7ab] text-white px-4 py-1 rounded-full text-sm">
                      {activity.badge}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-[#2a2765]">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4">{activity.location}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-[#2a2765]">
                        {activity.price}€
                      </span>
                      <span className="text-gray-600 ml-2">
                        / {activity.duration}
                      </span>
                    </div>
                    <Users className="text-gray-400" />
                  </div>

                  <ul className="mb-6 text-sm text-gray-600 space-y-2">
                    {activity.includedItems.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-[#37b7ab] mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full rounded-full bg-[#ea3e4e] hover:bg-[#37b7ab]">
                    Réserver
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SportsPage;
