"use client";
import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation"; // Import useParams
import { articles } from "../../data/article";
import { fadeInUp, slideIn } from "../../animation";

const ArticlePage = () => {
  // Use useParams to access the slug
  const params = useParams();
  const slug = params.slug as string; // Cast slug to string

  // Find the article based on the slug
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-white to-[#B4E7E6]/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-garage-bold text-4xl text-[#2E2A5D]">
            Article non trouvé
          </h1>
          <Link href="/blog">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 bg-[#37b7ab] text-white px-6 py-2 rounded-full font-garage-regular hover:bg-[#ea3e4e] transition-colors duration-300"
            >
              Retour au Blog
            </motion.span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-[#B4E7E6]/20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div
          variants={slideIn}
          className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
        >
          <div className="relative h-[50vh]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2E2A5D] to-transparent opacity-75" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="font-garage-bold text-4xl text-white mb-2">
                  {article.title}
                </h1>
                <p className="font-garage-regular text-[#37b7ab] text-lg">
                  Faites de votre vie un évènement!
                </p>
              </motion.div>
            </div>
          </div>

          <div className="p-8 bg-white">
            <motion.div variants={fadeInUp} className="prose max-w-none">
              <div
                className="font-garage-regular text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <Link href="/blog">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-[#37b7ab] text-white px-6 py-2 rounded-full font-garage-regular hover:bg-[#ea3e4e] transition-colors duration-300"
                >
                  Retour au Blog
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ArticlePage;
