"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

interface ContactButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  icon?: 'phone' | 'whatsapp';
  text?: string;
  className?: string;
}

const ContactButton = ({
  phoneNumber = "1234567890",
  message = "",
  position = "bottom-right",
  icon = "whatsapp",
  text = "Contactez-nous",
  className = ""
}: ContactButtonProps) => {
  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8'
  };

  const getIcon = () => {
    switch (icon) {
      case 'phone':
        return <Phone className="w-6 h-6" />;
      case 'whatsapp':
        return <MessageCircle className="w-6 h-6" />;
      default:
        return <MessageCircle className="w-6 h-6" />;
    }
  };

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodedMessage}` : ''}`;

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-200"
        />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200"
        >
          {getIcon()}
          <span className="font-medium">{text}</span>
        </a>
      </motion.div>
    </div>
  );
};

export default ContactButton;