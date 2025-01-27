// src/app/actions.ts
"use server";

import { getPayloadInstance } from "@/lib/payload";
import { getLocale } from "@/lib/payload";

export async function getBoatsByType(type :string ) {
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  
  const { docs } = await payload.find({
    collection: "boats-arrabida",
    where: {
        type: {
          equals: type,
        },
      },
    locale: locale,
  // Get only the first entry
  });

  return docs; // Return first boat party
}