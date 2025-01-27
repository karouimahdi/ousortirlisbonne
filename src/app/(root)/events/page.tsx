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

   
      <main className="container mx-auto px-4 py-12">
       
        <CategoryGrid
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <EventsList events={filteredEvents} />
      </main>

   
    </motion.div>
  );
}
