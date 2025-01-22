"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Anchor, Users, Clock, MapPin, Ship, Shield, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface BoatCardProps {
  title: string;
  price: string;
  capacity: string;
  departure: string;
  type: string;
  images: string[];
}

const HeroBanner = () => {
  const features = [
    { icon: Shield, text: "Service personnalisé" },
    { icon: Crown, text: "Flotte premium" },
    { icon: Ship, text: "Plus de 50 bateaux" }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2765] to-[#37b7ab]">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 3% 25%, rgba(58, 183, 171, 0.15) 0%, rgba(42, 39, 101, 0.15) 25%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-[#37b7ab]/20 text-white hover:bg-[#37b7ab]/30">
            Location de bateaux privés
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Croisière privée
            <br />
            <span className="text-[#37b7ab]">sur mesure</span> au départ de Lisbonne
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Location de voiliers, catamarans et yachts au départ de Lisbonne.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-[#37b7ab]/20"
              >
                <Icon className="w-5 h-5 mr-2 text-[#37b7ab]" />
                <span className="text-white">{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-white/90 text-lg"
          >
            <p className="mb-6">
              Indiquez vos attentes via le formulaire ci-dessous et nous vous ferons parvenir en moins de 24 heures les options disponibles correspondant à vos besoins.
            </p>
            <p>
              Avec une flotte de plus de cinquante embarcations, allant de 4 à 220 places, nous avons la formule idéale pour un évènement unique et inoubliable !
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const BoatCard = ({ title, price, capacity, departure, type, images }: BoatCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <motion.div 
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-56 bg-gray-200" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((image, index) => (
            <motion.div 
              className="embla__slide flex-[0_0_100%] h-full"
              key={index}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <motion.div 
              key={index}
              className="w-2 h-2 rounded-full bg-white shadow-lg"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: index === 0 ? 1 : 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="p-8">
        <Badge className="mb-4 bg-[#2a2765]/10 text-[#2a2765] hover:bg-[#2a2765]/20">
          {type}
        </Badge>
        
        <h3 className="text-2xl font-bold text-[#2a2765] mb-4">{title}</h3>
        
        <div className="space-y-3 text-sm text-gray-600">
          <motion.div 
            className="flex items-center p-2 rounded-lg hover:bg-gray-50"
            whileHover={{ x: 5 }}
          >
            <Users className="w-5 h-5 mr-3 text-[#37b7ab]" />
            {capacity}
          </motion.div>
          <motion.div 
            className="flex items-center p-2 rounded-lg hover:bg-gray-50"
            whileHover={{ x: 5 }}
          >
            <MapPin className="w-5 h-5 mr-3 text-[#37b7ab]" />
            {departure}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">à partir de</p>
            <p className="text-3xl font-bold text-[#37b7ab]">{price}</p>
          </div>
          <Button 
            className="bg-[#ea3e4e] hover:bg-[#37b7ab] px-8 py-6 rounded-full text-lg shadow-lg"
          >
            Réserver
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function PrivateBoatPage() {
  const boats = [
    {
      title: "Bateau à moteur 8 places",
      price: "240€/2h",
      capacity: "8 personnes",
      departure: "Doca Santo Amaro",
      type: "Bateau à moteur",
      images: ["/motor-boat1.jpg", "/motor-boat2.jpg", "/motor-boat3.jpg"]
    },
    {
      title: "Catamaran Luxe",
      price: "450€/2h",
      capacity: "20 personnes",
      departure: "Doca Santo Amaro",
      type: "Catamaran",
      images: ["/catamaran1.jpg", "/catamaran2.jpg", "/catamaran3.jpg"]
    },
    {
      title: "Yacht Premium",
      price: "890€/2h",
      capacity: "35 personnes",
      departure: "Doca Santo Amaro",
      type: "Yacht",
      images: ["/yacht1.jpg", "/yacht2.jpg", "/yacht3.jpg"]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />
      
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#2a2765]/10 text-[#2a2765]">
            Notre flotte
          </Badge>
          <h2 className="text-4xl font-bold text-[#2a2765] mb-4">
            Des bateaux pour tous vos projets
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une sélection d'embarcations adaptée à vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {boats.map((boat, index) => (
            <BoatCard 
              key={index}
              {...boat}
            />
          ))}
        </div>
      </section>
    </div>
  );
}