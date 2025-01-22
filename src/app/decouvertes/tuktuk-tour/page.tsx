"use client"
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FocusCards } from '@/components/ui/focus-cards';
import HeroSection from '@/components/Hero';

const TourTuktukPage = () => {
    const cards = [
        {
          title: "Forest Adventure",
          src: "/boat1.jpg",
        },
        {
          title: "Valley of life",
          src: "/boat2.jpg",
        },
        {
          title: "Sala behta hi jayega",
          src: "/plon.jpeg",
        },
        {
          title: "Camping is for pros",
          src: "/rooftop.jpeg",
        },
        {
          title: "The road not taken",
          src: "/lisb.jpg",
        },
        {
          title: "The First Rule",
          src: "/rand.jpeg",
        },
      ];
    

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen "
        
      >
        
        <HeroSection
  imageUrl="/Image.jpg"
  title="  Tour en tuktuk à Lisbonne"
  description="Lisbonne est un véritable musée à ciel ouvert. Venez admirer places, monuments, oeuvres street art et paysages, confortablement installé à bord de tuktuk electrique 6 places ou piaggo 2 places accompagné par nos guides passionnés et passionnants.
"
  buttonText="Faites de chaque instant un événement"
  buttonLink="#"
  altText="Vue panoramique de Lisbonne"
/>
      </div>

      {/* Discovery Section */}
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2765] mb-8">
              À la découverte de Lisbonne en Tuktuk
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Découvrez Lisbonne en optant pour nos excursions en tuktuk. Profitez d'une expérience personnalisée, où chaque coin de rue révèle histoire et anecdotes fascinantes. Avec nos guides avenants et bien disposés, vous explorerez les sites emblématiques de la ville en toute sécurité.
            </p>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Moyen efficace de visiter Lisbonne à moindre effort. Idéal pour les personnes à mobilité réduite, les familles avec enfants, pour les jours de grande chaleur et séjours courts.
            </p>
            <p className="text-xl font-semibold text-[#37b7ab]">
              Une aventure et des souvenirs inoubliables vous attendent!
            </p>
          </div>

          {/* 3D Carousel */}
         <FocusCards cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default TourTuktukPage;