"use server"
import { getLocale, getPayloadInstance } from "@/lib/payload";

export async function getrestaurants(slug:string){
    const payload = await getPayloadInstance();
    const locale = await getLocale();
    const docs  = await payload.find({
      collection: 'bars',
      where: {
        'category.slug': {
          equals: slug
        }
      },
      depth: 2,
      locale: locale,

    });
    const blogDocs = docs.docs;
    console.log(blogDocs);
    return blogDocs;
  }
 