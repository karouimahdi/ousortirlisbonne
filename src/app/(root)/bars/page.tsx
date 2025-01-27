"use client";
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Search, Star } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import useSWR from 'swr';
import { Restaurant, RestaurantCategory } from '@/types';
import { getFeaturedBars, getBarsCategories } from './action';
import { useTranslation } from "@/translations/provider/localeProvider";

export default function VenuesPage() {
  const { translations } = useTranslation();

  const { data:categories, error, isLoading } = useSWR<RestaurantCategory[]>(
    "getBarsCategories",
    async () => {
      try {
        const restaurantsCategory = await getBarsCategories();
        return restaurantsCategory.map((restaurant: any) => ({
          id: restaurant.id,
          name: restaurant.name,
          slug: restaurant.slug,
          image:restaurant.image?.url,
        }));
      } catch (err) {
        console.error('Error fetching restaurants:', err);
        throw err;
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
 const { data:venues } =useSWR<Restaurant[]>(
    "getFeaturedBars",
    async () => {
      try {
        const restaurants = await getFeaturedBars();
        return restaurants.map((restaurant: any) => ({
          id: restaurant.id,
          name: restaurant.name,
          slug: restaurant.slug,
          mainImage: {
            url: restaurant.mainImage?.url || '/default-restaurant.jpg',
            alt: restaurant.name
          },
          category: restaurant.category,
          location: restaurant.location,
          price: restaurant.price,
          highlighted: restaurant.highlighted,
          images:restaurant.images
        }));
      } catch (err) {
        console.error('Error fetching restaurants:', err);
        throw err;
      }
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#37b7ab] font-semibold mb-2 block">            {translations["categoriesSectionSubtitle"]}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a2765] mb-4">
          {translations["categoriesSectionTitle"]}
          </h2>
          <div className="w-24 h-1 bg-[#37b7ab] mx-auto mt-6 mb-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories?.map(category => (
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

      {/* Featured Venues Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a2765] mb-4">
            {translations["featuredVenuesTitle"]}
            </h2>
            <div className="w-24 h-1 bg-[#37b7ab] mx-auto mt-4 mb-8" />
            <p className="text-gray-600 max-w-2xl mx-auto">
            {translations["featuredVenuesDescription"]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues?.map(venue => (
              <Link
                key={venue.id}
                href={`/bars/${venue.category.slug}/${venue.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={venue.mainImage.url}
                    alt={venue.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#2a2765]">{venue.name}</h3>
                  <p className="text-gray-600 flex items-center mt-2">
                    <MapPin size={16} className="mr-2" />
                    {venue.location}
                  </p>
                  <div className="flex items-center mt-2">
                    <Star size={16} className="text-yellow-400 mr-2" />
                    <span className="text-sm text-gray-600">4.5/5</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}