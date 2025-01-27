// src/components/CategoryGrid.tsx
"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  Sparkles,
  ArrowRight,
  LandPlot,
  Music,
  Palette,
  Utensils,
} from "lucide-react";
import { cn } from "@/lib/utils";
import useSWR from "swr";
import { getEventCategories } from "./action";
import CategorySection from "./CategorySection";

interface CategoryGridProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Fetch event categories using SWR
  const { data: categories, error } = useSWR("event-categories", getEventCategories);

  if (error) return <div>Failed to load categories</div>;
  if (!categories) return <div>Loading...</div>;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-green-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-[#FF4B6E]" />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#FF4B6E]/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-lg font-medium text-[#FF4B6E] tracking-wider">
              DÉCOUVREZ
            </span>
          </div>

          <h2 className="text-6xl font-bold mb-8 text-[#2a2765] bg-clip-text">
            Nos Catégories
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Explorez notre sélection d'expériences uniques et découvrez
            <span className="text-[#00C9A7] font-semibold">
              {" "}
              les meilleures activités{" "}
            </span>
            à Lisbonne
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {categories?.map((category, index) => (
            <CategorySection
              key={category.id} // Use the category ID as the key
              index={index}
              icon={Music} // Replace with dynamic icons if needed
              label={category.title}
              color={category.color}
              description={category.description}
              gradient={`from-[${category.color}] via-[${category.color}/40] to-[${category.color}/10]`}
              accent={`from-[${category.color}] via-[${category.color}/40] to-[${category.color}/10]`}
              highlights={category.tags} // Use tags as highlights
              isSelected={selectedCategory === category.title}
              onHover={() => setHoveredCategory(category.title)}
              onClick={() => {
                setSelectedCategory(category.title);
                setHoveredIndex(index);
              }}
              hoverIndex={selectedCategory === category.title ? index : null}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-16"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CategoryGrid;