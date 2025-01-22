"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor, TestimonialCardProps } from "@/components/ui/testimonial-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Sortie tuktuk 2h organisée quasi à la dernière minute. Nous voulions commencer notre séjour par un aperçu de la ville. Et bien mission accomplie grâce au professionnalisme et à la réactivité de l'organisatrice et du chauffeur Khalid. Merci à tous les 2. Nous finissons dans un bon resto recommandé par notre chauffeur ( déposés devant ) le top !!",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Super visite avec Helena ! C'est une guide au top ! très gentille qui s'adapte à vos envies ! A faire absolument lors de votre séjour à Lisbonne. En début de séjour cela vous permettra d'avoir de très bonnes adresses pour tout le reste de votre séjour !",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Nous avons choisi l'option «&nbsp;Découverte de la ville sur mesure&nbsp;» en tour privé et nous avons été ravis ! Notre tour s'est terminé par une dégustation de «&nbsp;petiscos&nbsp;» et de spécialités portugaises.&nbsp; Cette visite est parfaite en début de séjour pour profiter des conseils du guide (lieux à visiter, restaurants, bars, soirées) pour le reste de votre séjour."
  }
];

interface EnhancedTestimonialCardProps extends TestimonialCardProps {
  index: number;
}

export function EnhancedTestimonialCard({ author, text, href, index }: EnhancedTestimonialCardProps) {
  const colors = ['#2a2765', '#37b7ab', '#ea3e4e'];
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
          "border-t-4",
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

        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-14 w-14 ring-2 ring-offset-2" >
            <AvatarImage src={author.avatar} alt={author.name} />
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{author.name}</h3>
           
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-4">{text}</p>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-br from-[#2a2765]/5 via-[#37b7ab]/5 to-[#ea3e4e]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2a2765]  bg-clip-text">
            Témoignages Facebook Où sortir à Lisbonne
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Retrouvez l'intégralité des témoignages sur notre page Facebook ou pour les plus récentes 
            sur Truspilot et surtout n'hésitez pas à laisser le votre!
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
                    <EnhancedTestimonialCard
                      key={`${setIndex}-${index}`}
                      {...testimonial}
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
                    <EnhancedTestimonialCard
                      key={`${setIndex}-${index}`}
                      {...testimonial}
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