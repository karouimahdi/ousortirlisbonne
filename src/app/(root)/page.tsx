"use client";

import ArticleCards from "@/components/Articlelist";
import FAQ from "@/components/Faq";
import FeaturedCategories from "@/components/FeaturedCategory";
import FeaturedEvent from "@/components/FeaturedEvents";
import HeroSection from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PromotionsBanner from "@/components/PromotionBanner";
import {
  TestimonialsSection,
} from "@/components/Testimential";
import { motion } from "motion/react";
import React from "react";

// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="mt-20">
      {" "}
      {/* Add margin-top to account for fixed navbar */}
      {/* Hero Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the section is in view
        variants={sectionVariants}
      >
        <HeroSection
          imageUrl="/tage2min.jpg"
          title="Découvrez les Meilleures Expériences"
          description="Explorez les événements, restaurants et activités incontournables"
          buttonText="Découvrir Maintenant"
          buttonLink="/decouvertes"
          altText="Vue panoramique de Lisbonne"
        />
      </motion.div>
      {/* Featured Categories with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ delay: 0.2 }}
      >
        <FeaturedCategories />
      </motion.div>
      {/* Featured Events with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ delay: 0.4 }}
      >
        <FeaturedEvent />
      </motion.div>
      {/* Promotions Banner with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ delay: 0.6 }}
      >
        <PromotionsBanner />
      </motion.div>
      {/* Testimonials with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ delay: 0.8 }}
      >
        <TestimonialsSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ delay: 0.8 }}
      >
        <FAQ />
      </motion.div>
      {/* Newsletter with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ delay: 1.0 }}
      >
        <Newsletter />
      </motion.div>
    </div>
  );
};

export default HomePage;
