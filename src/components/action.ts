// src/app/actions.ts
"use server";

import { getPayloadInstance } from "@/lib/payload";
import { getLocale } from "@/lib/payload";

export async function getEventDay() {
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  
  const { docs } = await payload.find({
    collection: "event-day",
    locale: locale,
    limit: 1  // Get only the first entry
  });

  return docs[0]; // Return first boat party
}
export async function getComments(){
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  const { docs } = await payload.find({
    collection: "comments",
    locale: locale,
  });

  return docs;
}