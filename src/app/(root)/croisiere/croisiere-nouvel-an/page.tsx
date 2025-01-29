"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  GlassWater,
  Clock,
  MapPin,
  Ticket,
  Music,
  PartyPopper,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useSWR from "swr";
import { CoucheSoleilBoat } from "@/types";
import { getBoats } from "./action";
import { useTranslation } from "@/translations/provider/localeProvider";

interface BoatCardProps {
  title: string;
  price: string;
  time: string;
  capacity: string;
  departure: string;
  images: string[];
}

const HeroBanner = () => {
  const {translations}=useTranslation()

  const features = [
    { icon: Sparkles, text: translations["firework_view"] },
    { icon: Music, text: translations["music_animation"]},
    { icon: PartyPopper, text: translations["champagne_included"] },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/tage-nouvel-an-min.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2765]/90 via-[#2a2765]/70 to-[#2a2765]/90" />
      </div>

      {/* Animated sparkles overlay */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(55, 183, 171, 0.15) 0%, rgba(42, 39, 101, 0.1) 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-[#37b7ab]/20 text-[#37b7ab] hover:bg-[#37b7ab]/30">
{translations["special_offer_new_year"]}          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
{translations["cruises_of"]}            <span className="text-[#37b7ab]"> {translations["new_year"]}</span>
            <br />{translations["in_lisbon"]}
          </h1>

          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
{translations["celebrate_year"]}            <br />
{translations["embark_on_experience"]}          </motion.p>

          <motion.p
            className="text-lg text-[#37b7ab] mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
           {translations["fireworks_lights"]}
            <br />
{translations["view_from_tejo"]}          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-[#2a2765]/30 backdrop-blur-md rounded-full px-6 py-3 border border-[#37b7ab]/30"
              >
                <Icon className="w-5 h-5 mr-2 text-[#37b7ab]" />
                <span className="text-white">{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.h2
            className="text-3xl font-bold text-white mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
{translations["make_life_event"]}          </motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center bg-[#2a2765]/30 backdrop-blur-md p-6 rounded-xl border border-[#37b7ab]/20"
          >
            <Ticket className="w-8 h-8 mr-4 text-[#ea3e4e]" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
{translations["premium_package"]}              </h3>
              <p className="text-white/80">
{translations["gourmet_dinner"]}              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center bg-[#2a2765]/30 backdrop-blur-md p-6 rounded-xl border border-[#37b7ab]/20"
          >
            <GlassWater className="w-8 h-8 mr-4 text-[#ea3e4e]" />
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
{translations["open_bar"]}              </h3>
              <p className="text-white/80">{translations["champagne_wine_cocktails"]}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// BoatCard component remains the same as in your original code
// ... (keep the BoatCard component implementation)
const BoatCard = ({
  title,
  price,
  time,
  capacity,
  departure,
  images,
}: BoatCardProps) => {
  const {translations}=useTranslation()
  const [isHovered, setIsHovered] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <motion.div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-56 bg-gray-200" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((image, index) => (
            <motion.div
              className="embla__slide flex-[0_0_100%] h-full"
              key={index}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-white shadow-lg"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: index === 0 ? 1 : 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="p-8">
        <Badge className="mb-4 bg-[#2a2765]/10 text-[#2a2765] hover:bg-[#2a2765]/20">
{translations["bestSeller"]}        </Badge>

        <h3 className="text-2xl font-bold text-[#2a2765] mb-4">{title}</h3>

        <div className="space-y-3 text-sm text-gray-600">
          <motion.div
            className="flex items-center p-2 rounded-lg hover:bg-gray-50"
            whileHover={{ x: 5 }}
          >
            <Users className="w-5 h-5 mr-3 text-[#37b7ab]" />
            {capacity}
          </motion.div>
          <motion.div
            className="flex items-center p-2 rounded-lg hover:bg-gray-50"
            whileHover={{ x: 5 }}
          >
            <Clock className="w-5 h-5 mr-3 text-[#37b7ab]" />
            {time}
          </motion.div>
          <motion.div
            className="flex items-center p-2 rounded-lg hover:bg-gray-50"
            whileHover={{ x: 5 }}
          >
            {departure}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{translations["startingFrom"]}</p>
            <p className="text-3xl font-bold text-[#37b7ab]">{price}</p>
          </div>
          <Button className="bg-[#ea3e4e] hover:bg-[#37b7ab] px-8 py-6 rounded-full text-lg shadow-lg">
            {translations["bookNow1"]}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
export default function NewYearBoatPage() {
  const {translations}=useTranslation()

  const { data: boats, isLoading: boatLoading, error: boatError } = useSWR<CoucheSoleilBoat[]>(
    "coucher-boats",
    async () => {
      try {
        const boats = await getBoats();
        return boats.map((boat: any) => ({
          title: boat.title || "Untitled Cruise", // Assuming English is default locale
          price: boat.prices || "Price not available", // Changed from 'price' to 'prices'
          time: boat.duration || "Duration not specified",
          capacity: boat.capacity|| "Capacity not specified",
          departure: boat.description || "", // Changed to 'départ'
          images: boat.images?.map((img: any) => img.image?.url || "/default-boat.jpg") || [],
          isBestSeller: boat["best-seller"] || false // Added best-seller field
        }));
      } catch (err) {
        console.error('Error fetching sunset cruise boats:', err);
        throw new Error('Failed to load sunset cruises');
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 3) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      }
    }
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />

      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#2a2765]/10 text-[#2a2765]">
{translations["ourOffersBadge"]}          </Badge>
          <h2 className="text-4xl font-bold text-[#2a2765] mb-4">
{translations["unforgettable_evening"]}          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
        {translations["choose_package"]}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {boats?.map((boat, index) => (
            <BoatCard key={index} {...boat} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-12">
{translations["price_per_person"]}        </p>
      </section>
    </div>
  );
}
