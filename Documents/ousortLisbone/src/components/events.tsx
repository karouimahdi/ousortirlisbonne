"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import { events } from '@/app/data/events';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hoverVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const EventsList: React.FC<{ category?: string }> = ({ category }) => {
  const router = useRouter();

  const filteredEvents = category 
    ? events.filter(event => event.category === category) 
    : events;

  return (
    <div className="space-y-4">
      {filteredEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full md:w-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <CardContent className="flex-1 p-4">
                  <h3 className="text-xl font-garage-gothic-bold text-[#2a2765] mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button 
                    className="mt-4 bg-[#37b7ab] hover:bg-[#2a2765] text-white"
                    onClick={() => router.push(`/events/${event.slug}`)}
                  >
                    Voir Détails
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventsList;