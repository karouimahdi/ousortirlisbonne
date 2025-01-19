// app/blog/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { articles } from "../data/article"; // Assurez-vous que le chemin est correct

// Variantes d'animation pour Framer Motion
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Délai entre les animations des enfants
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-[#B4E7E6]/20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Section du titre et du slogan */}
        <motion.div
          className="text-center mb-24 relative overflow-hidden" // Augmenter mb-16 à mb-24 pour plus d'espace
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          {/* Arrière-plan animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#2E2A5D]/20 to-[#37b7ab]/20 rounded-lg" // Augmenter l'opacité du gradient
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Titre avec gradient animé et soulignement */}
          <motion.h1
            className="font-garage-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#2E2A5D] to-[#37b7ab] mb-6 relative z-10" // Augmenter text-6xl à text-7xl et mb-4 à mb-6
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
          >
            Notre Blog
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1.5 bg-[#37b7ab]" // Augmenter h-1 à h-1.5
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.h1>

          {/* Slogan avec animation */}
          <motion.p
            className="font-garage-regular text-2xl text-[#37b7ab] relative z-10" // Augmenter text-xl à text-2xl
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
            }}
          >
            Faites de votre vie un évènement!
          </motion.p>
        </motion.div>

        {/* Grille d'articles */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={scaleUp}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
            >
              {/* Image miniature avec effet de zoom au survol */}
              <div className="relative overflow-hidden h-48">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenu de l'article */}
              <div className="p-6">
                <h2 className="font-garage-bold text-2xl text-[#2E2A5D] mb-3">
                  {article.title}
                </h2>
                <p className="font-garage-regular text-gray-600 mb-6 text-sm">
                  {article.description}
                </p>

                {/* Bouton "Lire Plus" avec animation */}
                <Link href={`/blog/${article.slug}`}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-[#37b7ab] text-white px-6 py-2 rounded-full font-garage-regular text-sm hover:bg-[#ea3e4e] transition-colors duration-300"
                  >
                    Lire Plus
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPage;