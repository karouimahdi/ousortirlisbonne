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
import { useTranslation } from "@/translations/provider/localeProvider";

const FeaturedCategories = () => {
  const {translations}=useTranslation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    {
      icon: Calendar,
      label: translations["events"],
      color: "#ea3e4e",
      description: translations["discoverBestEvents"],
      gradient: "from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent",
      accent: "group-hover:border-[#ea3e4e]/50",
      highlights: [translations["festivals"], translations["concerts"], translations["exhibitions"]],
      route: "/events",
    },
    {
      icon: Utensils,
      label: translations["restaurant"],
      color: "#37b7ab",
      description: translations["exploreLocalCuisine"],
      gradient: "from-[#37b7ab]/20 via-[#37b7ab]/10 to-transparent",
      accent: "group-hover:border-[#37b7ab]/50",
      highlights: [translations["localCuisine"], translations["seaView"], translations["gastronomic"]],
      route: "/restaurants",
    },
    {
      icon: Beer,
      label: translations["bars"],
      color: "#2a2765",
      description: translations["bestBarsInTheCity"],
      gradient: "from-[#2a2765]/20 via-[#2a2765]/10 to-transparent",
      accent: "group-hover:border-[#2a2765]/50",
      highlights: [translations["rooftops"], translations["cocktails"], translations["ambiance"]],
      route: "/bars",
    },
    {
      icon: Music,
      label: translations["clubs"],
      color: "#ea3e4e",
      description: translations["liveTheNightlife"],
      gradient: "from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent",
      accent: "group-hover:border-[#ea3e4e]/50",
      highlights: [translations["djSets"],translations["danceFloor"], translations["vip"]],
      route: "/clubs",
    },
    {
      icon: Ship,
      label: translations["boats"],
      color: "#37b7ab",
      description: translations["maritimeAdventures"],
      gradient: "from-[#37b7ab]/20 via-[#37b7ab]/10 to-transparent",
      accent: "group-hover:border-[#37b7ab]/50",
      highlights: [translations["cruises"], translations["yacht"], translations["sunset"]],
      route: "/croisiere",
    },
    {
      icon: Activity,
      label: translations["activities"],
      color: "#2a2765",
      description: translations["uniqueExperience"],
      gradient: "from-[#2a2765]/20 via-[#2a2765]/10 to-transparent",
      accent: "group-hover:border-[#2a2765]/50",
      highlights: [translations["sports"], translations["culture"], translations["nature"]],
      route: "/decouvertes",
    },
    {
      icon: BookOpen,
      label: translations["blog"],
      color: "#ea3e4e",
      description: translations["inspirationsAndTips"],
      gradient: "from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent",
      accent: "group-hover:border-[#ea3e4e]/50",
      highlights: [translations["guides"], translations["tips"], translations["news"]],
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
{translations["discover"]}            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-[#2a2765] bg-clip-text">
{translations["ourCategories"]}          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-lg">
{translations["exploreOurSelectionOfUniqueExperiencesAndDiscoverTheBestActivitiesInLisbon"]}            <span className="text-[#37b7ab] font-medium">
              {" "}
           {translations["best"]}{" "}
            </span>
         {translations["inLisb"]}
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
