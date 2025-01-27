import type { CollectionConfig } from "payload";

export const Decouvertes: CollectionConfig = {
  slug: "discover",
  labels: {
    singular: "Discover",
    plural: "Dicovers",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "duration",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "price",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "locations",
      type: "text",
      required: true,
      localized: true,
    },
  
    ],
  admin: {
    defaultColumns: ["title", "category", "date", "readTime", "featured"],
    useAsTitle: "title",
  },
};
