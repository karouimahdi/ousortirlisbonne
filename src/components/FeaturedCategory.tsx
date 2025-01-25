"use client";

import React, { useState } from "react";
import {
  Calendar,
  Utensils,
  Beer,
  Music,
  Ship,
  Activity,
  BookOpen,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import CategorySection from "./CategorySection";

const FeaturedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    {
      icon: Calendar,
      label: "Événements",
      color: "#ea3e4e",
      description: "Découvrez les meilleurs événements",
      gradient: "from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent",
      accent: "group-hover:border-[#ea3e4e]/50",
      highlights: ["Festivals", "Concerts", "Expositions"],
      route: "/events",
    },
    {
      icon: Utensils,
      label: "Restaurants",
      color: "#37b7ab",
      description: "Explorez la gastronomie locale",
      gradient: "from-[#37b7ab]/20 via-[#37b7ab]/10 to-transparent",
      accent: "group-hover:border-[#37b7ab]/50",
      highlights: ["Cuisine locale", "Vue mer", "Gastronomique"],
      route: "/restaurants",
    },
    {
      icon: Beer,
      label: "Bars",
      color: "#2a2765",
      description: "Les meilleurs bars de la ville",
      gradient: "from-[#2a2765]/20 via-[#2a2765]/10 to-transparent",
      accent: "group-hover:border-[#2a2765]/50",
      highlights: ["Rooftops", "Cocktails", "Ambiance"],
      route: "/bars",
    },
    {
      icon: Music,
      label: "Clubs",
      color: "#ea3e4e",
      description: "Vivez la vie nocturne",
      gradient: "from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent",
      accent: "group-hover:border-[#ea3e4e]/50",
      highlights: ["DJ Sets", "Dance Floor", "VIP"],
      route: "/clubs",
    },
    {
      icon: Ship,
      label: "Bateaux",
      color: "#37b7ab",
      description: "Aventures maritimes",
      gradient: "from-[#37b7ab]/20 via-[#37b7ab]/10 to-transparent",
      accent: "group-hover:border-[#37b7ab]/50",
      highlights: ["Croisières", "Yacht", "Sunset"],
      route: "/boats",
    },
    {
      icon: Activity,
      label: "Activités",
      color: "#2a2765",
      description: "Expériences uniques",
      gradient: "from-[#2a2765]/20 via-[#2a2765]/10 to-transparent",
      accent: "group-hover:border-[#2a2765]/50",
      highlights: ["Sports", "Culture", "Nature"],
      route: "/decouvertes",
    },
    {
      icon: BookOpen,
      label: "Blog",
      color: "#ea3e4e",
      description: "Inspirations et conseils",
      gradient: "from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent",
      accent: "group-hover:border-[#ea3e4e]/50",
      highlights: ["Guides", "Astuces", "Actualités"],
      route: "/blog",
    },
  ];

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-[#ea3e4e]" />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#ea3e4e]/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#ea3e4e] tracking-wider">
              DÉCOUVREZ
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-[#2a2765] bg-clip-text">
            Nos Catégories
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-lg">
            Explorez notre sélection d'expériences uniques et découvrez
            <span className="text-[#37b7ab] font-medium">
              {" "}
              les meilleures activités{" "}
            </span>
            à Lisbonne
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
          {categories.map((category, index) => (
            <CategorySection key={category.label} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
