"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryGrid from "@/components/Category";
import EventsList from "@/components/events";
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { events } from '../data/events';

export default function EventsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Filter events based on selected category
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#2a2765]/5 to-[#37b7ab]/5"
    >
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <AnimatePresence initial={false} custom={1}>
          <motion.div
            key={currentSlide}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full">
              <img
                src={events[currentSlide].image}
                alt={events[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                  >
                    <span className="text-sm font-medium">{events[currentSlide].category}</span>
                  </motion.div>
                  
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-garage-gothic-bold mb-6"
                  >
                    {events[currentSlide].title}
                  </motion.h2>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-white/90"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{formatDate(events[currentSlide].date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{events[currentSlide].time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>{events[currentSlide].location}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Users className="w-5 h-5" />
                      <span>{events[currentSlide].capacity} places</span>
                    </div>
                    <Button className="bg-white text-black hover:bg-white/90">
                      Réserver maintenant
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Pass selectedCategory and setSelectedCategory to CategoryGrid */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Display filtered events */}
        <EventsList
          events={filteredEvents}
          category={selectedCategory}
        />
      </main>

      {/* Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span className="font-medium">Contactez-nous</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}