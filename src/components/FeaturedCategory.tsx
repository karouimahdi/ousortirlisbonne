"use client"
import { Calendar, Utensils, Beer, Music, Ship, Activity, BookOpen ,Mail} from 'lucide-react';

const FeaturedCategories = () => {
    const categories = [
      { icon: Calendar, label: 'Événements', color: '#ea3e4e' },
      { icon: Utensils, label: 'Restaurants', color: '#37b7ab' },
      { icon: Beer, label: 'Bars', color: '#2a2765' },
      { icon: Music, label: 'Clubs', color: '#ea3e4e' },
      { icon: Ship, label: 'Bateaux', color: '#37b7ab' },
      { icon: Activity, label: 'Activités', color: '#2a2765' },
      { icon: BookOpen, label: 'Blog', color: '#ea3e4e' },
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2a2765]">
            Nos Catégories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map(({ icon: Icon, label, color }) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <Icon size={40} style={{ color }} className="mb-4" />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedCategories