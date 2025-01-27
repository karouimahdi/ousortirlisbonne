// src/app/actions.ts
"use server";

import { getPayloadInstance } from "@/lib/payload";
import { getLocale } from "@/lib/payload";

export async function getBoatParties() {
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  
  const { docs } = await payload.find({
    collection: "boat-parties",
    locale: locale,
    limit: 1  // Get only the first entry
  });

  return docs[0]; // Return first boat party
}