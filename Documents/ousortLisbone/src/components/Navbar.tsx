"use client";

import React, { useState } from 'react';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('FR');

  const menuItems = [
    { name: 'Events', path: '/events' },
    { name: 'Restaurants', path: '/restaurants' },
    { name: 'Bars', path: '/bars' },
    { name: 'Clubs', path: '/clubs' },
    { name: 'Activities', path: '/activities' },
    { name: 'Boats', path: '/boats' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => currentPath === path || currentPath.includes(path + '/');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'FR' ? 'EN' : 'FR');
  };

  return (
    <nav className="bg-gradient-to-r from-[#2a2765] to-[#15103a] text-white shadow-lg fixed w-full top-0 z-50 border-b-2 border-[#37b7ab]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <Link href="/">
              <Image
                src="/Logo-png.png"
                alt="My Website Logo"
                width={90}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative text-white ${isActive(item.path) ? 'text-[#37b7ab] font-bold' : 'hover:text-[#37b7ab]' } transition-colors duration-200 py-2 group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#37b7ab] transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-[#37b7ab] transition-colors duration-200 group"
            >
              <Globe size={24} className="transform group-hover:rotate-180 transition-transform duration-500" />
              <span>{language}</span>
            </button>

            {/* Login/Register */}
          

            {/* Book Now Button */}
            <Link href="/reservation">
              <Button 
                className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Calendar size={18} aria-hidden="true" />
                Réserver Maintenant
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#37b7ab] p-2 transition-colors duration-200"
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
          <div className="px-2 pt-2 pb-3 space-y-2 backdrop-blur-md bg-[#2a2765]/90 rounded-lg mb-4">
            <Link
              key="Home"
              href="/"
              className={`block px-4 py-3 text-white ${currentPath === '/' ? 'text-[#37b7ab] font-bold' : 'hover:text-[#37b7ab]' } hover:bg-white/10 rounded-lg transition-all duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block px-4 py-3 text-white ${isActive(item.path) ? 'text-[#37b7ab] font-bold' : 'hover:text-[#37b7ab]' } hover:bg-white/10 rounded-lg transition-all duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-6 space-y-4 p-4 border-t border-white/20">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-[#37b7ab] transition-colors duration-200 w-full"
              >
                <Globe size={24} aria-hidden="true" />
                <span>{language}</span>
              </button>
              
              <Link href="/reservation">
                <Button 
                  className="w-full bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <Calendar size={18} aria-hidden="true" />
                  Réserver Maintenant
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