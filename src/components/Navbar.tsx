"use client";

import React, { useState } from 'react';
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
  Settings
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { useTranslation } from "@/translations/provider/localeProvider";

const Navbar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { translations, setLocale, locale } = useTranslation();
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  const menuItems = {
    blog: {
      name: translations["blog"],
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { name: translations["clubBars"], path: '/clubs', icon: <Wind className="w-4 h-4" /> },
        { name: translations["restaurant"], path: '/restaurants', icon: <Wine className="w-4 h-4" /> },
        { name: translations["groupProfile"], path: '/blog', icon: <Settings className="w-4 h-4" /> },
      ]
    },
    experience: {
      name: translations["customExperience"],
      icon: <Map className="w-5 h-5" />,
      items: [
        { name: translations["walkingTour"], path: '/decouvertes/visite-privee', icon: <Footprints className="w-4 h-4" /> },
        { name: translations["tuktukTour"], path: '/decouvertes/tuktuk-tour', icon: <Car className="w-4 h-4" /> },
        { name: translations["sidecarTour"], path: '/decouvertes/side-car', icon: <Car className="w-4 h-4" /> },
        { name: "plus d'experiences", path: '/decouvertes', icon: <Compass className="w-4 h-4" /> }, // Added icon
      ]
    },
    croisieres: {
      name: translations["cruises"],
      icon: <Ship className="w-5 h-5" />,
      items: [
        { name: translations["groupCruise"], path: '/boats', icon: <Anchor className="w-4 h-4" /> },
        { name: translations["arrabidaCruise"], path: '/boats/croisiere-arrabida', icon: <Ship className="w-4 h-4" /> },
        { name: translations["fishingCruise"], path: '/boats/croisiere-peche', icon: <Fish className="w-4 h-4" /> },
      ]
    },
    sports: {
      name: translations["sportsAndAdventures"],
      icon: <Mountain className="w-5 h-5" />,
      items: [
        { name: translations["outdoorActivities"], path: '/activites-sportives', icon: <Trees className="w-4 h-4" /> },
        { name: translations["sesimbraAdventure"], path: '/activites-a-sesimbra-arrabida', icon: <TentTree className="w-4 h-4" /> },
      ]
    }
  };

  const toggleLanguage = () => {
    const locales: ("fr" | "en" | "pt")[] = ['fr', 'en', 'pt'];
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const newLocale = locales[nextIndex];
    setLocale(newLocale);
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
                    <NavigationMenuTrigger 
                      className="bg-transparent text-white hover:text-[#37b7ab] hover:bg-white/5 data-[state=open]:bg-white/10 data-[active]:text-[#37b7ab] rounded-full px-4 py-2 transition-all duration-200"
                    >
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
              <span className="font-medium">{locale.toUpperCase()}</span>
            </button>

            <Link href="/reservation">
              <Button 
                className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-medium flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{translations["customStay"]}</span>
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
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 backdrop-blur-xl bg-[#2a2765]/95 rounded-xl mb-4 border border-white/10 shadow-2xl">
            {Object.entries(menuItems).map(([key, menu]) => (
              <div key={key} className="space-y-2">
                <button
                  onClick={() => setOpenMobileMenu(openMobileMenu === key ? null : key)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    {menu.icon}
                    <span className="font-medium text-white">{menu.name}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openMobileMenu === key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`${openMobileMenu === key ? 'block' : 'hidden'} space-y-2 ml-8`}>
                  {menu.items.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center space-x-3 px-4 py-3 text-white hover:text-[#37b7ab] hover:bg-white/10 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="p-2 rounded-full bg-[#37b7ab]/10">
                        {item.icon || <Compass className="w-4 h-4" />}
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="mt-6 space-y-4 p-4 border-t border-white/20">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-[#37b7ab] transition-colors duration-200 w-full bg-white/5 hover:bg-white/10 rounded-full px-4 py-3"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">{locale.toUpperCase()}</span>
              </button>
              
              <Link href="/reservation">
                <Button 
                  className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{translations["customStay"]}</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar