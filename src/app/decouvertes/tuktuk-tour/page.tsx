"use client"
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FocusCards } from '@/components/ui/focus-cards';

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
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 39, 101, 0.7), rgba(42, 39, 101, 0.7)), url('/api/placeholder/1920/1080')`
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tour en tuktuk à Lisbonne
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Lisbonne est un véritable musée à ciel ouvert. Venez admirer places, monuments, oeuvres street art et paysages, confortablement installé à bord de tuktuk electrique 6 places ou piaggo 2 places accompagné par nos guides passionnés et passionnants.
          </p>
          <Button 
            className="bg-[#ea3e4e] hover:bg-[#d03545] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Faites de chaque instant un événement
          </Button>
        </div>
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