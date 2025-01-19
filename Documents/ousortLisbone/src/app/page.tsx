"use client";

import FeaturedCategories from '@/components/FeaturedCategory';
import FeaturedEvent from '@/components/FeaturedEvents';
import HeroSection from '@/components/Hero';
import Newsletter from '@/components/Newsletter';
import PromotionsBanner from '@/components/PromotionBanner';
import Testimonials from '@/components/Testimential';
import { motion } from 'framer-motion';
import React from 'react';

// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="mt-20"> {/* Add margin-top to account for fixed navbar */}
      {/* Hero Section with Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the section is in view
        variants={sectionVariants}
      >
        <HeroSection />
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
        <Testimonials />
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