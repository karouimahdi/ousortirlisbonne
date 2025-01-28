// components/TestimonialsSection.tsx
import React from 'react';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getComments } from './action';

interface Testimential {
  authorName: string;
  description: string;
}

interface TestimonialCardProps {
  authorName: string;
  description: string;
  index: number;
}

export function TestimonialCard({
  authorName,
  description,
  index,
}: TestimonialCardProps) {
  const colors = ["#2a2765", "#37b7ab", "#ea3e4e"];
  const cardColor = colors[index % 3];

  return (
    <motion.div
      whileHover={{ scale: 1.02, translateY: -5 }}
      transition={{ duration: 0.2 }}
      className="mx-4 my-2 w-[320px]"
    >
      <div
        className={cn(
          "relative rounded-xl p-6 shadow-lg",
          "bg-white dark:bg-gray-800",
          "border-t-4"
        )}
        style={{ borderColor: cardColor }}
      >
        <div className="absolute -top-4 right-4">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: cardColor }}
          >
            <span className="text-white text-xl">"</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg">{authorName}</h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-4">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const { data: testimonials, error } = useSWR<Testimential[]>(
    'testimonials', // Key for SWR caching
    async () => await getComments() // Fetcher function
  );

  if (error) return <div>Failed to load testimonials</div>;
  if (!testimonials) return <div>Loading...</div>;

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-br from-[#2a2765]/5 via-[#37b7ab]/5 to-[#ea3e4e]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2a2765] bg-clip-text">
            Témoignages Facebook Où sortir à Lisbonne
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Retrouvez l'intégralité des témoignages sur notre page Facebook ou
            pour les plus récentes sur Truspilot et surtout n'hésitez pas à
            laisser le votre!
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={`${setIndex}-${index}`}
                      authorName={testimonial.authorName}
                      description={testimonial.description}
                      index={index}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex animate-marquee2">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={`${setIndex}-${index}`}
                      authorName={testimonial.authorName}
                      description={testimonial.description}
                      index={index}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}