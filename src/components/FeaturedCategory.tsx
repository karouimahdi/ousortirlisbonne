"use client";

import React, { useState } from 'react';
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
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import Link from 'next/link'; // Import the Link component

const FeaturedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    { 
      icon: Calendar, 
      label: 'Événements', 
      color: '#ea3e4e',
      description: 'Découvrez les meilleurs événements',
      gradient: 'from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent',
      accent: 'group-hover:border-[#ea3e4e]/50',
      highlights: ['Festivals', 'Concerts', 'Expositions'],
      route: '/events' // Add a route for each category
    },
    { 
      icon: Utensils, 
      label: 'Restaurants', 
      color: '#37b7ab',
      description: 'Explorez la gastronomie locale',
      gradient: 'from-[#37b7ab]/20 via-[#37b7ab]/10 to-transparent',
      accent: 'group-hover:border-[#37b7ab]/50',
      highlights: ['Cuisine locale', 'Vue mer', 'Gastronomique'],
      route: '/restaurants'
    },
    { 
      icon: Beer, 
      label: 'Bars', 
      color: '#2a2765',
      description: 'Les meilleurs bars de la ville',
      gradient: 'from-[#2a2765]/20 via-[#2a2765]/10 to-transparent',
      accent: 'group-hover:border-[#2a2765]/50',
      highlights: ['Rooftops', 'Cocktails', 'Ambiance'],
      route: '/bars'
    },
    { 
      icon: Music, 
      label: 'Clubs', 
      color: '#ea3e4e',
      description: 'Vivez la vie nocturne',
      gradient: 'from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent',
      accent: 'group-hover:border-[#ea3e4e]/50',
      highlights: ['DJ Sets', 'Dance Floor', 'VIP'],
      route: '/clubs'
    },
    { 
      icon: Ship, 
      label: 'Bateaux', 
      color: '#37b7ab',
      description: 'Aventures maritimes',
      gradient: 'from-[#37b7ab]/20 via-[#37b7ab]/10 to-transparent',
      accent: 'group-hover:border-[#37b7ab]/50',
      highlights: ['Croisières', 'Yacht', 'Sunset'],
      route: '/boats'
    },
    { 
      icon: Activity, 
      label: 'Activités', 
      color: '#2a2765',
      description: 'Expériences uniques',
      gradient: 'from-[#2a2765]/20 via-[#2a2765]/10 to-transparent',
      accent: 'group-hover:border-[#2a2765]/50',
      highlights: ['Sports', 'Culture', 'Nature'],
      route: '/activities'
    },
    { 
      icon: BookOpen, 
      label: 'Blog', 
      color: '#ea3e4e',
      description: 'Inspirations et conseils',
      gradient: 'from-[#ea3e4e]/20 via-[#ea3e4e]/10 to-transparent',
      accent: 'group-hover:border-[#ea3e4e]/50',
      highlights: ['Guides', 'Astuces', 'Actualités'],
      route: '/blog'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-[#ea3e4e]" />
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
            <span className="text-sm font-medium text-[#ea3e4e] tracking-wider">DÉCOUVREZ</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#2a2765] via-[#37b7ab] to-[#ea3e4e] text-transparent bg-clip-text">
            Nos Catégories
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explorez notre sélection d'expériences uniques et découvrez 
            <span className="text-[#37b7ab] font-medium"> les meilleures activités </span>
            à Lisbonne
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ icon: Icon, label, color, description, gradient, accent, highlights, route }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link
                href={route} // Use the route for navigation
                className={cn(
                  "group relative flex flex-col h-full p-6",
                  "bg-white rounded-3xl",
                  "transition-all duration-500",
                  "border-2 border-transparent",
                  accent,
                  "hover:shadow-2xl hover:-translate-y-1"
                )}
              >
                {/* Animated gradient background */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-500",
                  "bg-gradient-to-br",
                  gradient
                )}>
                  <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_40%,rgba(255,255,255,0.8)_45%,transparent_50%)] group-hover:translate-x-[400px] duration-&lsqb1500ms&rsqb transition-transform"/>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      className={cn(
                        "p-3 rounded-2xl",
                        "bg-gradient-to-br from-white to-gray-50",
                        "shadow-lg"
                      )}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={32} style={{ color }} />
                    </motion.div>
                    
                    <Star 
                      className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300" 
                      style={{ color }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {label}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {description}
                  </p>

                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4"
                      >
                        <div className="flex flex-wrap gap-2">
                          {highlights.map((highlight) => (
                            <span 
                              key={highlight}
                              className="text-xs px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
                              style={{ color }}
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div 
                    className="mt-auto flex items-center text-sm font-medium group/link" 
                    style={{ color }}
                  >
                    <span>Explorer</span>
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;