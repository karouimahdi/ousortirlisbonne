"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Anchor,
  Fish,
  Sun,
  Waves,
  MapPin,
  Clock,
  Users,
  Sailboat,
  Compass,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import HeroSection from "@/components/Hero";
interface BoatCardProps {
  title: string;
  capacity: string;
  description: string;
  prices: Array<{ duration: string; price: string }>;
  badge: string;
  features: Array<{ icon: React.ComponentType; text: string }>;
  images: string[];
}

const BoatCard = ({
  title,
  capacity,
  description,
  prices,
  badge,
  features,
  images,
}: BoatCardProps) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full"
      whileHover={{ y: -5 }}
    >
      {/* Image Section */}
      <div className="relative h-64 bg-gradient-to-br from-[#2a2765] to-[#37b7ab]">
        <img
          src={images[0]} // Utilise la première image
          alt={title}
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-95"
        />

        {/* Badge & Price */}
        <div className="absolute top-4 left-4 flex gap-2 items-start">
          <Badge className="bg-[#37b7ab] text-white backdrop-blur-sm">
            {badge}
          </Badge>
          <div className="bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
            <span className="text-[#2a2765] font-bold text-lg">
              {prices[0].price}
              <span className="text-sm text-gray-600 ml-1">
                / {prices[0].duration}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Capacity */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-[#2a2765]">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <Users className="w-5 h-5 text-[#37b7ab]" />
            <span className="text-gray-600 font-medium">{capacity}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {features.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-gray-50 rounded-xl border border-transparent group-hover:border-[#37b7ab]/20 transition-colors"
            >
              <Icon />
              <span className="text-gray-600 text-sm">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className="w-full rounded-full hover:bg-[#37b7ab] bg-[#ea3e4e] "
          size="lg"
        >
          <Compass className="w-5 h-5 mr-2" />
          Voir l'offre
        </Button>
      </div>
    </motion.div>
  );
};

const CascaisPage = () => {
  const sampleBoats = [
    {
      title: "FAETON 930",
      capacity: "8 passagers",
      description: "Bateau idéal pour des excursions côtières",
      badge: "Plaisance",
      prices: [
        { duration: "90min", price: "230€" },
        { duration: "3h", price: "400€" },
        { duration: "Journée", price: "650€" },
      ],
      features: [
        { icon: Anchor, text: "Équipage professionnel" },
        { icon: Sailboat, text: "Cabine équipée" },
        { icon: Users, text: "8 personnes max" },
        { icon: Fish, text: "Pêche autorisée" },
      ],
      images: ["/boat1.jpg"],
    },
    {
      title: "Yacht Luxe 42'",
      capacity: "12 passagers",
      description: "Expérience nautique haut de gamme",
      badge: "Luxe",
      prices: [
        { duration: "2h", price: "450€" },
        { duration: "4h", price: "800€" },
      ],
      features: [
        { icon: Anchor, text: "2 cabines" },
        { icon: Sailboat, text: "Pont soleil" },
        { icon: Users, text: "Capacité VIP" },
        { icon: Timer, text: "Service personnalisé" },
      ],
      images: ["/yacht1.jpg"],
    },
    {
      title: "Pêche Sportive Pro",
      capacity: "6 pêcheurs",
      description: "Matériel professionnel inclus",
      badge: "Pêche",
      prices: [
        { duration: "4h", price: "350€" },
        { duration: "8h", price: "600€" },
      ],
      features: [
        { icon: Fish, text: "Équipement complet" },
        { icon: Anchor, text: "Capitaine expert" },
        { icon: Users, text: "6 places" },
        { icon: Timer, text: "Prise garantie" },
      ],
      images: ["/peche1.jpg"],
    },
  ];

  const fishingBoats = [
    {
      title: "Pêche au Gros Pro",
      capacity: "6 pêcheurs",
      description: "Matériel professionnel inclus",
      badge: "Pêche Sportive",
      prices: [
        { duration: "4h", price: "350€" },
        { duration: "8h", price: "600€" },
      ],
      features: [
        { icon: Fish, text: "Espadon, Thon, Marlin" },
        { icon: Anchor, text: "Capitaine expérimenté" },
        { icon: Waves, text: "Équipement fourni" },
      ],
      images: ["/peche-1.jpg", "/peche-2.jpg"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section Hero */}
      <section className="relative h-[70vh] flex items-center mb-12">
        <HeroSection
          imageUrl="/Cascais-min.jpg"
          title=" Louer un bateau à Cascais"
          description="              Cascais, la « ville de rois et de pêcheurs », station balnéaire prisée du littoral de Lisbonne
"
          buttonText="Voir les offres"
          buttonLink="/decouvertes"
          altText="Vue panoramique de Lisbonne"
        />
      </section>

      {/* Section Descriptif */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-[#2a2765]">
              Découvrez Cascais vue de l'océan
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <Sun className="w-5 h-5 mr-3 text-[#37b7ab]" />
                Plages de Praia da Conceição et Praia da Duquesa
              </li>
              <li className="flex items-center">
                <Sailboat className="w-5 h-5 mr-3 text-[#37b7ab]" />
                Villas historiques du XIXe siècle
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#37b7ab]" />
                Musée Castro Guimaraes et Parque Marechal Carmona
              </li>
              <li className="flex items-center">
                <Fish className="w-5 h-5 mr-3 text-[#37b7ab]" />
                Observation marine et pêche sportive
              </li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Tokyo.jpeg"
              alt="Cascais"
              className="rounded-xl h-64 object-cover"
            />
            <img
              src="/yacht.jpg"
              alt="Marina"
              className="rounded-xl h-64 object-cover"
            />
            <img
              src="/voilier.jpg"
              alt="Plage"
              className="rounded-xl h-64 object-cover col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Section Bateaux de Plaisance */}
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2a2765] mb-4">
              Bateaux de plaisance à Cascais
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Yachts, voiliers, catamarans - Choisissez votre embarcation idéale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBoats.map((boat, index) => (
              <BoatCard key={index} {...boat} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Pêche */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#ea3e4e]/10 text-[#ea3e4e]">
            🎣 Pêche Sportive
          </Badge>
          <h2 className="text-3xl font-bold text-[#2a2765] mb-4">
            Excursions Pêche au Gros
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Expérience de pêche en mer avec équipement professionnel
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {fishingBoats.map((boat, index) => (
            <BoatCard
              key={index}
              {...boat}
              features={[
                ...boat.features,
                { icon: Anchor, text: "Guide de pêche inclus" },
                { icon: Clock, text: "Préparation des prises incluse" },
              ]}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CascaisPage;
