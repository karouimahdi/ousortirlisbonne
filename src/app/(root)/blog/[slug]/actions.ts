"use server";

import { getPayloadInstance } from "@/lib/payload";

import { getLocale } from "@/lib/payload";

export async function getBlog(slug: string) {
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  const blogs = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: slug,
      },
    },
    locale: locale,
    limit: 1,
    depth: 10,
  });
  return blogs.docs[0];
}