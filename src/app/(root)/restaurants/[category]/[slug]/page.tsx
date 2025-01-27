"use client";

import { MapPin, Phone, Clock, DollarSign, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import ImageGallery from "@/components/ImageGallery";
import { Restaurant } from "@/types";
import useSWR from "swr";
import { getRestorant } from "./action";

interface Coordinates {
  lat: number;
  lon: number;
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
    // Default to Paris coordinates if geocoding fails
    return { lat: 48.8566, lon: 2.3522 };
  }
}

export default function VenuePage({
  params,
}: {
  params: Promise< {category:string,slug: string }>;
}) {
  const { slug } = use(params);
  const { category } = use(params);
  const { data: venue } = useSWR(
    useSWR<Restaurant>,
    async (_) => await getRestorant(slug)
  ); 
  
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: 48.8566,
    lon: 2.3522,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCoordinates() {
      if (venue?.location) {
        setIsLoading(true);
        const coords = await getCoordinates(venue.location);
        setCoordinates(coords);
        setIsLoading(false);
      }
    }

    fetchCoordinates();
  }, [venue?.location]);

  if (!venue) {
return null   }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link
        href={`/restaurant/${category}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Retour à la liste
      </Link>

      {/* Inspirational Text with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-2xl font-garage-gothic-regular italic text-[#2a2765] mb-8"
      >
        Faites de votre vie un évènement!
      </motion.div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImageGallery
            images={(venue.images?.map((image) => {return(typeof image.image === "string"
              ? image.image
              : (image.image.url )) as string}))as string[]}
            venueName={venue.name}
          />
        </motion.div>

        {/* Right Column - Venue Details */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-3xl font-bold mb-4">{venue.name}</h1>
            <p className="text-gray-600 leading-relaxed">{venue.description}</p>
          </motion.div>

          {/* Info Cards with Hover Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <MapPin className="w-5 h-5 text-blue-600 mt-1" />,
                title: "Adresse",
                content: venue.location,
              },
              {
                icon: <Phone className="w-5 h-5 text-blue-600 mt-1" />,
                title: "Téléphone",
                content: venue.contact.phone,
              },
              {
                icon: <Clock className="w-5 h-5 text-blue-600 mt-1" />,
                title: "Horaires",
                content: venue.contact.hours,
              },
              {
                icon: <DollarSign className="w-5 h-5 text-blue-600 mt-1" />,
                title: "Prix",
                content: venue.price,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4 flex items-start space-x-3">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100 shadow-lg"
          >
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-400 animate-pulse" />
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
                  title="Venue location map"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-sm p-2 text-center">
                  Coordinates: {coordinates.lat.toFixed(4)},{" "}
                  {coordinates.lon.toFixed(4)}
                </div>
              </>
            )}
          </motion.div>

          {/* Booking Button with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button className="w-full py-6 text-lg bg-[#37b7ab] hover:bg-[#2a2765] transition-colors duration-300">
              Réserver Maintenant
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
