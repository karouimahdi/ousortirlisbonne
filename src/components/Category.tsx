import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
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
      gradient: "from-indigo-900 to-indigo-700",
      description: "Découvrez des événements musicaux exceptionnels"
    },
    {
      name: "Art",
      icon: "🎨",
      gradient: "from-teal-600 to-teal-400",
      description: "Explorez le monde de l'art contemporain"
    },
    {
      name: "Gastronomie",
      icon: "🍽️",
      gradient: "from-rose-600 to-rose-400",
      description: "Savourez des expériences culinaires uniques"
    },
    {
      name: "Sport",
      icon: "⚽",
      gradient: "from-blue-900 to-blue-700",
      description: "Participez à des événements sportifs passionnants"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const overlayVariants: Variants = {
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    initial: {
      opacity: 0,
      y: 20
    }
  };

  return (
    <div className="px-4 py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {categories.map((category) => (
          <motion.div
            key={category.name}
            variants={cardVariants}
            animate={selectedCategory === category.name ? "selected" : "visible"}
            onHoverStart={() => setHoveredCategory(category.name)}
            onHoverEnd={() => setHoveredCategory(null)}
            className="h-full"
          >
            <Card
              className={`h-full cursor-pointer transition-all duration-300 border-2 
                ${selectedCategory === category.name 
                  ? 'border-white shadow-xl' 
                  : 'border-transparent hover:shadow-2xl'}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <CardContent className={`h-full relative overflow-hidden bg-gradient-to-br ${category.gradient} p-8`}>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <motion.span
                    className="text-6xl mb-6"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {category.icon}
                  </motion.span>
                  
                  <h3 className="text-2xl font-garage-gothic-bold text-white mb-4">
                    {category.name}
                  </h3>

                  <motion.div
                    variants={overlayVariants}
                    initial="initial"
                    animate={hoveredCategory === category.name ? "hover" : "initial"}
                    className="text-white/90 text-sm text-center"
                  >
                    {category.description}
                    <div className="mt-4 flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </motion.div>
                </div>

                {/* Background decoration */}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
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
          >
            <EventsList category={selectedCategory} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryGrid;