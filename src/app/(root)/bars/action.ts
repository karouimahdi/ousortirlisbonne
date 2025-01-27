"use server";

import { getLocale } from "@/lib/payload";

import { getPayloadInstance } from "@/lib/payload";

export async function getBarsCategories(){
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  const restocat = await payload.find({
    collection: "bar-categories",
    locale: locale,
  });
  const blogDocs = restocat.docs;
  console.log(blogDocs);
  return blogDocs;
}

export async function getFeaturedBars(){
    const payload = await getPayloadInstance();
    const locale = await getLocale();
    const restocat = await payload.find({
      collection: "bars",
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