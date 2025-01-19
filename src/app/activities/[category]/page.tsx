// pages/activities/[category]/page.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { categories } from '../../data/activity';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const selectedCategory = categories.find((e) => e.name.toLowerCase() === params.category);

  if (!selectedCategory) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] w-full bg-[#2a2765] flex items-center justify-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-garage-gothic-bold text-white text-center px-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Activités {selectedCategory.name}
        </motion.h1>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory.activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <Link href={`/activities/${params.category}/${activity.id}`}>
                <div>
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
              <Button
                className="w-full mt-4 bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href={`/activities/${params.category}/${activity.id}`}>
                  Lire plus
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}