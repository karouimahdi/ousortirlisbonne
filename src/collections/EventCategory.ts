import type { CollectionConfig } from "payload";

export const EventCategory: CollectionConfig = {
  slug: "events-categories",
  labels: {
    singular: "Event Category",
    plural: "Envents Categories",
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
