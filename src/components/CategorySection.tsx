



"use client"
import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import Link from 'next/link';

interface CategoryProps {
  icon: React.ElementType;
  label: string;
  color: string;
  description: string;
  gradient: string;
  accent: string;
  highlights: string[];
  route?: string; // Rendue optionnelle
  index?: number;
  hoverIndex?: number | null;
  onHover?: (index: number | null) => void;
  onClick?: () => void;
  isSelected?: boolean;

}

const CategorySection = ({
  icon: Icon,
  label,
  color,
  description,
  gradient,
  accent,
  highlights,
  route,
  index = 0,
  onClick,
  isSelected = false,

}: CategoryProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Création du contenu commun
  const Content = () => (
    <div className={cn(
      "group relative flex flex-col h-full p-6",
      "bg-white rounded-3xl",
      "transition-all duration-500",
      "border-2 border-transparent",
      accent,
      (isHovered || isSelected) && "shadow-2xl -translate-y-1", // Style permanent si sélectionné
      !isSelected && "hover:shadow-2xl hover:-translate-y-1" // Hover normal si non sélectionné
    )}>
       <div className={cn(
          "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100",
          "transition-opacity duration-500",
          "bg-gradient-to-br",
          gradient
        )}>
          <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_40%,rgba(255,255,255,0.8)_45%,transparent_50%)] group-hover:translate-x-[400px]  transition-transform"/>
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
            {isHovered||isSelected && (
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
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {route ? (
        <Link href={route} >
          <div onClick={onClick}>
            <Content />
          </div>
        </Link>
      ) : (
        <div onClick={onClick}>
          <Content />
        </div>
      )}
    </motion.div>
  );
};

export default CategorySection;