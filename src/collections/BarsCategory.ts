// src/collections/CategoryRestaurants.ts
import { CollectionConfig } from "payload";

export const CategoryBars: CollectionConfig = {
  slug: "bar-categories",
  labels: {
    singular: "Bar Category",
    plural: "Bar Categories",
  },
  admin: {
    useAsTitle: "name",
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "highlighted",
      type: "checkbox",
      label: "Featured Category",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
