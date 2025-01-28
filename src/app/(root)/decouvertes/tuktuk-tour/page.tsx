"use client"
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FocusCards } from '@/components/ui/focus-cards';
import HeroSection from '@/components/Hero';
import { useTranslation } from '@/translations/provider/localeProvider';

const TourTuktukPage = () => {
  const {translations}=useTranslation()
  const cards = [
    {
      title: "",
      src: "/tuk8.jpeg",
    },
    {
      title: "",
      src: "/tuk7.jpeg",
    },
    {
      title: "",
      src: "/tuk6.jpg",
    },
    {
      title: "",
      src: "/tuk4.jpg",
    },
    {
      title: "",
      src: "/tuk5.jpg",
    },
    {
      title: "",
      src: "/tuk3.jpeg",
    },
  ];
    

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen "
        
      >
        
        <HeroSection
  imageUrl="/Tuktuk.jpg"
  title={translations["tourTitle"]}
  description={translations["cityDescription"]}
  buttonText={translations["slogan"]}
  buttonLink="#"
  altText="Vue panoramique de Lisbonne"
/>
      </div>

      {/* Discovery Section */}
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2765] mb-8">
{translations["title"]}            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
{translations["description"]}            </p>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
{translations["benefits"]}            </p>
            <p className="text-xl font-semibold text-[#37b7ab]">
{translations["adventure"]}            </p>
          </div>

          {/* 3D Carousel */}
         <FocusCards cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default TourTuktukPage;