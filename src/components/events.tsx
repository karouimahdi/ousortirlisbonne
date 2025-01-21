
"use client"
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, ChevronRight, Users, Heart } from "lucide-react";
import { useRouter } from 'next/navigation';
import { events } from '@/app/data/events';
import { motion } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  slug: string;
  capacity?: string | number;
  price?: number;
}

interface EventsListProps {
  category?: string;
}

const EventsList: React.FC<EventsListProps> = ({ category }) => {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Filter events based on the selected category
  const filteredEvents = category
    ? events.filter((event) => event.category === category)
    : events;

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
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
                    scale: hoveredId === event.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-white/90 text-black hover:bg-white/75">
                    {event.category}
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
                        <span>{formatDate(event.date)}</span>
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
                        <span>{event.capacity || 'Unlimited'} places</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {event.price ? `${event.price}€` : 'Gratuit'}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6"
                        onClick={() => router.push(`/events/${event.slug}`)}
                      >
                        Voir Détails
                        <ChevronRight className="ml-2 w-4 h-4" />
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
  );
};

export default EventsList;