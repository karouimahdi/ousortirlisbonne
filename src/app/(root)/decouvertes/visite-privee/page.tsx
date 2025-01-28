"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Clock, Users, MapPin } from "lucide-react";
import HeroSection from "@/components/Hero";
import { FocusCards } from "@/components/ui/focus-cards";
import useSWR from "swr";
import { Discover } from "@/types";
import { getTours } from "./action";
import { useTranslation } from "@/translations/provider/localeProvider";


const cards = [
  {
    title: "ALFAMA",
    src: "/prive1.jpeg",
  },
  {
    title: "BELEM ET SA TOUR",
    src: "/prive4.jpg",
  },
  {
    title: "BAIRRO ALTO",
    src: "/prive5.jpg",
  },
  {
    title: "PRACA DO COMERCIO",
    src: "/prive6.jpg",
  },
  {
    title: "PARQUES DAS NACOES",
    src: "/prive9.jpg",
  },
  {
    title: "MONASTERE DES HERONYMITES",
    src: "/prive10.jpg",
  },
];
const VisitePriveePage = () => {
  const {translations}=useTranslation()
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { data: tours, isLoading: boatLoading, error: boatError } = useSWR<Discover[]>(
    "tours",
    async () => {
      try {
        const tours = await getTours(); 
        return tours;
      } catch (err) {
        console.error('Error fetching tours:', err);
        throw new Error('Failed to load tours');
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <HeroSection
          imageUrl="/place-du-commerce-2-min.jpg"
          title={translations["discoverLisbonOnFoot"]}
          description={translations["passingThroughItsSoulToReachItsHeartAndDiscoverItsBody"]}
          buttonText={translations["followTheGuide"]}
          buttonLink="#"
          altText="Vue panoramique de Lisbonne"
        />
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[#2a2765] mb-8">
{translations["theSoulOfLisbon"]}          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {translations["lisbonIsACharmingCity"]}
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            {translations["fromTheAuthenticityOfTheOldNeighborhoodsToTheVibrantColorsOfStreetArt"]}     </p>
        </motion.div>

        {/* Tarifs Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#2a2765] to-[#15103a] rounded-2xl p-8 md:p-12 text-white max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6">{translations["pricesAndConditions"]}</h3>
          <p className="mb-6">
           {translations["ourWalkingToursLastBetween3To4HoursAndAreAvailableFrom"]}
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#37b7ab] mr-3" />
{translations["aPrivateTour"]}            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#37b7ab] mr-3" />
{translations["experiencedGuideService"]}            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#37b7ab] mr-3" />
{translations["tastingOneOrMoreLocalSpecialties"]}            </li>
          </ul>
          <p className="text-[#37b7ab] font-medium">
            {translations["childrenUnder10ParticipateForFree"]}</p>
        </motion.div>
      </div>
      <FocusCards cards={cards} />

      {/* Tours Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2a2765] mb-12 text-center">
{translations["guidedTours"]}          </h2>
          <div className="grid grid-cols-1 gap-12">
            {tours?.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-80">
                    <Image
    src={tour.images[activeImageIndex].url}
    alt={tour.images[activeImageIndex].alt || tour.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                      {tour.images.map((_, id) => (
                        <button
                          key={id}
                          onClick={() => setActiveImageIndex(id)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeImageIndex === id
                              ? "bg-[#37b7ab] w-8"
                              : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#2a2765] mb-4">
                      {tour.title}
                    </h3>
                    <div className="flex items-center space-x-6 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-[#37b7ab]" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-[#37b7ab]" />
                        {tour.locations}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{tour.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-[#2a2765] font-semibold">
                        {tour.price}
                      </div>
                      <button className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
{translations["bookNow1"]}                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitePriveePage;
