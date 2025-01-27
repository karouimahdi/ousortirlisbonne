import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import { venues } from '../../data/venues';
import { use } from 'react';
import useSWR from 'swr';
import { Restaurant } from '@/types';
import {  getClubs } from './action';
import { useTranslation } from '@/translations/provider/localeProvider';

export default function CategoryPage({params}: {params: Promise<{ category: string }>})
 {
    const { translations } = useTranslation();

  
  const { category } = use(params);  
    const { data:categoryVenues, error, isLoading  } =useSWR<Restaurant[]>(
    `cllub-${category}`,
    async () => {
      try {
        const restaurants = await getClubs(category);
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

  // Get the category name based on the slug
  const categoryName = categoryVenues!.length > 0 ? categoryVenues![0].category.name : category;

  return (
    <div className="bg-[#f8f9fa]">
      {/* Hero Section */}
      <div className="relative h-96 bg-[#2a2765] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg" // Replace with your hero background image
            alt={translations["heroBackgroundAlt"]}
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl">{translations["categoryHeroDescription"]}</p>
        </div>
      </div>

      {/* Venues Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <Link
          href="/clubs"
          className="mb-6 text-[#2a2765] hover:text-[#37b7ab] transition-colors inline-block"
        >
          ← {translations["backToCategories"]}
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryVenues?.map(venue => (
            <Link
              key={venue.id}
              href={`/clubs/${category}/${venue.slug}`}
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
               
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}