"use client";

import React, { useState, useEffect, use } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Loader2 } from "lucide-react"; // Import Loader2 for spinner
import { events } from "@/app/(root)/data/events";
import { motion, AnimatePresence } from "motion/react";
import useSWR from "swr";
import { getEvent } from "./action";
import { useTranslation } from "@/translations/provider/localeProvider";

interface Coordinates {
  lat: number;
  lon: number;
}
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
  capacity: string | number;
  price?: number;
  time:string
}
async function getCoordinates(location: string): Promise<Coordinates> {
  try {
    const encodedLocation = encodeURIComponent(location);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodedLocation}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch coordinates");
    }

    const data = await response.json();

    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    } else {
      throw new Error("Location not found");
    }
  } catch (error) {
    console.error("Error getting coordinates:", error);
    return { lat: 48.8566, lon: 2.3522 };
  }
}

export default function EventDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const {translations}=useTranslation()
  const { slug } = use(params);
  const { data: event } = useSWR(
    useSWR<Event>,
    async (_) => await getEvent(slug)
  );
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 48.8566,
    lon: 2.3522,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCoordinates() {
      if (event?.location) {
        setIsLoading(true);
        const coords = await getCoordinates(event.location);
        setCoordinates(coords);
        setIsLoading(false);
      }
    }

    fetchCoordinates();
  }, [event?.location]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Animated Cover Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 mb-8"
      >
        <img
        src={
          typeof event?.image === "string"
            ? event.image
            : (event?.image.url ?? undefined)
        }
          alt="Event cover"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Event Details Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-8">
          <CardContent className="p-6">
            <h1 className="text-3xl font-garage-gothic-bold text-[#2a2765] mb-4">
              {event?.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#ea3e4e]" />
                <span>{event?.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-[#ea3e4e]" />
                <span>{event?.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#ea3e4e]" />
                <span>{event?.location}</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-garage-gothic-bold text-[#2a2765] mb-4">
                {translations["describ"]}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {event?.description}
              </p>
            </motion.div>
            {/* Enhanced Animated Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-gray-100 shadow-lg"
            >
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-[#37b7ab] animate-spin" />
                </div>
              ) : (
                <>
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lon - 0.01},${coordinates.lat - 0.01},${coordinates.lon + 0.01},${coordinates.lat + 0.01}&layer=mapnik&marker=${coordinates.lat},${coordinates.lon}`}
                    style={{ border: 0, borderRadius: "0.5rem" }}
                    title="Event location map"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-sm p-2 text-center">
                  {translations["coordinatesLabel"]} {coordinates.lat.toFixed(4)},{" "}
                    {coordinates.lon.toFixed(4)}
                  </div>
                </>
              )}
            </motion.div>

            {/* Animated Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="w-full bg-[#37b7ab] rounded-full hover:bg-[#ea3e4e] text-lg py-6"
                onClick={() => {
                  /* Handle reservation */
                }}
              >
{translations["bookNow"]}              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Description Section */}

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center text-xl font-garage-gothic-regular italic text-[#2a2765]"
      >
{translations["makeLifeAnEvent"]}      </motion.div>
    </div>
  );
}
