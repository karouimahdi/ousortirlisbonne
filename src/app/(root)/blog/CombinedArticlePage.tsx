"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Sparkles,
  LandPlot,
  Music,
  Palette,
  Utensils,
  Clapperboard,
  Theater,
  Dumbbell,
  Users2,
  BrainCog,
  Globe,
  Handshake,
  CircleDot,
  Target,
  CalendarDays,
} from "lucide-react";import CategorySection from "@/components/CategorySection";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/provider/localeProvider";

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  slug: string;
  date: string;
  category: {
    id: string;
    title: string;
    color: string;
  };
  readTime: string;
  tags: string[];
  featured: boolean;
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  priority: number;
  tag:string[];
}

interface CombinedArticlePageProps {
  articles: Article[];
  categories: Category[];
}
const iconMap: { [key: string]: React.ComponentType<any> } = {
  'Musique': Music,
  'Art': Palette,
  'Cinéma': Clapperboard,
  'Théâtre et spectacles': Theater,
  'Gastronomie': Utensils,
  'Sport': Dumbbell,
  'Famille et enfants': Users2,
  'Développement personnel': BrainCog,
  'Culture et tradition': Globe,
  'Business et réseautage': Handshake,
  'Autres': CircleDot,
};
const CombinedArticlePage = ({ articles, categories }: CombinedArticlePageProps) => {
 
   const { translations } = useTranslation();
 
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category.id === selectedCategory)
    : articles;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/20 to-green-100/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Category Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-[#FF4B6E]" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#FF4B6E]/20"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="text-lg font-medium text-[#FF4B6E] tracking-wider">
{translations["discover"]}                </span>
              </div>

              <h2 className="text-6xl font-bold mb-8 bg-clip-text text-[#2a2765]">
{translations["ourArticles"]}              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
{translations["exploreArticles"]}                <span className="text-[#00C9A7] font-semibold">
                  {" "}
                  {translations["bestExperiences"]}{" "}
                </span>
                {translations["bestExperiences1"]}              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {categories.map((category, index) => (
                <CategorySection
                  key={category.id}
                                   icon={iconMap[category.icon] || Target}
                 
                  label={category.title}
                  color={category.color}
                  description={category.description}
                  gradient='bg-gradient-to-r from-[#37b7ab] via-[rgba(55,183,171,0.4)] to-[rgba(55,183,171,0.1)]'
                  accent=""
                  highlights={category.tag
                  }
                  index={index}
                  onClick={() => setSelectedCategory(category.id)}
                  isSelected={selectedCategory === category.id}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Article List Section */}
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
                        ? categories.find(c => c.id === selectedCategory)?.color
                        : "#4A4FE4",
                    }}
                  >
                    {selectedCategory
                      ? categories.find(c => c.id === selectedCategory)?.title
                      : translations["allArticles"]}
                  </motion.h2>
                  <p className="text-gray-600 text-lg">
                    {selectedCategory
                      ? `${translations["categoryDescription"]} ${categories.find(c => c.id === selectedCategory)?.title}`
                      : `${translations["exploreArticles"]}`}
                  </p>
                </div>

                {selectedCategory && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 hover:text-gray-700 flex items-center gap-2 text-sm"
                    onClick={() => setSelectedCategory(null)}
                  >
{translations["viewAllArticles"]}                  </motion.button>
                )}
              </div>

              {/* Articles grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                {filteredArticles?.map((article, index) => (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      layout: { duration: 0.3 },
                    }}
                  >
                    <Card
                      className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur cursor-pointer"
                      onClick={() => router.push(`/blog/${article.slug}`)}
                    >
                      <CardContent className="p-0 h-full flex flex-col">
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/30 transition-colors duration-300" />
                          <motion.img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700"
                            whileHover={{ scale: 1.05 }}
                          />
                          <div className="absolute top-4 left-4 z-20">
                            <Badge
                              className="px-3 py-1.5 text-sm font-medium"
                              style={{
                                backgroundColor: article.category.color,
                                color: "white",
                              }}
                            >
                              {article.category.title}
                            </Badge>
                          </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="w-4 h-4" />
                              {new Date(article.date).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </div>
                            {article.readTime && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {article.readTime}
                              </div>
                            )}
                          </div>

                          <h4 className="text-xl font-semibold mb-3 group-hover:text-[#4A4FE4] transition-colors duration-300">
                            {article.title}
                          </h4>

                          <p className="text-gray-600 mb-6 line-clamp-3">
                            {article.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CombinedArticlePage;
