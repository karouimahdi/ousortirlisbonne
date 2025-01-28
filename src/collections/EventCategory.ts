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
      name: "icon",
      type: "select",
      required: true,
      options: [
        {
          label: "Musique",
          value: "Musique",
        },
        {
          label: "Art",
          value: "Art",
        },
        {
          label: "Cinéma",
          value: "Cinéma",
        },
        {
          label: "Théâtre et spectacles",
          value: "Théâtre et spectacles",
        },
        {
          label: "Gastronomie",
          value: "Gastronomie",
        },
        {
          label: "Sport",
          value: "Sport",
        },
        {
          label: "Famille et enfants",
          value: "Famille et enfants",
        },
        {
          label: "Développement personnel",
          value: "Développement personnel",
        },
        {
          label: "Culture et tradition",
          value: "Culture et tradition",
        },
        {
          label: "Business et réseautage",
          value: "Business et réseautage",
        },
        {
          label: "Autres",
          value: "Autres",
        },
      ],
      admin: {
        description: "Select an icon that represents this category",
      },}
  ],
};
