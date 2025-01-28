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
import { getBoatsByType } from "./action";
import useSWR from "swr";
import { ArrabidaBoat } from "@/types";
import { useTranslation } from "@/translations/provider/localeProvider";
const featureIconMap: { [key: string]: React.ComponentType<any> } = {
  "Yamaha 50hp": Anchor,
  "5 passagers max": Users,
  "Pêche possible": Fish,
  "Toit solaire": Sun,
  "Voilier classique": Sailboat,
  "GPS nouvelle gén": Compass,
};



const CascaisPage = () => {
const {translations}=useTranslation()
  const { data: sampleBoats, isLoading: motorLoading, error: motorError } = useSWR<ArrabidaBoat[]>(
    "sample-boats",
    async () => {
      try {
        const boats = await getBoatsByType("SimpleBoat");
        return boats.map((boat: any) => ({
          id: boat.id,
          createdAt: new Date(boat.createdAt),
          updatedAt: new Date(boat.updatedAt),
          type: boat.type,
          images: boat.images?.map((img: any) => ({
            image: {
              id: img.image?.id || '',
              url: img.image?.url || '',
              alt: img.image?.alt || boat.title
            },
            id: img.id
          })) || [],
          title: boat.title,
          capacity: boat.capacity,
          prices: boat.prices?.map((price: any) => ({
            duration: price.duration,
            price: price.price,
            id: price.id
          })) || [],
          features: boat.features?.map((feature: any) => ({
            text: feature.text,
            id: feature.id
          })) || []
        }));
      } catch (err) {
        console.error('Error fetching motor boats:', err);
        throw new Error('Failed to load motor boats');
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 3) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      }
    }
  );
  const { data: fishingBoats, isLoading: sailLoading, error: sailError } = useSWR<ArrabidaBoat[]>('sail-boats', async () => {
    try {
      const boats = await getBoatsByType("fishingBoats");
      return boats.map((boat: any) => ({
        id: boat.id,
        createdAt: new Date(boat.createdAt),
        updatedAt: new Date(boat.updatedAt),
        type: boat.type,
        images: boat.images?.map((img: any) => ({
          image: {
            id: img.image?.id || '',
            url: img.image?.url || '',
            alt: img.image?.alt || boat.title
          },
          id: img.id
        })) || [],
        title: boat.title,
        capacity: boat.capacity,
        prices: boat.prices?.map((price: any) => ({
          duration: price.duration,
          price: price.price,
          id: price.id
        })) || [],
        features: boat.features?.map((feature: any) => ({
          text: feature.text,
          id: feature.id
        })) || []
      }));
    } catch (err) {
      console.error('Error fetching motor boats:', err);
      throw new Error('Failed to load motor boats');
    }
  },
  {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;
      if (retryCount >= 3) return;
      setTimeout(() => revalidate({ retryCount }), 5000);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section Hero */}
      <section className="relative h-[70vh] flex items-center mb-12">
        <HeroSection
          imageUrl="/Cascais-min.jpg"
          title={translations["rent_boat_cascais"]}
          description= {translations["cascais_description"]}
          buttonText={translations["see_offers"]}
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
{translations["discover_cascais"]}            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <Sun className="w-5 h-5 mr-3 text-[#37b7ab]" />
{translations["beaches"]}              </li>
              <li className="flex items-center">
                <Sailboat className="w-5 h-5 mr-3 text-[#37b7ab]" />
{translations["historical_villas"]}              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#37b7ab]" />
{translations["museum_and_park"]}              </li>
              <li className="flex items-center">
                <Fish className="w-5 h-5 mr-3 text-[#37b7ab]" />
{translations["marine_observation"]}              </li>
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
{translations["pleasure_boats_cascais"]}            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
{translations["boats_yachts"]}            </p>
          </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {fishingBoats?.map((boat) => (
                        <motion.div
                          key={boat.id}
                          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                          whileHover={{ y: -5 }}
                        >
                          <div className="relative h-60">
                            <img
                              src={boat.images[0]?.image?.url}
                              alt={boat.title}
                              className="w-full h-full object-cover"
                            />
                            <Badge className="absolute top-4 left-4 bg-[#37b7ab] text-white">
                              {translations["available"]}
                            </Badge>
                          </div>
          
                          <div className="p-6">
                            <h3 className="text-2xl font-bold text-[#2a2765] mb-2">
                              {boat.title}
                            </h3>
                            <div className="flex items-center gap-2 text-[#37b7ab] mb-4">
                              <Users className="w-5 h-5" />
                              <span>{boat.capacity}</span>
                            </div>
          
                            <div className="grid grid-cols-2 gap-3 mb-6">
                              {boat.features.map((feature, i) => {
                                const Icon = featureIconMap[feature.text];
                                return (
                                  <div
                                    key={i}
                                    className="flex items-center p-2 bg-gray-50 rounded-lg"
                                  >
                                    {Icon && <Icon className="w-5 h-5 mr-2 text-[#37b7ab]" />}
                                    <span className="text-sm">{feature.text}</span>
                                  </div>
                                );
                              })}
                            </div>
          
                            <div className="flex justify-between items-center mb-6">
                              {boat.prices.map((price, i) => (
                                <div key={i} className="text-center">
                                  <div className="text-xl font-bold text-[#2a2765]">
                                    {price.price}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {price.duration}
                                  </div>
                                </div>
                              ))}
                            </div>
          
                            <Button className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] rounded-full h-12">
{translations["bookNow"]}                    </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
        </div>
      </section>

      {/* Section Pêche */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#ea3e4e]/10 text-[#ea3e4e]">
{translations["sport_fishing"]}          </Badge>
          <h2 className="text-3xl font-bold text-[#2a2765] mb-4">
{translations["big_game_fishing"]}          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
{translations["fishing_experience"]}          </p>
        </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sampleBoats?.map((boat) => (
                      <motion.div
                        key={boat.id}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative h-60">
                          <img
                            src={boat.images[0]?.image?.url}
                            alt={boat.title}
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-[#37b7ab] text-white">
                            {translations["available"]}
                          </Badge>
                        </div>
        
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-[#2a2765] mb-2">
                            {boat.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[#37b7ab] mb-4">
                            <Users className="w-5 h-5" />
                            <span>{boat.capacity}</span>
                          </div>
        
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {boat.features.map((feature, i) => {
                              const Icon = featureIconMap[feature.text];
                              return (
                                <div
                                  key={i}
                                  className="flex items-center p-2 bg-gray-50 rounded-lg"
                                >
                                  {Icon && <Icon className="w-5 h-5 mr-2 text-[#37b7ab]" />}
                                  <span className="text-sm">{feature.text}</span>
                                </div>
                              );
                            })}
                          </div>
        
                          <div className="flex justify-between items-center mb-6">
                            {boat.prices.map((price, i) => (
                              <div key={i} className="text-center">
                                <div className="text-xl font-bold text-[#2a2765]">
                                  {price.price}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {price.duration}
                                </div>
                              </div>
                            ))}
                          </div>
        
                          <Button className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] rounded-full h-12">
{translations["bookNow"]}                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
      </section>
    </div>
  );
};

export default CascaisPage;
