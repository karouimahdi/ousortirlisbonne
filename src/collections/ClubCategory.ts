// src/collections/CategoryRestaurants.ts
import { CollectionConfig } from "payload";

export const ClubCategory: CollectionConfig = {
  slug: "club-categories",
  labels: {
    singular: "Club Category",
    plural: "Club Categories",
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
