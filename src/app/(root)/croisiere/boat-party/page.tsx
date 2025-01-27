// src/app/boat-party/page.tsx
"use client"
import React from 'react';
import { Calendar, Clock, Waves, Martini, Users, MapPin } from 'lucide-react';
import HeroSection from '@/components/Hero';
import { getBoatParties } from './actions';
import { BoatParty } from '@/types';
import { useTranslation } from '@/translations/provider/localeProvider';
import useSWR from 'swr';

const iconMap = {
  Users,
  Martini,
  Waves,
  Calendar,
  Clock,
  MapPin,
};

const BoatPartyPage =  () => {
  const { translations } = useTranslation();

  const { data: boatParty } = useSWR(
    useSWR<BoatParty>,
    async (_) => await getBoatParties()
  );
  if (!boatParty) {
null  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        imageUrl={
          typeof boatParty?.image === "string"
            ? boatParty.image
            : (boatParty?.image.url ?? undefined) ||""
        }
        title={boatParty?.title}
        description={boatParty?.description}
        buttonText={translations["bookNow"]}
        buttonLink="#"
        altText={boatParty?.title || "Boat Party"}
      />

      {/* Features Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {boatParty?.features?.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all border border-gray-100">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-semibold text-[#2a2765]">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
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
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-[#ea3e4e] mr-4" />
                  <p className="text-lg text-gray-700">{boatParty?.schedule.days}</p>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-[#ea3e4e] mr-4" />
                  <p className="text-lg text-gray-700">{boatParty?.schedule.time}</p>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-[#ea3e4e] mr-4" />
                  <p className="text-lg text-gray-700">{boatParty?.location}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#ea3e4e] rounded-xl p-8 text-center w-full transform hover:scale-105 transition-all shadow-lg">
                <h3 className="text-5xl font-bold mb-4 text-white">
                  {boatParty?.price}€
                </h3>
                <p className="text-2xl mb-8 text-white">                  {translations["perPerson"]}
                </p>
                <button className="bg-[#ea3e4e] text-white font-bold py-4 px-8 rounded-full hover:bg-[#37b7ab] transform hover:scale-105 transition-all shadow-lg text-lg">
                {translations["bookNow"]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatPartyPage;