import { CollectionConfig } from 'payload';

export const SessimbraActivity: CollectionConfig = {
  slug: 'sessimbra-activities',
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
      name: 'descriptions',
      type: 'array',
      fields: [
        {
          name: 'description',
          type: 'text',
          required: true,
        },],
      required: true,
      localized: true,

    },
    {
        name: 'includes',
        type: 'array',
        fields: [
          {
            name: 'include',
            type: 'text',
            required: true,
          },],
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
  ]
};

