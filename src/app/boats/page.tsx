"use client";
import React from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Sunset, Heart, Anchor, Fish, Sailboat, PartyPopper } from "lucide-react";
import Link from 'next/link';
import BoatHeroSlider from '@/components/BoatHero';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } }
};

const cardHover = {
  hover: { 
    y: -4,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  }
};

const categories = [
  {
    id: 1,
    title: "Lisbonne",
    subcategories: [
      {
        type: "En groupe",
        items: [
          { title: "Croisières en journée", slug: "croisiere-journee" },
          { title: "Croisières au coucher de soleil", slug: "croisiere-coucher" },
          { title: "Boat Party avec baignade", slug: "boat-party" },
          { title: "Croisières du nouvel an", slug: "croisiere-nouvel-an-lisbonne" }
        ]
      },
      {
        type: "Privée",
        items: [
          { title: "Croisière Romantique", slug: "croisiere-romantique" },
          { title: "Location de bateau de 4 à 18 personnes", slug: "location-bateau-4-18-lisbonne" },
          { title: "Location de bateau de 19 à 80 personnes", slug: "location-bateau-19-80-lisbonne" },
          { title: "Croisières privée du nouvel an", slug: "croisiere-nouvel-an-privee-lisbonne" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Cascais",
    subcategories: [
      {
        type: "Privée",
        items: [
          { title: "Croisières ou Session Pêche", slug: "croisiere-peche-cascais" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Setubal – Troia – Arrabida",
    subcategories: [
      {
        type: "Privée",
        items: [
          { title: "Croisières en bateau à moteur ou de plaisance", slug: "croisiere-bateau-moteur-setubal" }
        ]
      }
    ]
  }
];

const CategoryIcon = ({ title }: { title: string }) => {
  const iconClass = "w-5 h-5 text-[#37b7ab]";
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm">
      {title.includes("Romantique") ? <Heart className={iconClass} /> :
       title.includes("Pêche") ? <Fish className={iconClass} /> :
       title.includes("Nouvel an") ? <PartyPopper className={iconClass} /> :
       title.includes("Soleil") ? <Sunset className={iconClass} /> :
       title.includes("Boat Party") ? <Sailboat className={iconClass} /> :
       <Anchor className={iconClass} />}
    </div>
  );
};
export default function BoatsPage() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const prefersReducedMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-50">
     <BoatHeroSlider heroRef={heroRef}/>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="space-y-8"
        >
          {categories.map((category) => (
            <motion.section 
              key={category.id}
              variants={prefersReducedMotion ? {} : fadeIn}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.005 }}
            >
              {/* Header with progressive disclosure */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-[#2a2765]">
                  {category.title}
                </h2>
               
              </div>
              
              <div className="space-y-6">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.type}>
                    <div className="flex items-center mb-4 space-x-3">
                      <h3 className="text-sm font-medium text-[#37b7ab] uppercase tracking-wide">
                        {subcategory.type}
                      </h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#37b7ab]/30 to-transparent" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {subcategory.items.map((item) => (
                        <motion.div
                          key={item.slug}
                          whileHover="hover"
                          whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                          variants={prefersReducedMotion ? {} : cardHover}
                        >
                          <Link 
                            href={`/boats/${item.slug}`}
                            className="group block relative"
                          >
                            <div className="flex items-center p-4 rounded-xl border border-gray-100 hover:border-[#37b7ab]/30 transition-colors bg-white">
                              <CategoryIcon title={item.title} />
                              
                              <div className="ml-4 flex-1">
                                <span className="text-gray-700 group-hover:text-[#2a2765] transition-colors">
                                  {item.title}
                                </span>
                                <motion.div 
                                  className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#37b7ab]/10"
                                  initial={false}
                                  animate={{ opacity: 0 }}
                                  whileHover={{ opacity: 1 }}
                                />
                              </div>
                              
                              <motion.div
                                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                initial={false}
                              >
                                →
                              </motion.div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
