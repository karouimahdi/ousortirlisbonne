// src/app/actions.ts
"use server";

import { getPayloadInstance } from "@/lib/payload";
import { getLocale } from "@/lib/payload";

export async function getTours() {
  const payload = await getPayloadInstance();
  const locale = await getLocale();

  const { docs } = await payload.find({
    collection: "discover",
    locale: locale,
    depth: 2, // Ensure nested media fields are fully populated
  });

  return docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    duration: doc.duration,
    description: doc.description,
    locations: doc.locations,
    price: doc.price,
    images: doc.images.map((img) => {
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