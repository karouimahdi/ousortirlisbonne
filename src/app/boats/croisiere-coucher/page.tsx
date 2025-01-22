"use client"
  import React, { useState } from 'react';
  import { motion } from 'framer-motion';
  import { Anchor, Users, Clock, MapPin, Ticket, GlassWater, Waves, Sun, Coffee } from 'lucide-react';
  import { Button } from '@/components/ui/button';
  import { Badge } from '@/components/ui/badge';
  import useEmblaCarousel from 'embla-carousel-react';
  import Autoplay from 'embla-carousel-autoplay';
  interface BoatCardProps {
    title: string;
    price: string;
    time: string;
    capacity: string;
    departure: string;
    images: string[];
  }
  const HeroBanner = () => {
    const features = [
      { icon: Sun, text: "Coucher de soleil" },
      { icon: Coffee, text: "Service à bord" },
      { icon: Waves, text: "Experience unique" }
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
              Une expérience unique
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Croisières de groupe au
              <span className="text-[#37b7ab]"> coucher de soleil</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              À partir de <span className="text-4xl font-bold text-[#ea3e4e]">25€</span>
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
          </motion.div>
  
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-6 text-white">
              <p className="text-lg leading-relaxed">
                Installé confortablement à bord de votre embarcation, un verre à la main, découvrez quelques-uns des monuments les plus emblématiques de la capitale, de cet angle si particulier qu'offre le fleuve.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Cristo Rei',
                  'Pont 25 de abril',
                  'Torre de Belém',
                  'Maat',
                  'Praça do Comércio',
                  'Padrão dos Descobrimentos'
                ].map((monument) => (
                  <motion.div
                    key={monument}
                    whileHover={{ x: 5 }}
                    className="flex items-center bg-[#2a2765]/40 backdrop-blur-sm rounded-lg p-3 border border-[#37b7ab]/20"
                  >
                    <MapPin className="w-5 h-5 mr-3 text-[#37b7ab]" />
                    <span className="text-sm">{monument}</span>
                  </motion.div>
                ))}
              </div>
  
              <div className="flex flex-col md:flex-row gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center bg-[#2a2765]/40 backdrop-blur-md p-4 rounded-xl border border-[#37b7ab]/20"
                >
                  <Ticket className="w-6 h-6 mr-3 text-[#ea3e4e]" />
                  <span className="text-sm">Tarif réduit -10 ans, Gratuit -2 ans</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center bg-[#2a2765]/40 backdrop-blur-md p-4 rounded-xl border border-[#37b7ab]/20"
                >
                  <GlassWater className="w-6 h-6 mr-3 text-[#ea3e4e]" />
                  <span>Boisson incluse par personne</span>
                </motion.div>
              </div>
            </div>
  
            <div className="relative h-full min-h-[400px]">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-[#2a2765]/40 border border-[#37b7ab]/20 backdrop-blur-md">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-0 left-0 right-0 h-64"
                    style={{
                      background: `linear-gradient(to top, 
                        rgba(55, 183, 171, 0.3) 0%,
                        rgba(42, 39, 101, 0.1) 100%)`
                    }}
                  />
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-[#ea3e4e]/20 blur-xl" />
                  <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-[#37b7ab]/20 blur-xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  const BoatCard = ({ title, price, time, capacity, departure, images }: BoatCardProps) => {
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
            Best-seller
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
              <Clock className="w-5 h-5 mr-3 text-[#37b7ab]" />
              {time}
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
              className="bg-[#ea3e4e] hover:bg-[#d83343] px-8 py-6 rounded-xl text-lg shadow-lg"
            >
              Réserver
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default function CroisierCoucherPage() {
    const boats = [
      {
        title: "Voilier Premium",
        price: "25€/pers*",
        time: "11h - 12h",
        capacity: "Jusqu'à 12 personnes",
        departure: "Départ de Belém",
        images: ["/voilier1.jpg", "/voilier2.jpg", "/voilier3.jpg"]
      },
      {
        title: "Catamaran Luxe",
        price: "45€/pers*",
        time: "14h - 16h",
        capacity: "Jusqu'à 20 personnes",
        departure: "Départ de Belém",
        images: ["/catamaran1.jpg", "/catamaran2.jpg", "/catamaran3.jpg"]
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
              Nos offres
            </Badge>
            <h2 className="text-4xl font-bold text-[#2a2765] mb-4">
              Choisissez votre aventure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos embarcations soigneusement sélectionnées pour une expérience inoubliable
            </p>
          </motion.div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {boats.map((boat, index) => (
              <BoatCard 
                key={index}
                {...boat}
              />
            ))}
          </div>
  
          <p className="text-center text-sm text-gray-500 mt-12">
            *Tarif spécial enfant disponible - Les horaires peuvent varier selon la marée
          </p>
        </section>
      </div>
    );
  }