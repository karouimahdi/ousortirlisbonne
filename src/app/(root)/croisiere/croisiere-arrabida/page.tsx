"use client";
import React from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { Users, Anchor, Sailboat, Fish, Sun, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import YouTube from "react-youtube";
import HeroSection from "@/components/Hero";
import { ArrabidaBoat } from "@/types";
import { getBoatsByType } from "./action";
import { useTranslation } from "@/translations/provider/localeProvider";


const featureIconMap: { [key: string]: React.ComponentType<any> } = {
  "Yamaha 50hp": Anchor,
  "5 passagers max": Users,
  "Pêche possible": Fish,
  "Toit solaire": Sun,
  "Voilier classique": Sailboat,
  "GPS nouvelle gén": Compass,
};

export default function SetubalPage() {
  const { translations } = useTranslation();

  const { data: motorBoats, isLoading: motorLoading, error: motorError } = useSWR<ArrabidaBoat[]>(
    "motor-boats",
    async () => {
      try {
        const boats = await getBoatsByType("motor");
        return boats.map((boat: any) => ({
          id: boat.id,
          createdAt: new Date(boat.createdAt),
          updatedAt: new Date(boat.updatedAt),
          type: boat.type,
          images: boat.images?.map((img: any) => ({
            image: {
              id: img.image?.id || '',
              url: img.image?.url || '',
              alt: img.image?.alt || boat.title
            },
            id: img.id
          })) || [],
          title: boat.title,
          capacity: boat.capacity,
          prices: boat.prices?.map((price: any) => ({
            duration: price.duration,
            price: price.price,
            id: price.id
          })) || [],
          features: boat.features?.map((feature: any) => ({
            text: feature.text,
            id: feature.id
          })) || []
        }));
      } catch (err) {
        console.error('Error fetching motor boats:', err);
        throw new Error('Failed to load motor boats');
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
  const { data: sailBoats, isLoading: sailLoading, error: sailError } = useSWR<ArrabidaBoat[]>('sail-boats', async () => {
    try {
      const boats = await getBoatsByType("sail");
      return boats.map((boat: any) => ({
        id: boat.id,
        createdAt: new Date(boat.createdAt),
        updatedAt: new Date(boat.updatedAt),
        type: boat.type,
        images: boat.images?.map((img: any) => ({
          image: {
            id: img.image?.id || '',
            url: img.image?.url || '',
            alt: img.image?.alt || boat.title
          },
          id: img.id
        })) || [],
        title: boat.title,
        capacity: boat.capacity,
        prices: boat.prices?.map((price: any) => ({
          duration: price.duration,
          price: price.price,
          id: price.id
        })) || [],
        features: boat.features?.map((feature: any) => ({
          text: feature.text,
          id: feature.id
        })) || []
      }));
    } catch (err) {
      throw new Error('Failed to load motor boats');
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
  });

  if (motorError || sailError) return <div>Error loading boats</div>;
  if (motorLoading || sailLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center mb-8">
        <HeroSection
          imageUrl="/serra-da-arabida-min.jpg"
          title={translations["heroTitle"]}
          description={translations["heroDescription"]}
          buttonText={translations["heroButtonText"]}
          buttonLink="#"
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-[#ea3e4e]/10 text-[#ea3e4e]">
{translations["badgeText"]}            </Badge>
            <h2 className="text-3xl font-bold text-[#2a2765]">
{translations["sectionTitle"]}            </h2>
            <p className="text-gray-600 leading-relaxed">
             {translations["sectionDescription"]}           </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-[#f8fafc] rounded-xl text-center">
                <Users className="w-8 h-8 mx-auto text-[#37b7ab] mb-2" />
                <span className="font-semibold text-[#2a2765]">
                {translations["capacityText"]}                 </span>
              </div>
              <div className="p-4 bg-[#f8fafc] rounded-xl text-center">
                <Sailboat className="w-8 h-8 mx-auto text-[#37b7ab] mb-2" />
                <span className="font-semibold text-[#2a2765]">
                {translations["boatTypesText"]}       </span>
              </div>
              <div className="p-4 bg-[#f8fafc] rounded-xl text-center">
                <Fish className="w-8 h-8 mx-auto text-[#37b7ab] mb-2" />
                <span className="font-semibold text-[#2a2765]">
                {translations["dolphinEncounterText"]}      </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <YouTube
              videoId="TmdntCQxqlI"
              opts={{ width: "100%" }}
              className="aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Motor Boats Section */}
      <section className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2a2765] mb-4">
{translations["motorBoatsTitle"]}            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
            {translations["motorBoatsDescription"]}                        </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorBoats?.map((boat) => (
              <motion.div
                key={boat.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60">
                  <img
                    src={boat.images[0]?.image?.url}
                    alt={boat.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#37b7ab] text-white">
                    {translations["availableText"]}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2a2765] mb-2">
                    {boat.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#37b7ab] mb-4">
                    <Users className="w-5 h-5" />
                    <span>{boat.capacity}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {boat.features.map((feature, i) => {
                      const Icon = featureIconMap[feature.text];
                      return (
                        <div
                          key={i}
                          className="flex items-center p-2 bg-gray-50 rounded-lg"
                        >
                          {Icon && <Icon className="w-5 h-5 mr-2 text-[#37b7ab]" />}
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    {boat.prices.map((price, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold text-[#2a2765]">
                          {price.price}
                        </div>
                        <div className="text-sm text-gray-600">
                          {price.duration}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] rounded-full h-12">
{translations["bookNow"]}                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    {/* Motor Boats Section */}
    <section className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2a2765] mb-4">
{translations["sailBoatsTitle"]}            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
            {translations["sailBoatsDescription"]}   
</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sailBoats?.map((boat) => (
              <motion.div
                key={boat.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-60">
                  <img
                    src={boat.images[0]?.image?.url}
                    alt={boat.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#37b7ab] text-white">
                    {translations["availableText"]}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#2a2765] mb-2">
                    {boat.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#37b7ab] mb-4">
                    <Users className="w-5 h-5" />
                    <span>{boat.capacity}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {boat.features.map((feature, i) => {
                      const Icon = featureIconMap[feature.text];
                      return (
                        <div
                          key={i}
                          className="flex items-center p-2 bg-gray-50 rounded-lg"
                        >
                          {Icon && <Icon className="w-5 h-5 mr-2 text-[#37b7ab]" />}
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    {boat.prices.map((price, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold text-[#2a2765]">
                          {price.price}
                        </div>
                        <div className="text-sm text-gray-600">
                          {price.duration}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] rounded-full h-12">
{translations["bookNow"]}                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Sailboats Section - similar pattern for sail boats */}
    </div>
  );
}