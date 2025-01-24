"use client";
import React, { useState } from "react";
import ArticleList from "@/components/Articlelist";
import ArticleGrid from "@/components/categoryArt";
import { motion, AnimatePresence } from "motion/react";

import { articles } from "../data/article"; // Import des données

const categoryColors = {
  Activités: "#FF4B6E",
  "Clubs, Bars, Events": "#4A4FE4",
  "Restaurants, Rooftops": "#00C9A7",
  "Selon le profil": "#FF8F3F",
};

const ArticlePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/20 to-green-100/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <ArticleGrid
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory || "all"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-12">
                <div>
                  <motion.h2
                    className="text-4xl font-bold mb-4"
                    style={{
                      color: selectedCategory
                        ? categoryColors[
                            selectedCategory as keyof typeof categoryColors
                          ]
                        : "#4A4FE4",
                    }}
                  >
                    {selectedCategory || "Tous nos Articles"}
                  </motion.h2>
                  <p className="text-gray-600 text-lg">
                    {selectedCategory
                      ? `Découvrez nos articles dans la catégorie ${selectedCategory}`
                      : "Explorez notre sélection des articles sur Lisbonne"}
                  </p>
                </div>

                {selectedCategory && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 hover:text-gray-700 flex items-center gap-2 text-sm"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Voir tous les articles
                  </motion.button>
                )}
              </div>

              {/* Articles section */}
              <ArticleList
                articles={filteredArticles}
                selectedCategory={selectedCategory || "all"}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
