import type { CollectionConfig } from "payload";

export const BlogCategory: CollectionConfig = {
  slug: "blogs-categories",
  labels: {
    singular: "Blog Category",
    plural: "Blog Categories",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
  ],
};
