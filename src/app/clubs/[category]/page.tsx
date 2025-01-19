import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import { venues } from '../../data/venues';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryVenues = venues.filter(
    venue => venue.categorySlug === params.category
  );

  // Get the category name based on the slug
  const categoryName = categoryVenues.length > 0 ? categoryVenues[0].category : params.category;

  return (
    <div className="bg-[#f8f9fa]">
      {/* Hero Section */}
      <div className="relative h-96 bg-[#2a2765] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg" // Replace with your hero background image
            alt="Hero Background"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl">Découvrez les meilleurs lieux pour vos sorties</p>
        </div>
      </div>

      {/* Venues Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <Link
          href="/clubs"
          className="mb-6 text-[#2a2765] hover:text-[#37b7ab] transition-colors inline-block"
        >
          ← Retour aux catégories
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryVenues.map(venue => (
            <Link
              key={venue.id}
              href={`/clubs/${params.category}/${venue.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={venue.image}
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