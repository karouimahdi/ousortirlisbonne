// app/contact/page.tsx
"use client";

import React from "react";
import Navbar from "@/components/Navbar"; // Ajustez le chemin d'importation selon votre structure de projet
import { motion } from "motion/react";
import localFont from "next/font/local";
import { Mail, Phone, MessageCircle } from "lucide-react"; // Icônes pour les informations de contact

// Charger les polices Garage Gothic

const ContactPage = () => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-[#2a2765] to-[#37b7ab] } font-sans`}
    >
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Titre de la page avec animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl font-bold text-white mb-8   text-center`}
        >
          Contactez-nous
        </motion.h1>

        {/* Slogan avec animation */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-lg text-white mb-12 font-bold text-center`}
        >
          Faites de votre vie un évènement!
        </motion.p>

        {/* Carte de contact avec animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-2xl"
        >
          {/* Formulaire de contact */}
          <form className="space-y-6">
            {/* Champ Nom */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#2a2765]"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#37b7ab] focus:border-[#37b7ab]"
              />
            </motion.div>

            {/* Champ Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#2a2765]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#37b7ab] focus:border-[#37b7ab]"
              />
            </motion.div>

            {/* Champ Sujet */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[#2a2765]"
              >
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#37b7ab] focus:border-[#37b7ab]"
              />
            </motion.div>

            {/* Champ Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#2a2765]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#37b7ab] focus:border-[#37b7ab]"
              />
            </motion.div>

            {/* Bouton Envoyer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <button
                type="submit"
                className="w-full bg-[#37b7ab] text-white px-6 py-3 rounded-md hover:bg-[#2a2765] transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Envoyer
              </button>
            </motion.div>
          </form>

          {/* Bouton WhatsApp avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-8"
          >
            <a
              href="https://wa.me/yourphonenumber" // Remplacez par votre numéro WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-2" />
              <span>Contactez-nous sur WhatsApp</span>
            </a>
          </motion.div>

          {/* Informations de contact avec icônes et animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-8 space-y-4 text-center"
          >
            <div className="flex items-center justify-center space-x-2">
              <Mail className="text-[#2a2765]" />
              <p className="text-gray-700">contact@example.com</p>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="text-[#2a2765]" />
              <p className="text-gray-700">+33 1 23 45 67 89</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
