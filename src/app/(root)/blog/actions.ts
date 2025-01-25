"use server";

import { getLocale } from "@/lib/payload";

import { getPayloadInstance } from "@/lib/payload";

export async function getBlogs() {
  const payload = await getPayloadInstance();
  const locale = await getLocale();
  const blogs = await payload.find({
    collection: "forms",
    locale: locale,
  });
  const blogDocs = blogs.docs;
  console.log(blogDocs);
  return blogDocs;
}
