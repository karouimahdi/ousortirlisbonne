"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import CategoryGrid from "@/components/Category";
import EventsList from "@/components/events";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { events } from "../data/events";
import HeroSection from "@/components/Hero";

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
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
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
        <HeroSection
          imageUrl="/tage2min.jpg"
          title="Découvrez Nos  Meilleures évenements"
          description="Faites de votre vie un évènement!"
          buttonText="Découvrir Maintenant"
          buttonLink="#"
        />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Pass selectedCategory and setSelectedCategory to CategoryGrid */}
        <CategoryGrid
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Display filtered events */}
        <EventsList events={filteredEvents} />
      </main>

      {/* Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
