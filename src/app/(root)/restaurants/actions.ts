"use server";

import { getLocale } from "@/lib/payload";

import { getPayloadInstance } from "@/lib/payload";

export async function getRestoCategories(){
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  const restocat = await payload.find({
    collection: "resto-categories",
    locale: locale,
  });
  const blogDocs = restocat.docs;
  console.log(blogDocs);
  return blogDocs;
}

export async function getFeaturedResto(){
    const payload = await getPayloadInstance();
    const locale = await getLocale();
    const restocat = await payload.find({
      collection: "restaurants",
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