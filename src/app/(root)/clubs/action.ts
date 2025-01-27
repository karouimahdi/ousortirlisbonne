"use server";

import { getLocale } from "@/lib/payload";

import { getPayloadInstance } from "@/lib/payload";

export async function getClubCategories(){
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  const restocat = await payload.find({
    collection: "club-categories",
    locale: locale,
  });
  const blogDocs = restocat.docs;
  console.log(blogDocs);
  return blogDocs;
}

export async function getFeaturedClub(){
    const payload = await getPayloadInstance();
    const locale = await getLocale();
    const restocat = await payload.find({
      collection: "club",
      where: {
        highlighted: {
          equals: true,
        },
      },
      locale: locale,
    });
    const blogDocs = restocat.docs;
    console.log(blogDocs);
    return blogDocs;
  }