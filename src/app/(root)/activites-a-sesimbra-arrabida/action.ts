"use server";

import { getLocale } from "@/lib/payload";

import { getPayloadInstance } from "@/lib/payload";

export async function getSessimbraActivities(){
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  const activity = await payload.find({
    collection: "sessimbra-activities",
    locale: locale,
  });
  const blogDocs = activity.docs;
  return blogDocs;
}