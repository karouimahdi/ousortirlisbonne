"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowRight, User, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Article {
  id: number;
  title: string;
  image: string;
  description: string;
  content: string;
  slug: string;
  date: string;
  category: string;
  readTime?: string;
  author?: string;
  location?: string;
  tags?: string[];
}

interface ArticleListProps {
  articles: Article[];
  selectedCategory: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, selectedCategory }) => {
  const categoryColors = {
    'Activités': '#FF4B6E',
    'Clubs, Bars, Events': '#4A4FE4',
    'Restaurants, Rooftops': '#00C9A7',
    'Selon le profil': '#FF8F3F',
  };
  const router = useRouter();

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      layout
    >
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            layout: { duration: 0.3 }
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
                      backgroundColor: categoryColors[article.category as keyof typeof categoryColors],
                      color: 'white'
                    }}
                  >
                    {article.category}
                  </Badge>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
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

                {/* Additional Info */}
                <div className="mt-auto space-y-4">
                  {(article.author || article.location) && (
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {article.author && (
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                      )}
                      {article.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {article.location}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  {article.tags && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Read More Button */}
                  <motion.div 
                    className="inline-flex items-center gap-2 text-[#4A4FE4] font-medium mt-4"
                    whileHover={{ x: 5 }}
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ArticleList;