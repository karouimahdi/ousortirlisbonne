"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from 'lucide-react';
import {
  Bike, Ship, Mountain, Plane, Users, Camera, Music,
  Clock, UtensilsCrossed, Palmtree, Waves, PartyPopper
} from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

export default function ReservationPage() {
  const activities = {
    tourist: [
      { 
        icon: <Users className="w-6 h-6 mb-4" />, 
        name: "Visite Guidée à Pied", 
        price: "À partir de 19€",
        description: "Découvrez l'histoire et la culture locale avec nos guides experts"
      },
      { 
        icon: <Bike className="w-6 h-6 mb-4" />, 
        name: "Tour en Vélo", 
        price: "À partir de 29€",
        description: "Explorez la ville à vélo avec nos circuits thématiques"
      },
      { 
        icon: <UtensilsCrossed className="w-6 h-6 mb-4" />, 
        name: "Tour Gastronomique", 
        price: "À partir de 49€",
        description: "Dégustez les spécialités locales et découvrez la gastronomie"
      },
    ],
    sports: [
      { 
        icon: <Waves className="w-6 h-6 mb-4" />, 
        name: "Kayak & Paddle", 
        price: "À partir de 39€",
        description: "Activités nautiques encadrées par des professionnels"
      },
      { 
        icon: <Mountain className="w-6 h-6 mb-4" />, 
        name: "Randonnée", 
        price: "À partir de 25€",
        description: "Parcours adaptés à tous les niveaux de difficulté"
      },
      { 
        icon: <Plane className="w-6 h-6 mb-4" />, 
        name: "Parapente", 
        price: "À partir de 129€",
        description: "Vivez une expérience unique dans les airs"
      },
    ],
    custom: [
      { 
        icon: <Users className="w-6 h-6 mb-4" />, 
        name: "Groupes & Entreprises", 
        price: "Sur mesure",
        description: "Programmes personnalisés pour vos événements"
      },
      { 
        icon: <Palmtree className="w-6 h-6 mb-4" />, 
        name: "Excursions Privées", 
        price: "Sur mesure",
        description: "Créez votre propre itinéraire selon vos envies"
      },
      { 
        icon: <PartyPopper className="w-6 h-6 mb-4" />, 
        name: "Événements Spéciaux", 
        price: "Sur mesure",
        description: "Célébrations, anniversaires, occasions spéciales"
      },
    ],
  };

  const quickBookingOptions = [
    { title: "Aujourd'hui", description: "Activités disponibles dans la journée" },
    { title: "Cette Semaine", description: "Planifiez vos activités à l'avance" },
    { title: "Ce Mois", description: "Réservez pour plus tard" },
    { title: "Dates Personnalisées", description: "Choisissez vos dates" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#2a2765]/5 to-white min-h-screen">
      {/* Enhanced Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-[500px] w-full"
      >
        <Image
          src="/banner.jpg"
          alt="Bannière de réservation"
          layout="fill"
          objectFit="cover"
          className="rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2765]/80 to-[#37b7ab]/60 rounded-b-3xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Votre Prochaine Aventure Commence Ici
              </h1>
              <p className="text-xl max-w-2xl mx-auto leading-relaxed">
                Découvrez nos activités exceptionnelles et créez des souvenirs inoubliables
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Redesigned Reservation Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="container mx-auto px-4 -mt-20 relative z-10"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#37b7ab]/20">
          <h2 className="text-2xl font-bold mb-6 text-[#2a2765]">Réservez Maintenant</h2>
          <form className="grid md:grid-cols-2 gap-6">
<div>
  <Label htmlFor="name" className="text-[#2a2765]">Nom complet</Label>
  <Input 
    id="name" 
    type="text" 
    placeholder="Entrez votre nom"
    className="border-[#37b7ab]/30 focus:border-[#37b7ab] focus:ring-[#37b7ab]"
  />
</div>
<div>
  <Label htmlFor="email" className="text-[#2a2765]">Adresse e-mail</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="Entrez votre e-mail"
    className="border-[#37b7ab]/30 focus:border-[#37b7ab] focus:ring-[#37b7ab]"
  />
</div>
<div>
  <Label htmlFor="date" className="text-[#2a2765]">Date de réservation</Label>
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        className="w-full justify-start text-left font-normal border-[#37b7ab]/30 hover:bg-[#37b7ab]/10"
      >
        <CalendarIcon className="mr-2 h-4 w-4 text-[#37b7ab]" />
        <span>Choisissez une date</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <Calendar 
        mode="single" 
        className="rounded-md border"
      />
    </PopoverContent>
  </Popover>
</div>
<div>
  <Label htmlFor="activity" className="text-[#2a2765]">Activité</Label>
  <select
    id="activity"
    className="w-full p-2 rounded-md border-[#37b7ab]/30 focus:border-[#37b7ab] focus:ring-[#37b7ab]"
  >
    <option value="">Sélectionnez une activité</option>
    <option value="tour">Visite Guidée à Pied</option>
    <option value="bike">Tour en Vélo</option>
    <option value="food">Tour Gastronomique</option>
  </select>
</div>
<div className="md:col-span-2">
  <Button 
    type="submit" 
    className="w-full bg-[#ea3e4e] hover:bg-[#ea3e4e]/90 text-white py-6 text-lg font-semibold rounded-xl"
  >
    Réserver Maintenant
  </Button>
</div>
</form>
        </div>
      </motion.div>

      {/* Enhanced Activities Section */}
      <div className="container mx-auto px-4 py-20">
        <Tabs defaultValue="tourist" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-[#2a2765]/5 p-1 rounded-xl">
            {["tourist", "sports", "custom"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="data-[state=active]:bg-[#2a2765] data-[state=active]:text-white py-3 rounded-lg"
              >
                {tab === "tourist" && "Activités Touristiques"}
                {tab === "sports" && "Activités Sportives"}
                {tab === "custom" && "Sur Mesure"}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(activities).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-[#37b7ab]/20">
                      <CardHeader className="text-center">
                        <div className="mx-auto text-[#37b7ab] group-hover:scale-110 transition-transform duration-300">
                          {activity.icon}
                        </div>
                        <CardTitle className="text-xl mb-2 text-[#2a2765]">{activity.name}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-[#ea3e4e]">
                          {activity.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-center">
                          {activity.description}
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-center pb-6">
                        <Button className="bg-[#2a2765] hover:bg-[#2a2765]/90 text-white">
                          Réserver
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

       
      </div>
    </div>

  );
}


//
