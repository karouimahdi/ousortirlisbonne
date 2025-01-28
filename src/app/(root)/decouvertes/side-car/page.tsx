"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Clock, Users, MapPin } from "lucide-react";
import { FocusCards } from "@/components/ui/focus-cards";
import HeroSection from "@/components/Hero";
import useSWR from "swr";
import { Discover } from "@/types";
import { getTours } from "./action";
import { useTranslation } from "@/translations/provider/localeProvider";


const VisitePriveePage = () => {
  const {translations}=useTranslation();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const cards = [
    {
      title: "",
      src: "/side2.jpeg",
    },
    {
      title: "Valley of life",
      src: "/side3.jpg",
    },
    {
      title: "",
      src: "/side4.jpeg",
    },
    {
      title: "",
      src: "/side5.jpg",
    },
    {
      title: "",
      src: "/side6.jpeg",
    },
    {
      title: "",
      src: "/side7.jpeg",
    },
  ];
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
          imageUrl="/Street-Art-Side-Car-Lisbon.jpeg"
          title={translations["authenticSidecarRide"]}
          description={translations["authenticSidecarRideDescription"]}

          buttonText={translations["seeOffers"]}
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
            {translations["discoverLisbonSidecar"]}
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
         {translations["uniqueLisbonExperience"]}
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
           {translations["discoverLisbonSidecarDescription"]}
          </p>
        </motion.div>

        {/* Tarifs Box */}
      </div>

      <FocusCards cards={cards} />
      {/* Tours Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2a2765] mb-12 text-center">
           {translations["guidedTour"]}
          </h2>
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
                      alt={tour.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                      {tour.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeImageIndex === idx
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
                      <button className="bg-[#ea3e4e] rounded-full hover:bg-[#37b7ab] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
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
