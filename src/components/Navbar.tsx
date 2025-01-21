"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Globe,
  Calendar,
  BookOpen,
  Map,
  Ship,
  Mountain,
  Footprints,
  Bike,
  Car,
  Train,
  Compass,
  Trees,
  Wine,
  Anchor,
  Fish,
  Wind,
  TentTree,
  ChevronDown,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/provider/localeProvider";

const Navbar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useTranslation();

  const menuItems = {
    blog: {
      name: "Blog",
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        {
          name: "Activités",
          path: "/blog/activites",
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          name: "Club bars Events",
          path: "/blog/club-bars-events",
          icon: <Wind className="w-4 h-4" />,
        },
        {
          name: "Restaurant",
          path: "/blog/restaurant",
          icon: <Wine className="w-4 h-4" />,
        },
        {
          name: "Selon le profil de mon groupe",
          path: "/blog/profil-groupe",
          icon: <Settings className="w-4 h-4" />,
        },
      ],
    },
    experience: {
      name: "Expérience sur mesure",
      icon: <Map className="w-5 h-5" />,
      items: [
        {
          name: "Visite à pieds",
          path: "/experience/visite-pieds",
          icon: <Footprints className="w-4 h-4" />,
        },
        {
          name: "Tour en tuktuk",
          path: "/experience/tuktuk",
          icon: <Car className="w-4 h-4" />,
        },
        {
          name: "Virée en sideCar",
          path: "/experience/sidecar",
          icon: <Car className="w-4 h-4" />,
        },
        {
          name: "Découverte en vélo",
          path: "/experience/velo",
          icon: <Bike className="w-4 h-4" />,
        },
        {
          name: "Excursion Sintra",
          path: "/experience/sintra",
          icon: <Train className="w-4 h-4" />,
        },
        {
          name: "Terre & mer",
          path: "/experience/terre-mer",
          icon: <Compass className="w-4 h-4" />,
        },
        {
          name: "Excursion à la journée sur mesure",
          path: "/experience/journee",
          icon: <Calendar className="w-4 h-4" />,
        },
        {
          name: "Dégustation de vins & produits locaux",
          path: "/experience/degustation",
          icon: <Wine className="w-4 h-4" />,
        },
      ],
    },
    croisieres: {
      name: "Croisières",
      icon: <Ship className="w-5 h-5" />,
      items: [
        {
          name: "Croisière de groupe et privée à lisbonne - location de bateau",
          path: "/croisieres/lisbonne",
          icon: <Anchor className="w-4 h-4" />,
        },
        {
          name: "Croisière Arrabida",
          path: "/croisieres/arrabida",
          icon: <Ship className="w-4 h-4" />,
        },
        {
          name: "Croisière et pêche Cascais",
          path: "/croisieres/cascais",
          icon: <Fish className="w-4 h-4" />,
        },
      ],
    },
    sports: {
      name: "Sports et aventures",
      icon: <Mountain className="w-5 h-5" />,
      items: [
        {
          name: "Activités en plein air lisbonne",
          path: "/sports/plein-air",
          icon: <Trees className="w-4 h-4" />,
        },
        {
          name: "Aventure à Sésimbra/Arrabida",
          path: "/sports/sesimbra",
          icon: <TentTree className="w-4 h-4" />,
        },
      ],
    },
  };

  const toggleLanguage = () => {
    setLocale(locale === "fr" ? "en" : "fr");
  };

  return (
    <nav className="bg-gradient-to-r from-[#2a2765] to-[#15103a] text-white shadow-xl fixed w-full top-0 z-50 border-b-2 border-[#37b7ab]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <Link href="/">
              <Image
                src="/Logo-png.png"
                alt="Logo"
                width={90}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {Object.entries(menuItems).map(([key, menu]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:text-[#37b7ab] hover:bg-white/5 data-[state=open]:bg-white/10 data-[active]:text-[#37b7ab] rounded-full px-4 py-2 transition-all duration-200">
                      <div className="flex items-center space-x-2">
                        {menu.icon}
                        <span>{menu.name}</span>
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] p-4 bg-[#2a2765]/95 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl">
                        {menu.items.map((item) => (
                          <li key={item.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.path}
                                className="flex items-center space-x-3 p-3 hover:bg-[#37b7ab]/10 rounded-lg text-white hover:text-[#37b7ab] transition-all duration-200 group"
                              >
                                <div className="p-2 rounded-full bg-[#37b7ab]/10 group-hover:bg-[#37b7ab]/20 transition-all duration-200">
                                  {item.icon}
                                </div>
                                <span className="font-medium">{item.name}</span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-[#37b7ab] transition-all duration-200 bg-white/5 hover:bg-white/10 rounded-full px-4 py-2"
            >
              <Globe className="w-5 h-5 transform hover:rotate-180 transition-transform duration-500" />
              <span className="font-medium">{locale}</span>
            </button>

            <Link href="/sejour-mesure">
              <Button className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-medium flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Séjour sur mesure</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#37b7ab] p-2 transition-colors duration-200 bg-white/5 hover:bg-white/10 rounded-full"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 backdrop-blur-xl bg-[#2a2765]/95 rounded-xl mb-4 border border-white/10 shadow-2xl">
            {Object.entries(menuItems).map(([key, menu]) => (
              <div key={key} className="space-y-2">
                <div className="px-4 py-2 text-[#37b7ab] font-bold flex items-center space-x-2">
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
                {menu.items.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="flex items-center space-x-3 px-6 py-3 text-white hover:text-[#37b7ab] hover:bg-white/10 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-[#37b7ab]/10">
                      {item.icon}
                    </div>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            ))}

            <div className="mt-6 space-y-4 p-4 border-t border-white/20">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-[#37b7ab] transition-colors duration-200 w-full bg-white/5 hover:bg-white/10 rounded-full px-4 py-3"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">{locale}</span>
              </button>

              <Link href="/sejour-mesure">
                <Button className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Séjour sur mesure</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
