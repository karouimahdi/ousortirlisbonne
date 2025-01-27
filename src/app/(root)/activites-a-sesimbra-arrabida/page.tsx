"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import HeroSection from "@/components/Hero";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { SessimbraActivities } from "@/types";
import { getSessimbraActivities } from "./action";
import { useTranslation } from "@/translations/provider/localeProvider";



const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2a2765]/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-[#ea3e4e] w-8" : "bg-white/50 w-4"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-full px-6 flex justify-between z-20">
        <button
          onClick={prev}
          className="bg-[#37b7ab] p-3 rounded-full shadow-xl hover:bg-[#2a8996] transition-all"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={next}
          className="bg-[#37b7ab] p-3 rounded-full shadow-xl hover:bg-[#2a8996] transition-all"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default function ActivitiesPage() {
  const { translations } = useTranslation();

  const { data: activities, error, isLoading } = useSWR<SessimbraActivities[]>(
    ['getSessimbraActivities'], // Key sous forme de tableau
    async ([key]): Promise<SessimbraActivities[]> => { // Fetcher typé
      try {
        const response = await getSessimbraActivities();
        return response.map((activity) => ({
          id: activity.id,
          title: activity.title,
          description: activity.descriptions.map((d) => d.description),
          includes: activity.includes.map((i) => i.include),
          images: activity.images.map((img) => 
            (img.image as unknown as { url: string }).url // Assertion de type sécurisée
          ),
        }));
      } catch (err) {
        console.error('Error fetching activities:', err);
        throw err;
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  ); if (isLoading) return <div>Loading restaurants...</div>;
  if (error) return <div>Error loading restaurants</div>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#f8f9fd]">
      {/* Hero Section */}
      <HeroSection
        imageUrl="/Snorking-Arrabida.jpg"
        title={translations["activitiesPageTitle"]}  
        description=""
        buttonText={translations["discoverOurActivities"]}   
        buttonLink="#"
        altText={translations["heroAltText"]}   
      />
      <section className="max-w-7xl mx-auto px-4 py-28">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h2 className="text-5xl font-bold text-[#2a2765] leading-tight">
{translations["discoverMagicPart1"]}            <br />
{translations["discoverMagicPart2"]}  
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 leading-relaxed">
            {translations["activityDescriptionPart1"]}

              <span className="text-[#37b7ab] font-semibold">
                {" "}
                {translations["activityDescriptionHighlight"]}
                </span>
            </p>

            {/* Élément décoratif */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#ea3e4e]/10 rounded-full blur-xl" />
          </div>

          {/* Encadré important stylisé */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-1 bg-gradient-to-r from-[#37b7ab] to-[#2a2765] rounded-2xl shadow-lg"
          >
            <div className="bg-white/95 px-12 py-8 rounded-xl backdrop-blur-sm">
              <p className="text-lg font-medium text-[#2a2765]">
              {translations["groupDiscountsPart1"]}
              <span className="text-[#ea3e4e]">
                  {" "}
                  {translations["groupDiscountsPart2"]}
                  </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Activities Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24 space-y-20">
        {activities?.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Image Slider */}
            <div className="h-[500px] lg:h-[600px] relative z-10">
              <ImageSlider images={activity.images} />
            </div>

            {/* Content */}
            <div className="space-y-6 lg:space-y-8 lg:pl-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2a2765] leading-tight">
                <span>{activity?.title?.split(" ")[0]}</span>
                <br />
                {activity?.title?.split(" ").slice(1).join(" ")}
              </h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                {activity.description.map((desc, i) => (
                  <p
                    key={i}
                    className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-[#ea3e4e] before:rounded-full"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              {activity.includes && (
                <motion.div
                  className="bg-white p-6 rounded-xl shadow-lg border border-[#37b7ab]/20"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-[#37b7ab] rounded-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2a2765]">
                    {translations["included"]}
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activity.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-[#2a2765] p-2 rounded-lg bg-[#f8f9fd]"
                      >
                        <div className="w-2 h-2 bg-[#ea3e4e] rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6"
              >
                <Button
                  className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-8 py-6 text-lg rounded-full 
                transform hover:scale-105 transition-all duration-200"
                >
                  {" "}
                  {translations["bookNow"]}
                  </Button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
