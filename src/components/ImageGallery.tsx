"use client";
// components/ImageGallery.tsx
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageGalleryProps {
  images: string[];
  venueName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, venueName }) => {
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  const [showLightbox, setShowLightbox] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setShowLightbox(true);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <motion.div
        className="relative h-[70vh] w-full rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => openLightbox(mainImageIndex)}
      >
        <Image
          src={images[mainImageIndex]}
          alt={`${venueName} - Featured Image`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Secondary Images Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`
              relative aspect-square rounded-lg overflow-hidden cursor-pointer
              ${mainImageIndex === index ? "ring-4 ring-[#37b7ab]" : "hover:ring-2 ring-[#2a2765]"}
              transition-all duration-200 transform hover:scale-[1.02]
            `}
            whileHover={{ y: -4 }}
            onClick={() => setMainImageIndex(index)}
          >
            <Image
              src={img}
              alt={`${venueName} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <Dialog open={showLightbox} onOpenChange={setShowLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-none">
          <div className="relative h-[90vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Image
                  src={images[lightboxIndex]}
                  alt={`${venueName} - Image ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev + 1) % images.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
