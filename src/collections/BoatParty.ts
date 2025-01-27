import { CollectionConfig } from 'payload';

export const BoatParty: CollectionConfig = {
  slug: 'boat-parties',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,

    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,

    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      localized: true,

    },
    {
      name: 'capacity',
      type: 'number',
      required: true,
      localized: true,

    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,

        },
        {
          name: 'description',
          type: 'text',
          required: true,
          localized: true,

        }
      ]
    },
    {
      name: 'schedule',
      type: 'group',
      fields: [
        {
          name: 'days',
          type: 'text',
          required: true,
        },
        {
          name: 'time',
          type: 'text',
          required: true,
        }
      ]
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      localized: true,

    }
  ],
};

