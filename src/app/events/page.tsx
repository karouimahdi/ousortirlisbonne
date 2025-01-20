"use client"
import CategoryGrid from "@/components/Category";
import EventsList from "@/components/events";
import { motion } from 'framer-motion';

export default function EventsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#2a2765]/5 to-[#37b7ab]/5"
    >
      <header className="py-20 px-6 text-center bg-gradient-to-r from-[#2a2765] to-[#37b7ab] shadow-lg">
       
        <h1 className="text-5xl md:text-6xl font-garage-gothic-bold text-white mb-6">
          Découvrez nos événements
        </h1>
        <p className="text-2xl font-garage-gothic-regular text-white/80 italic mb-8">
          Faites de votre vie un évènement!
        </p>
        {/* Optional buttons or links can go here */}
      </header>
      <main className="container mx-auto px-4 -mt-10">
        <CategoryGrid />
        <EventsList />
      </main>
    </motion.div>
  );
}