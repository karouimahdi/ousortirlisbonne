"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Users, Sunset, Waves, MapPin, Clock } from "lucide-react";
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { privateBoats, groupCruises } from '../data/boats';
import BoatHeroSlider from '@/components/BoatHero';

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardHover = {
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

export default function BoatsPage() {
  // Use useInView to detect when elements are in the viewport
  const heroRef = React.useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const privateBoatsRef = React.useRef(null);
  const privateBoatsInView = useInView(privateBoatsRef, { once: true });

  const groupCruisesRef = React.useRef(null);
  const groupCruisesInView = useInView(groupCruisesRef, { once: true });

  const sloganRef = React.useRef(null);
  const sloganInView = useInView(sloganRef, { once: true });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Now using BoatHeroSlider */}
      <BoatHeroSlider heroRef={heroRef} />

      {/* Categories Section */}
      <div id="boats" className="max-w-7xl mx-auto px-4 py-16">
        {/* Private Rentals */}
        <section className="mb-16" ref={privateBoatsRef}>
          <h2 className="text-4xl font-garage-gothic-bold text-[#2a2765] mb-8">
            Locations Privées
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={privateBoatsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {privateBoats.map((boat) => (
              <motion.div key={boat.id} variants={fadeInUp}>
                <Link href={`/boats/${boat.slug}`}>
                  <motion.div
                    className="hover:shadow-xl transition-all duration-300"
                    whileHover="hover"
                    variants={cardHover}
                  >
                    <Card>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={boat.image}
                          alt={boat.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <Anchor className="w-5 h-5 text-[#ea3e4e]" />
                          <span className="font-garage-gothic-bold text-[#2a2765]">{boat.type}</span>
                        </div>
                        <h3 className="text-xl font-garage-gothic-bold text-[#2a2765] mb-2">
                          {boat.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-[#ea3e4e]" />
                          <span>{boat.capacity}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-[#ea3e4e]" />
                          <span>{boat.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-[#ea3e4e]" />
                          <span>{boat.duration}</span>
                        </div>
                        <p className="text-[#37b7ab] font-garage-gothic-bold mt-4">{boat.price}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Group Cruises */}
        <section className="bg-gradient-to-r from-[#2a2765] to-[#37b7ab] py-16" ref={groupCruisesRef}>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-garage-gothic-bold text-white mb-8">
              Croisières de Groupe
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              animate={groupCruisesInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {groupCruises.map((cruise) => (
                <motion.div key={cruise.id} variants={fadeInUp}>
                  <Link href={`/boats/${cruise.slug}`}>
                    <motion.div
                      className="hover:shadow-xl transition-all duration-300"
                      whileHover="hover"
                      variants={cardHover}
                    >
                      <Card>
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={cruise.image}
                            alt={cruise.title}
                            className="w-full h-full object-cover rounded-t-lg"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-2">
                            {cruise.title.includes("Soleil") ? (
                              <Sunset className="w-5 h-5 text-[#ea3e4e]" />
                            ) : (
                              <Waves className="w-5 h-5 text-[#ea3e4e]" />
                            )}
                            <span className="font-garage-gothic-bold text-[#2a2765]">{cruise.type}</span>
                          </div>
                          <h3 className="text-xl font-garage-gothic-bold text-[#2a2765] mb-2">
                            {cruise.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-[#ea3e4e]" />
                            <span>{cruise.capacity}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-[#ea3e4e]" />
                            <span>{cruise.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-[#ea3e4e]" />
                            <span>{cruise.duration}</span>
                          </div>
                          <p className="text-[#37b7ab] font-garage-gothic-bold mt-4">{cruise.price}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* Slogan */}
      <motion.div
        className="text-center text-2xl font-cursive italic text-[#2a2765] py-12"
        ref={sloganRef}
        initial={{ opacity: 0, y: 50 }}
        animate={sloganInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Faites de votre vie un évènement!
      </motion.div>
    </div>
  );
}