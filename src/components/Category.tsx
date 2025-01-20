"use client"
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { motion, Variants } from 'framer-motion';
import EventsList from './events';

const CategoryGrid = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { name: "Musique", icon: "🎵", color: "#2a2765", gradient: "linear-gradient(135deg, #2a2765, #3a3575)" }, // Blue
    { name: "Art", icon: "🎨", color: "#37b7ab", gradient: "linear-gradient(135deg, #37b7ab, #47c7bb)" }, // Green
    { name: "Gastronomie", icon: "🍽️", color: "#ea3e4e", gradient: "linear-gradient(135deg, #ea3e4e, #fa4e5e)" }, // Pink
    { name: "Sport", icon: "⚽", color: "#2a2765", gradient: "linear-gradient(135deg, #2a2765, #3a3575)" }, // Blue
  ];
  
  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const hoverVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    }
  };

  const iconVariants: Variants = {
    hover: {
      rotate: [0, -10, 10, -10, 0], // Slight wobble effect
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <motion.div
              whileHover="hover"
              variants={hoverVariants}
            >
              <Card 
                className="group hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-[#37b7ab] overflow-hidden"
                onClick={() => setSelectedCategory(category.name)}
                style={{ background: category.gradient }}
              >
                <CardContent className="flex flex-col items-center justify-center p-8 text-center relative">
                  {/* Subtle background animation */}
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  />
                  <motion.span 
                    className="text-5xl mb-4"
                    whileHover="hover"
                    variants={iconVariants}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className="text-2xl font-garage-gothic-bold text-white">{category.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <EventsList category={selectedCategory!} />
    </div>
  );
};

export default CategoryGrid;