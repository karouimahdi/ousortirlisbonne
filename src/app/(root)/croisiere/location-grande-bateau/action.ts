// src/app/actions.ts
"use server";

import { getPayloadInstance } from "@/lib/payload";
import { getLocale } from "@/lib/payload";

export async function getBoats() {
    const payload = await getPayloadInstance();
    const locale = await getLocale();
  
    const { docs } = await payload.find({
      collection: "boats",
      locale: locale,
      depth: 2, // Ensure nested media fields are fully populated
    });
  
    return docs.map((doc) => ({
      title: doc.title,
      capacity: doc.capacity,
      description: doc.description,
      badge: doc.badge,
      prices: doc.prices?.map((price) => ({
        duration: price.duration,
        price: price.price,
      })),
      features: doc.features?.map((feature) => feature.text),
      images: doc.images?.map((img) => {
        // Safely assert the type of `img.image` to access `id`, `alt`, and `url`
        const image = img.image as unknown as { id: string; alt: string; url: string };
        return {
          id: image.id,
          alt: image.alt,
          url: image.url,
        };
      }),
    }));
  }