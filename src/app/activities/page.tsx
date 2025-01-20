"use client";

import React from 'react';
import Link from 'next/link';
import { Anchor, Map } from 'lucide-react'; // Icônes mises à jour
import { motion } from 'framer-motion';
import { categories } from '../data/activity'; // Import des données

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

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full bg-[#2a2765] flex items-center justify-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-garage-gothic-bold text-white text-center px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Découvrez Nos Activités
        </motion.h1>
      </div>

      {/* Categories Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-garage-gothic-bold text-[#2a2765] mb-8 text-center">
          Choisissez Votre Catégorie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div key={category.id} variants={fadeInUp}>
              <Link href={`/activities/${category.slug}`}>
                <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center cursor-pointer">
                  <div className="flex justify-center mb-4">
                    <img
                      src={category.icon} // Utilisez l'icône de la catégorie
                      alt={category.name}
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-2xl font-garage-gothic-bold text-[#2a2765]">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Activities Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-garage-gothic-bold text-[#2a2765] mb-8 text-center">
          Activités à la Une
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) =>
            category.activities.map((activity) => (
              <motion.div key={activity.id} variants={fadeInUp}>
                <Link href={`/activities/${category.slug}/${activity.id}`}>
                  <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <h3 className="text-xl font-garage-gothic-bold text-[#2a2765] mt-4">
                      {activity.title}
                    </h3>
                    <p className="text-gray-700 mt-2">{activity.description}</p>
                    <p className="text-[#37b7ab] font-garage-gothic-bold mt-4">
                      {activity.price}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}