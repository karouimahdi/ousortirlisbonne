// src/app/actions.ts
"use server";

import { getPayloadInstance } from "@/lib/payload";
import { getLocale } from "@/lib/payload";

export async function getEventCategories() {
  const payload = await getPayloadInstance();
  const locale = await getLocale();

  const { docs } = await payload.find({
    collection: "events-categories", // Match the slug in your collection config
    locale: locale,
    depth: 1, // Adjust depth as needed
  });

  return docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    description: doc.description,
    color: doc.color,
    tags: doc.tags?.map((tag) => tag.tag) || [], // Extract tags
  }));
}