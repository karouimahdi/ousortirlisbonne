"use client"

import React from 'react';
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const categories = [
    'Événements',
    'Restaurants',
    'Bars',
    'Clubs',
    'Activités',
    'Bateaux',
    'Blog',
    'Contact'
  ];

  const links = [
    'À propos',
    'Politique de confidentialité',
    'Conditions générales',
    'Contact'
  ];

  return (
    <footer className="bg-[#2a2765] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <Link href="/">
              {/* Utilisez le composant Image de Next.js */}
              <Image
                src="/Logo-png.png" // Chemin de l'image dans le dossier public
                alt="Logo"
                width={90} // Largeur de l'image
                height={60} // Hauteur de l'image
                className="object-contain" // Assurez-vous que l'image s'adapte bien
              />
            </Link>
          </div>
            <p className="text-gray-300">
              Découvrez les meilleures expériences pour vos sorties
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
            <h3 className="text-xl font-semibold text-[#37b7ab]">Catégories</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-[#37b7ab] transition-colors duration-200 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-200">
                      {category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#37b7ab]">Liens Utiles</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-[#37b7ab] transition-colors duration-200 flex items-center group"
                  >
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-200">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#37b7ab]">Newsletter</h3>
            <p className="text-gray-300">
              Recevez les meilleurs plans dans votre boîte mail
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Votre email"
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
                Avis Clients
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
              © 2025 Tous droits réservés
            </p>
            <button 
              className="text-gray-300 hover:text-[#37b7ab] transition-colors duration-200 text-sm flex items-center space-x-2"
            >
              <span>FR</span>
              <span className="text-[#37b7ab]">|</span>
              <span>EN</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;