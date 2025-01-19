"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Search, Star, MapPin, ChevronDown, Filter } from 'lucide-react';
import { categories } from '../data/venues';
import { useState } from 'react';
import HeroCarousel from '@/components/HeroCarousel';

const featuredVenues = [
  {
    id: 1,
    name: "Le Petit Jardin",
    category: "Restaurant",
    rating: 4.8,
    reviews: 128,
    image: "/rest1.jpeg",
    price: "€€€",
    location: "Montmartre, Paris",
    categorySlug: "restaurants-gastronomiques",
    slug: "le-petit-jardin", 
  },
  {
    id: 2,
    name: "Sky Bar",
    category: "Rooftop",
    rating: 4.9,
    reviews: 256,
    image: "/resto2*.jpeg",
    price: "€€€€",
    location: "Champs-Élysées, Paris"
  },
  {
    id: 3,
    name: "L'Atelier",
    category: "Restaurant",
    rating: 4.7,
    reviews: 189,
    image: "/rsto3.jpeg",
    price: "€€",
    location: "Le Marais, Paris"
  }
];

export default function VenuesPage() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with parallax effect */}
      <HeroCarousel/>


      {/* Categories Section with hover effects */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#37b7ab] font-semibold mb-2 block">Catégories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a2765] mb-4">
            Explorez nos Catégories
          </h2>
          <div className="w-24 h-1 bg-[#37b7ab] mx-auto mt-6 mb-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <Link
              key={category.id}
              href={`/bars/${category.slug}`}
              className="group relative transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-56">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a2765] via-[#2a2765]/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#37b7ab] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#37b7ab] mt-3 group-hover:w-24 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Venues Section with enhanced cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#37b7ab] font-semibold mb-2 block">Découvrir</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2a2765] mb-4">
              Lieux à la Une
            </h2>
            <div className="w-24 h-1 bg-[#37b7ab] mx-auto mt-6 mb-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVenues.map(venue => (
              <div 
                key={venue.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-72">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
                    {venue.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#37b7ab]/10 text-[#37b7ab] rounded-full text-sm font-semibold">
                      {venue.category}
                    </span>
                    <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{venue.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({venue.reviews})</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2a2765] mb-2 group-hover:text-[#37b7ab] transition-colors duration-300">
                    {venue.name}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{venue.location}</span>
                  </div>
                  <Link
  href={`/bars/${venue.categorySlug}/${venue.slug}`}
  className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-3 rounded-full transition-colors duration-300"
>
  Lire plus
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { transform: translateY(10px); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </main>
  );
}