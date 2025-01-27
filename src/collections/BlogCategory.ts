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
      required: true,
    },
    {
      name: "description",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },  {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: 'color',
      type: 'text',
      required: true,
      defaultValue: '#000000',
      admin: {
        description: 'Hex color code for category styling'
      }
    },
   
    {
      name: 'priority',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Higher numbers appear first in category lists'
      }
    }
  ],
};
