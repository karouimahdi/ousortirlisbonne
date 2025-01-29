"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, MoonStar, Utensils, Sunrise, MapPin, Wine, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "@/translations/provider/localeProvider";
import { translations } from "@/translations";
import useSWR from "swr";
import { CoucheSoleilBoat } from "@/types";
import { getBoats } from "./action";

const HeroBanner = () => {
  const {translations}=useTranslation()
  const features = [
    { icon: Heart, text: translations["intimate_experience"] },
    { icon: Wine, text:translations["gourmet_dinner1"] },
    { icon: MoonStar, text:translations["romantic_night"] },
  ];

  return (
    <div className="relative bg-[#2a2765]">
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-[#37b7ab] text-white hover:bg-[#37b7ab]/90">
{translations["unforgettable_night"]}          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
{translations["romantic_cruise"]}            <span className="text-[#ea3e4e]"> {translations["lisbon"]}</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {translations["startingFrom"]}{" "}
            <span className="text-4xl font-bold text-[#ea3e4e]">575€</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white/10 rounded-full px-6 py-3 border border-[#37b7ab]"
              >
                <Icon className="w-5 h-5 mr-2 text-[#ea3e4e]" />
                <span className="text-white">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <p className="text-lg leading-relaxed">
             {translations["romantic_cruise_description"]}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                translations["cristoRei"],
                translations["ponte_25_abril"],
                translations["belem_tower"],
                translations["comercio_square"],
                translations["discoveries_monument"],
                translations["city_view"],
              ].map((monument) => (
                <motion.div
                  key={monument}
                  whileHover={{ x: 5 }}
                  className="flex items-center bg-[#37b7ab]/20 rounded-lg p-3 border border-[#37b7ab]"
                >
                  <MapPin className="w-5 h-5 mr-3 text-[#2a2765]" />
                  <span className="text-sm">{monument}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <RomanticExperienceSlider />
        </div>
      </div>
    </div>
  );
};

const RomanticExperienceSlider = () => {
  const {translations}=useTranslation();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative h-full min-h-[500px] rounded-3xl overflow-hidden border-4 border-[#37b7ab]"
    >
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {[
            "/Capture-decran-2024-02-05-a-18.29.34.jpg",
            "/Capture-decran-2024-02-05-a-18.28.53.jpg",
          ].map((img, index) => (
            <div className="embla__slide relative flex-[0_0_100%]" key={index}>
              <img
                src={img}
                alt={`Romantic experience ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2a2765]/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-white/80"
            animate={{ scale: index === 0 ? 1.2 : 1 }}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-8 left-8 right-8 bg-[#37b7ab]/90 backdrop-blur-sm rounded-xl p-6"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <div className="grid grid-cols-2 gap-6 text-white">
          <div className="space-y-4">
            <div className="flex items-center">
              <Utensils className="w-6 h-6 mr-3 text-[#2a2765]" />
              <span>{translations["dining_options"]}</span>
            </div>
            <div className="flex items-center">
              <Sunrise className="w-6 h-6 mr-3 text-[#2a2765]" />
              <span>{translations["breakfast_delivery"]}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <MoonStar className="w-6 h-6 mr-3 text-[#2a2765]" />
              <span>{translations["private_quay_night"]}</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-6 h-6 mr-3 text-[#2a2765]" />
              <span>{translations["romantic_decoration"]}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PackageDetails = () => {
  const {translations}=useTranslation()
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <Badge className="bg-[#37b7ab] text-white">
{translations["exclusive_offer"]}          </Badge>
          <h2 className="text-4xl font-bold text-[#2a2765]">
{translations["romantic_experience_onboard"]}          </h2>

          <div className="space-y-6">
            <div className="flex items-start p-4 bg-[#f8f7fc] rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-[#37b7ab]/20 rounded-lg flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-[#2a2765]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#2a2765]">
{translations["price_for_two"]}                </h3>
                <p className="text-gray-600">{translations["all_services_included"]}</p>
              </div>
            </div>

            {[
              {
                icon: "🌅",
                title: translations["sunset_cruise"],
                text: translations["private_navigation"],
              },
              {
                icon: "🍽️",
                title: translations["gourmet_dinner1"],
                text: translations["gourmet_dinner_options"],
              },
              {
                icon: "🛌",
                title: translations["romantic_night"],
                text: translations["private_cabin"],
              },
              {
                icon: "🥐",
                title: translations["breakfast_delivery"],
                text: translations["breakfast_time_delivery"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start p-4 hover:bg-[#f8f7fc] rounded-xl transition-colors"
              >
                <span className="text-2xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#2a2765]">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button className="bg-[#ea3e4e] hover:bg-[#37b7ab] px-8 py-6 rounded-full text-lg shadow-lg w-full md:w-auto">
{translations["bookNow"]}          </Button>
        </div>

        <div className="grid gap-6">
          {[
            "/romantic1.jpg",
            "/Capture-decran-2024-02-05-a-18.29.34.jpg",
            "/Capture-decran-2024-02-05-a-18.28.53.jpg",
          ].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-2xl overflow-hidden border-2 border-[#37b7ab]"
            >
              <img
                src={img}
                alt={`Detail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2a2765]/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
interface BoatCardProps {
  title: string;
  price: string;
  time: string;
  capacity: string;
  departure: string;
  images: string[];
}
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
export default function CroisiereRomantiquePage() {
  const { data: boats, isLoading: boatLoading, error: boatError } = useSWR<CoucheSoleilBoat[]>(
    "romantic-boats",
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
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <PackageDetails />
      <div className="grid md:grid-cols-2 gap-8">
          {boats?.map((boat, index) => (
            <BoatCard key={index} {...boat} />
          ))}
        </div>
    </div>
  );
}
