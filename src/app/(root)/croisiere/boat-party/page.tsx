"use client"
import React from 'react';
import { Calendar, Clock, Waves, Martini, Users, MapPin } from 'lucide-react';
import HeroSection from '@/components/Hero';
import { getBoatParties } from './actions';
import { BoatParty } from '@/types';
import { useTranslation } from '@/translations/provider/localeProvider';
import useSWR from 'swr';



const BoatPartyPage = () => {
  const { translations } = useTranslation();
  
  const { data: boatParty } = useSWR(
    useSWR<BoatParty>,
    async (_) => await getBoatParties()
  );
  if (!boatParty) {
  null  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <HeroSection
          imageUrl={
            typeof boatParty?.image === "string"
              ? boatParty.image
              : (boatParty?.image.url ?? undefined) || ""
          }
          title={boatParty?.title}
          description={boatParty?.description}
          buttonText={translations["bookNow"]}
          buttonLink="#"
          altText={boatParty?.title || "Boat Party"}
        />
        {/* Decorative wave overlay */}
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {boatParty?.features?.map((feature, index) => {
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-[#37b7ab]"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="p-3 rounded-full bg-[#2a2765]/10">
                  </div>
                  <h3 className="text-2xl font-semibold text-[#2a2765]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#2a2765]">
                {translations["informationTitle"]}
              </h2>
              <div className="space-y-6">
                {[
                  { Icon: Calendar, text: boatParty?.schedule.days },
                  { Icon: Clock, text: boatParty?.schedule.time },
                  { Icon: MapPin, text: boatParty?.location }
                ].map(({ Icon, text }, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-6 rounded-lg transition-all duration-300 hover:bg-[#2a2765]/5"
                  >
                    <div className="p-3 rounded-full bg-[#ea3e4e]/10 mr-4">
                      <Icon className="w-6 h-6 text-[#ea3e4e]" />
                    </div>
                    <p className="text-lg text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-gradient-to-br from-[#2a2765] to-[#37b7ab] rounded-xl p-8 text-center w-full transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-5xl font-bold mb-4 text-white">
                    {boatParty?.price}€
                  </h3>
                  <p className="text-2xl mb-8 text-white/90">
                    {translations["perPerson"]}
                  </p>
                  <button className="bg-[#ea3e4e] text-white font-bold py-4 px-8 rounded-full hover:bg-[#37b7ab] transform hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                    {translations["bookNow"]}
                  </button>
                </div>
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatPartyPage;
