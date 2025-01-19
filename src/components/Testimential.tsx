"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight} from 'lucide-react';
import test from 'node:test';
const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    
    const testimonials = [
      {
        name: "Marie L.",
        comment: "Une expérience incroyable ! Le service était impeccable et l'ambiance parfaite.",
        rating: 5
      },
      {
        name: "Pierre D.",
        comment: "Réservation facile et rapide. Je recommande vivement !",
        rating: 5
      },
      {
        name: "Sophie M.",
        comment: "Des événements uniques et bien organisés. Je reviendrai !",
        rating: 4
      }
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2a2765]">
            Avis Clients
          </h2>
          <div className="relative">
            <div className="flex justify-center">
              <Card className="w-full max-w-2xl">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={24} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-center text-lg mb-6">
                    "{testimonials[currentSlide].comment}"
                  </p>
                  <p className="text-center font-medium text-[#2a2765]">
                    {testimonials[currentSlide].name}
                  </p>
                </CardContent>
              </Card>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    );
  };
  export default Testimonials