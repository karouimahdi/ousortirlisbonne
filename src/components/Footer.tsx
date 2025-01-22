"use client";

import React from 'react';
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from "@/translations/provider/localeProvider";

const Footer = () => {
  const { translations, setLocale, locale } = useTranslation();

  // Updated categories with unique IDs
  const categories = [
    { id: 1, name: translations["events"], path: '/events' },
    { id: 2, name: translations["restaurants"], path: '/restaurants' },
    { id: 3, name: translations["bars"], path: '/bars' },
    { id: 4, name: translations["clubs"], path: '/clubs' },
    { id: 5, name: translations["activities"], path: '/activities' },
    { id: 6, name: translations["boats"], path: '/boats' },
    { id: 7, name: translations["blog"], path: '/blog' },
    { id: 8, name: translations["contact"], path: '/contact' }
  ];

  // Updated links with unique IDs
  const links = [
    { id: 1, name: translations["about"], path: '/about' },
    { id: 2, name: translations["privacyPolicy"], path: '/privacy-policy' },
    { id: 3, name: translations["termsAndConditions"], path: '/terms-and-conditions' },
    { id: 4, name: translations["contact"], path: '/contact' }
  ];

  const toggleLanguage = () => {
    const locales: ("fr" | "en" | "pt")[] = ['fr', 'en', 'pt']; // Explicitly type the locales array
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    const newLocale = locales[nextIndex]; // newLocale is now correctly typed as "fr" | "en" | "pt"
    setLocale(newLocale);
  };

  return (
    <footer className="bg-[#2a2765] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
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
            <p className="text-gray-300">
              {translations["footerDescription"]}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#37b7ab] transition-transform hover:scale-110 duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#37b7ab] transition-transform hover:scale-110 duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#37b7ab] transition-transform hover:scale-110 duration-300">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="hover:text-[#37b7ab] transition-transform hover:scale-110 duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#37b7ab]">{translations["categories"]}</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={category.path} 
                    className="text-gray-300 hover:text-[#37b7ab] transition-colors duration-200 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-200">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#37b7ab]">{translations["usefulLinks"]}</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.id}>
                  <Link 
                    href={link.path} 
                    className="text-gray-300 hover:text-[#37b7ab] transition-colors duration-200 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#37b7ab]">{translations["newsletter"]}</h3>
            <p className="text-gray-300">
              {translations["newsletterDescription"]}
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder={translations["yourEmail"]}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#37b7ab] transition-colors duration-200 pr-12"
              />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#ea3e4e] hover:text-[#37b7ab] transition-colors duration-200"
              >
                <Send size={20} />
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-lg font-semibold text-[#37b7ab] mb-4">
                {translations["customerReviews"]}
              </h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-yellow-400 mr-2">★★★★★</span>
                  <span className="text-sm text-gray-300">Trustpilot</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <span className="text-yellow-400 mr-2">4.8/5</span>
                  <span className="text-sm text-gray-300">Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              {translations["footerRights"]}
            </p>
            <button 
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-[#37b7ab] transition-colors duration-200 text-sm flex items-center space-x-2"
            >
              <span>{locale.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;