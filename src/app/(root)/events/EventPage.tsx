"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import { useTranslation } from "@/translations/provider/localeProvider";

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  category: {
    id: string;
    title: string;
    color: string;
  };
  location: string;
  capacity: string;
  price?: string;
  time:string
}

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  priority: number;
  tags: string[];
}

interface CombinedEventsPageProps {
  events: Event[];
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
const CombinedEventsPage: React.FC<CombinedEventsPageProps> = ({
  events,
  categories,
}) => {
  const {translations}=useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

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


  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category.title === selectedCategory)
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
          title={translations["discoverOurBestEvents"]}
          description={translations["makeYourLifeAnEvent"]}
          buttonText={translations["discoverNow"]}
          buttonLink="#"
        />
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Category Grid Section */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-green-200/30 rounded-full blur-3xl" />
          </div>

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
                  {translations["discover"]}
                </span>
              </div>

              <h2 className="text-6xl font-bold mb-8 text-[#2a2765] bg-clip-text">
              {translations["discover"]}
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
{translations["exploreOurSelectionOfUniqueExperiencesAndDiscoverTheBestActivitiesInLisbon"]}                <span className="text-[#00C9A7] font-semibold">
                  {" "}
                  {translations["best"]}{" "}
                </span>
{translations["inLisb"]}              </p>
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
                  icon={iconMap[category.icon] || Sparkles}
                  label={category.title}
                  color={category.color}
                  description={category.description}
                  gradient='bg-gradient-to-r from-[#37b7ab] via-[rgba(55,183,171,0.4)] to-[rgba(55,183,171,0.1)]'
                  accent={category.color}
                  highlights={category.tags}
                  index={index}
                  onClick={() => setSelectedCategory(category.title)}
                  isSelected={selectedCategory === category.title}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Events List Section */}
        <div className="grid gap-8 py-4">
          {filteredEvents.map((event: Event, index: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onHoverStart={() => setHoveredId(event.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative md:w-72 overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt={event.title}
                      className="h-56 md:h-full w-full object-cover"
                      animate={{
                        scale: hoveredId === event.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-white/90 text-black hover:bg-white/75">
                        {event.category.title}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="flex-1 p-6">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {event.title}
                          </h3>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Heart className="w-6 h-6" />
                          </motion.button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{event.time}</span>
                      </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span>{event.capacity } places</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          {event.price }
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            className="bg-[#ea3e4e] hover:bg-[#37b7ab] rounded-full text-white px-6"
                            onClick={() => router.push(`/events/${event.slug}`)}
                          >
{translations["viewDetails"]}                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default CombinedEventsPage;