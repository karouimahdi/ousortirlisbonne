import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { articles } from '@/app/data/article';

const ArticleCards = () => {
  // Function to format the date in French
  const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  // Function to filter articles posted in the last 3 days
  const filterRecentArticles = () => {
    const today = new Date();
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(today.getDate() - 3); // Subtract 3 days from today

    return articles.filter((article) => {
      const articleDate = new Date(article.date);
      return articleDate >= threeDaysAgo && articleDate <= today;
    });
  };

  // Get the filtered articles
  const recentArticles = filterRecentArticles();

  return (
    <div className="space-y-8 p-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#2a2765] mb-8">
        Nos Derniers Articles
      </h2>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentArticles.map((article) => (
          <a 
            key={article.id} 
            href={`/blog/${article.slug}`}
            className="transition-transform duration-300 hover:scale-105"
          >
            <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl border border-gray-200">
              {/* Article Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2765]/80 to-transparent"></div>
              </div>
              
              {/* Article Header */}
              <CardHeader>
                <h3 className="text-xl font-bold line-clamp-2 text-[#2a2765]">
                  {article.title}
                </h3>
              </CardHeader>
              
              {/* Article Description */}
              <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3">
                  {article.description}
                </p>
              </CardContent>
              
              {/* Article Footer */}
              <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-200">
                {/* Date */}
                <div className="flex items-center text-sm text-[#2a2765]">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(article.date)}
                </div>

                {/* Read More Link */}
                <div className="flex items-center text-[#37b7ab] hover:text-[#37b7ab]/80 transition-colors">
                  Lire plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticleCards;