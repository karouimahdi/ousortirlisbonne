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
    { name: "Musique", icon: "🎵" },
    { name: "Art", icon: "🎨" },
    { name: "Gastronomie", icon: "🍽️" },
    { name: "Sport", icon: "⚽" },
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
      backgroundColor: "#f0f0f0",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                className="group hover:shadow-lg transition-all cursor-pointer bg-white"
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <motion.span 
                    className="text-4xl mb-2"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className="text-xl font-garage-gothic-bold">{category.name}</h3>
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