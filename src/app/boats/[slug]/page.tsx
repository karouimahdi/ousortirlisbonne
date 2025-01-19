"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Anchor, Users, MapPin, Clock } from "lucide-react";
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { privateBoats, groupCruises } from '../../data/boats'; // Import des données

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function BoatDetailsPage({ params }: { params: { slug: string } }) {
  // Trouver le bateau correspondant au slug
  const boat = [...privateBoats, ...groupCruises].find((e) => e.slug === params.slug);

  // Si le bateau n'existe pas, afficher une page 404
  if (!boat) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img
          src={boat.image}
          alt={boat.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-garage-gothic-bold text-white text-center px-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {boat.title}
          </motion.h1>
        </div>
      </div>

      {/* Details Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Features */}
          <motion.div variants={fadeInUp}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-garage-gothic-bold text-[#2a2765] mb-4">
                Caractéristiques du Bateau
              </h2>
              <ul className="space-y-3">
                {boat.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Anchor className="w-5 h-5 text-[#ea3e4e]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Details and Booking */}
          <motion.div variants={fadeInUp}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-garage-gothic-bold text-[#2a2765] mb-4">
                Informations sur la Location
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Anchor className="w-5 h-5 text-[#ea3e4e]" />
                  <span className="text-gray-700">
                    <strong>Type de Bateau :</strong> {boat.type}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#ea3e4e]" />
                  <span className="text-gray-700">
                    <strong>Capacité :</strong> {boat.capacity}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#ea3e4e]" />
                  <span className="text-gray-700">
                    <strong>Lieu de Départ :</strong> {boat.location}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#ea3e4e]" />
                  <span className="text-gray-700">
                    <strong>Durée :</strong> {boat.duration}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">
                    <strong>Prix :</strong> {boat.price}
                  </span>
                </div>
              </div>
              <Button
                className="w-full mt-6 bg-[#37b7ab] hover:bg-[#ea3e4e] text-xl py-6 font-garage-gothic-bold"
                onClick={() => alert("Réservation en cours...")}
              >
                Réserver Maintenant
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Description Section */}
        <motion.div className="mt-16" variants={fadeInUp}>
          <h2 className="text-3xl font-garage-gothic-bold text-[#2a2765] mb-6">
            Description du Bateau
          </h2>
          <p className="text-gray-700 leading-relaxed">{boat.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}