"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Target, Music, Utensils, Users } from 'lucide-react';
import { cn } from "@/lib/utils";
import CategorySection from './CategorySection';

interface ArticleGridProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    {
      name: "Activités",
      icon: Target,
      color: '#FF4B6E',
      gradient: 'from-[#FF4B6E] via-[#FF4B6E]/40 to-[#FF4B6E]/10',
      description: "Découvrez les meilleures activités à faire",
      highlights: ['Culture', 'Sport', 'Loisirs'],
    },
    {
      name: "Clubs, Bars, Events",
      icon: Music,
      color: '#4A4FE4',
      gradient: 'from-[#4A4FE4] via-[#4A4FE4]/40 to-[#4A4FE4]/10',
      description: "Où aller écouter de la musique et danser",
      highlights: ['Nightlife', 'Live Music', 'Concerts'],
    },
    {
      name: "Restaurants, Rooftops",
      icon: Utensils,
      color: '#00C9A7',
      gradient: 'from-[#00C9A7] via-[#00C9A7]/40 to-[#00C9A7]/10',
      description: "Spécial restauration pour tout les goûts, toutes les bourses",
      highlights: ['Gastronomie', 'Vue Panoramique', 'Ambiance'],
    },
    {
      name: "Selon le profil",
      icon: Users,
      color: '#FF8F3F',
      gradient: 'from-[#FF8F3F] via-[#FF8F3F]/40 to-[#FF8F3F]/10',
      description: "Que faire selon le profil de mon groupe",
      highlights: ['Famille', 'Amis', 'Couples'],
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

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/20 to-green-100/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
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
          
          <h2 className="text-6xl font-bold mb-8 bg-clip-text text-[#2a2765]">
            Nos Articles
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
            Explorez nos articles et guides pour découvrir
            <span className="text-[#00C9A7] font-semibold"> les meilleures expériences </span>
            à vivre
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {categories.map((category, index) => (
            <CategorySection
              key={category.name}
              index={index}
              icon={category.icon}
              label={category.name}
              color={category.color}
              description={category.description}
              gradient={category.gradient}
              accent={category.gradient}
              highlights={category.highlights}
              onClick={() => setSelectedCategory(category.name)}
              isSelected={selectedCategory === category.name}
             
              
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleGrid;