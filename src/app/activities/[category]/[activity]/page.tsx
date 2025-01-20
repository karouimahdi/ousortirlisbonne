// pages/activities/[category]/[activity]/page.tsx
"use client";

import React from 'react';
import { categories } from '../../../data/activity';
import { notFound } from 'next/navigation';
import ImageGallery from '@/components/ImageGallery';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ActivityDetails({ params }: { params: { category: string; activity: string } }) {
  const selectedCategory = categories.find((cat) => cat.slug === params.category);
  let selectedActivity: any = null;

  if (selectedCategory) {
    selectedActivity = selectedCategory.activities.find((act) => act.id.toString() === params.activity);
  }

  if (!selectedActivity) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedActivity.images[0]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/50 "></div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-garage-gothic-bold text-[#2a2765] text-center px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          {selectedActivity.title}
        </motion.h1>
      </motion.div>

      {/* Activity Details */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Image Gallery */}
        <ImageGallery
          images={selectedActivity.images}
          venueName={selectedActivity.title}
        />

        {/* Detailed Information */}
        <div className="mt-16">
          <h2 className="text-2xl font-garage-gothic-bold text-[#2a2765]">Tarifs et Durées</h2>
          <ul className="list-disc pl-6 mt-4">
            {selectedActivity.details.tariffs.map((tariff: any, index: number) => (
              <li key={index}>
                {tariff.duration} - {tariff.price}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-garage-gothic-bold text-[#2a2765] mt-8">Itinéraire</h2>
          <p className="text-gray-700 mt-4">{selectedActivity.details.itinerary}</p>

          <h2 className="text-2xl font-garage-gothic-bold text-[#2a2765] mt-8">Informations Supplémentaires</h2>
          <p className="text-gray-700 mt-4">{selectedActivity.details.additionalInfo}</p>

          {/* Reservation Button */}
          <Button
            className="w-full mt-8 bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => alert(`Réservation pour ${selectedActivity.title}`)}
          >
            Réserver
          </Button>
        </div>
      </motion.div>
    </div>
  );
}