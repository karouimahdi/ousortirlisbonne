"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Anchor, Sailboat, Fish, Sun, Compass, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import YouTube from 'react-youtube';
import HeroSection from '@/components/Hero';

const SetubalPage = () => {
  const motorBoats = [
    {
      images: ["/Kelt-Azura-Bateau-a-moteur-min.jpg", "/Kelt-Azura-Bateau-a-moteur-2-min.jpg"],
      title: "Kelt Azura",
      capacity: "5 personnes",
      prices: [
        { duration: "4h", price: "300€" },
        { duration: "8h", price: "550€" }
      ],
      features: [
        { icon: Anchor, text: "Yamaha 50hp" },
        { icon: Users, text: "5 passagers max" },
        { icon: Fish, text: "Pêche possible" },
        { icon: Sun, text: "Toit solaire" }
      ]
    },
    // Ajouter d'autres bateaux...
  ];

  const sailBoats = [
    {
      images: ["/Voilier-8-personnes-Arrabida-Setubal-min.jpg", "/Voilier-8-personnes-Setubal-_-Arrabida-2-min.jpg"],
      title: "Attalia 32",
      capacity: "7 personnes",
      prices: [
        { duration: "Journée", price: "450€" },
        { duration: "Week-end", price: "800€" }
      ],
      features: [
        { icon: Sailboat, text: "Voilier classique" },
        { icon: Users, text: "Cabine 4 couchages" },
        { icon: Compass, text: "GPS nouvelle gén" },
        { icon: Anchor, text: "Skipper inclus" }
      ]
    },
    // Ajouter d'autres voiliers...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center mb-8">
        
        <HeroSection
  imageUrl="/serra-da-arabida-min.jpg"
  title="Croisière à Setúbal – Troia – Arrábida"
  description="  Paysages à couper le souffle • Eaux cristallines • 95% de chance de voir des dauphins"
  buttonText="Voir les disponibilités"
  buttonLink="#"
/>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-[#ea3e4e]/10 text-[#ea3e4e]">
              À 40km de Lisbonne
            </Badge>
            <h2 className="text-3xl font-bold text-[#2a2765]">
              Une expérience revitalisante
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Découvrez la Serra de Arrabida à bord de nos bateaux équipés, entre paysages époustouflants 
              et rencontres marines inoubliables.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-[#f8fafc] rounded-xl text-center">
                <Users className="w-8 h-8 mx-auto text-[#37b7ab] mb-2" />
                <span className="font-semibold text-[#2a2765]">5-18 places</span>
              </div>
              <div className="p-4 bg-[#f8fafc] rounded-xl text-center">
                <Sailboat className="w-8 h-8 mx-auto text-[#37b7ab] mb-2" />
                <span className="font-semibold text-[#2a2765]">3 types de bateaux</span>
              </div>
              <div className="p-4 bg-[#f8fafc] rounded-xl text-center">
                <Fish className="w-8 h-8 mx-auto text-[#37b7ab] mb-2" />
                <span className="font-semibold text-[#2a2765]">Rencontre dauphins</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <YouTube 
              videoId="TmdntCQxqlI" 
              opts={{ width: '100%' }}
              className="aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Motor Boats Section */}
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2a2765] mb-4">
              Croisières avec skipper
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Bateaux à moteur équipés pour des aventures inoubliables
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorBoats.map((boat, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60">
                  <img
                    src={boat.images[0]}
                    alt={boat.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#37b7ab] text-white">
                    Disponible
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2a2765] mb-2">{boat.title}</h3>
                  <div className="flex items-center gap-2 text-[#37b7ab] mb-4">
                    <Users className="w-5 h-5" />
                    <span>{boat.capacity}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {boat.features.map(({ icon: Icon, text }, i) => (
                      <div key={i} className="flex items-center p-2 bg-gray-50 rounded-lg">
                        <Icon className="w-5 h-5 mr-2 text-[#37b7ab]" />
                        <span className="text-sm">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    {boat.prices.map((price, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold text-[#2a2765]">{price.price}</div>
                        <div className="text-sm text-gray-600">{price.duration}</div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] rounded-full h-12">
                    Réserver maintenant
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sailboats Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2a2765] mb-4">
            Privatisation de voiliers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Expérience nautique exclusive pour vos événements privés
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sailBoats.map((boat, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-80">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2765]/40 to-transparent" />
                <img
                  src={boat.images[0]}
                  alt={boat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-[#2a2765] backdrop-blur-sm">
                    {boat.capacity}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2a2765] mb-4">{boat.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {boat.features.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-center">
                      <Icon className="w-6 h-6 mr-2 text-[#37b7ab]" />
                      <span className="text-gray-600">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mb-6">
                  {boat.prices.map((price, i) => (
                    <div key={i} className="flex-1 p-3 bg-[#f8fafc] rounded-lg text-center">
                      <div className="text-lg font-bold text-[#2a2765]">{price.price}</div>
                      <div className="text-sm text-gray-600">{price.duration}</div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-[#ea3e4e] to-[#37b7ab] rounded-full h-12">
                  Privatiser ce voilier
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SetubalPage;