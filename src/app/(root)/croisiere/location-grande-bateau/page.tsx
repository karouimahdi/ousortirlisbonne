"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Users,
  Clock,
  MapPin,
  Ticket,
  PartyPopper,
  Ship,
  Sunset,
  Euro,
  Anchor,
  Wine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useSWR from "swr";
import { BigBoat } from "@/types";
import { getBoats } from "./action";

// ... HeroBanner component remains the same ...
const HeroBanner = () => {
  const features = [
    { icon: Ship, text: "Bateau à moteur 25 places" },
    { icon: PartyPopper, text: "Événements jusqu'à 80 personnes" },
    { icon: Sunset, text: "Croisières sunset disponibles" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2765] to-[#37b7ab]">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
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
            Location & Événements
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Location de bateau/Local d'event
            <span className="text-[#37b7ab]"> jusqu'à 80 personnes</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">Au départ de Lisbonne</p>

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
      </div>
    </div>
  );
};
interface BoatCardProps {
  title?: string;
  capacity?: string;
  description?: string;
  prices?: Array<{ duration: string; price: string }>;
  badge?: string;
  features?: string[];
  images?: string[];
  hasSunsetFee?: boolean;
}

const BoatCard = ({
  title,
  capacity,
  description,
  prices,
  badge,
  features,
  images,
  hasSunsetFee = true,
}: BoatCardProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:shadow-2xl group"
      whileHover={{ y: -8 }}
    >
      <div className="relative h-64 bg-gradient-to-br from-[#2a2765] to-[#37b7ab]">
        <div className="embla__container h-full" ref={emblaRef}>
          {images?.map((image, index) => (
            <div
              className="embla__slide relative flex-[0_0_100%] h-full"
              key={index}
            >
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === selectedIndex
                        ? "w-6 bg-[#37b7ab]"
                        : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 relative">
        <div className="absolute -top-5 right-6">
          <Badge className="bg-[#37b7ab] text-white hover:bg-[#37b7ab]/90 shadow-lg">
            {badge}
          </Badge>
        </div>

        <h3 className="text-2xl font-extrabold text-[#2a2765] mb-1">{title}</h3>
        <p className="text-lg text-[#37b7ab] font-semibold mb-4">{capacity}</p>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
        {features?.map((feature, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.02 }}
    className="flex items-start p-3 bg-gray-50 rounded-xl border border-transparent hover:border-[#37b7ab]/20"
  >
    <span className="text-gray-600 text-sm">{feature}</span>
  </motion.div>
))}

        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {prices?.map(({ duration, price }) => (
            <div
              key={duration}
              className="relative p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 border hover:border-[#37b7ab]/30 transition-all"
            >
              <p className="text-gray-500 text-sm mb-1">{duration}</p>
              <p className="text-xl font-bold text-[#2a2765]">
                {price}
                <span className="text-sm text-gray-400 ml-1">/jour</span>
              </p>
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#37b7ab]/10 rounded-bl-xl rounded-tr-xl flex items-center justify-center">
                <Euro className="w-4 h-4 text-[#37b7ab]" />
              </div>
            </div>
          ))}
        </div>

        {hasSunsetFee && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl mb-6 bg-gradient-to-r from-[#fff3f4] to-[#ffebec] border border-[#ea3e4e]/20"
          >
            <div className="flex items-center text-[#ea3e4e]">
              <Sunset className="w-6 h-6 mr-2" />
              <div>
                <p className="font-semibold">Option Sunset +100€</p>
                <p className="text-sm text-[#ea3e4e]/80 mt-1">
                  Créneau coucher de soleil exclusif
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <Button className="hover:bg-[#37b7ab] bg-[#ea3e4e] py-6 text-lg rounded-full  shadow-lg transition-all transform hover:-translate-y-0.5">
          <Ticket className="mr-3 w-5 h-5" />
          Réserver maintenant
        </Button>
      </div>
    </motion.div>
  );
};

export default function LocationBateauPage() {
  const { data: boats, isLoading: boatLoading, error: boatError } = useSWR<BigBoat[]>(
    "big-boats",
    async () => {
      try {
        const boats = await getBoats(); 
        console.log("bbb",boats);
        // Fetch boats from your API
        return boats.map((boat) => ({
          title: boat.title,
          capacity: boat.capacity,
          description: boat.description,
          badge: boat.badge,
          prices: boat.prices?.map((price) => ({
            duration: price.duration,
            price: price.price,
          })),
          features: boat.features,
          images: boat.images, // Assuming images are already in the correct format
        }));

      } catch (err) {
        console.error('Error fetching sunset cruise boats:', err);
        throw new Error('Failed to load sunset cruises');
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount >= 3) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      }
    }
  );


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
            Location de bateau privé
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une sélection de bateaux adaptés à tous vos événements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {boats?.map((boat, index) => (
            <BoatCard key={index} {...boat} />
          ))}
        </div>
      </section>
    </div>
  );
}
