import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import EventsList from './events';

interface CategoryGridProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    {
      name: "Musique",
      icon: "🎵",
      color: '#FF4B6E',
      gradient: 'from-[#FF4B6E] via-[#FF4B6E]/40 to-[#FF4B6E]/10',
      description: "Découvrez des événements musicaux exceptionnels",
      highlights: ['Concerts', 'Festivals', 'DJ Sets']
    },
    {
      name: "Art",
      icon: "🎨",
      color: '#00C9A7',
      gradient: 'from-[#00C9A7] via-[#00C9A7]/40 to-[#00C9A7]/10',
      description: "Explorez le monde de l'art contemporain",
      highlights: ['Expositions', 'Galeries', 'Ateliers']
    },
    {
      name: "Gastronomie",
      icon: "🍽️",
      color: '#4A4FE4',
      gradient: 'from-[#4A4FE4] via-[#4A4FE4]/40 to-[#4A4FE4]/10',
      description: "Savourez des expériences culinaires uniques",
      highlights: ['Cuisine Locale', 'Dégustations', 'Chefs Étoilés']
    },
    {
      name: "Sport",
      icon: "⚽",
      color: '#FF8F3F',
      gradient: 'from-[#FF8F3F] via-[#FF8F3F]/40 to-[#FF8F3F]/10',
      description: "Participez à des événements sportifs passionnants",
      highlights: ['Compétitions', 'Marathons', 'Sports Nautiques']
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    selected: {
      scale: 0.95,
      transition: {
        type: "spring",
        bounce: 0.3
      }
    }
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative background elements */}
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
            <span className="text-lg font-medium text-[#FF4B6E] tracking-wider">DÉCOUVREZ</span>
          </div>
          
          <h2 className="text-6xl font-bold mb-8 text-[#2a2765] bg-clip-text">
            Nos Catégories
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Explorez notre sélection d'expériences uniques et découvrez 
            <span className="text-[#00C9A7] font-semibold"> les meilleures activités </span>
            à Lisbonne
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              animate={selectedCategory === category.name ? "selected" : "visible"}
              className="h-full"
            >
              <Card 
                className={cn(
                  "h-full cursor-pointer transform-gpu transition-all duration-300",
                  "hover:shadow-2xl bg-white/80 backdrop-blur-lg border-0",
                  selectedCategory === category.name && "scale-95 shadow-xl"
                )}
                onClick={() => setSelectedCategory(category.name)}
              >
                <CardContent className="h-full relative p-8">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 rounded-2xl`} />

                  <div className="relative z-10 h-full flex flex-col items-center text-center">
                    <motion.div
                      className="p-4 rounded-2xl bg-white shadow-lg mb-6 text-6xl"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {category.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4" style={{ color: category.color }}>
                      {category.name}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center mb-8">
                      {category.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="text-sm px-4 py-1.5 rounded-full bg-white shadow-sm"
                          style={{ color: category.color, backgroundColor: `${category.color}10` }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <motion.div 
                      className="mt-auto flex items-center gap-2 font-medium"
                      whileHover={{ x: 5 }}
                      style={{ color: category.color }}
                    >
                      <span>Explorer</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            >
              <EventsList category={selectedCategory} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CategoryGrid;