// collections/Boats.ts
import { CollectionConfig } from 'payload';


const ArrabidaBoatCollection: CollectionConfig = {
  slug: 'boats-arrabida',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'capacity'],
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Motor Boat', value: 'motor' },
        { label: 'Sail Boat', value: 'sail' },
        { label: 'fishingBoats-Cascais', value: 'fishingBoats' },
        { label: 'SimpleBoat-Cascais', value: 'SimpleBoat' },

      ],
      required: true,
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
      name: 'title',
      type: 'text',
      required: true,
      localized: true,

    },
    {
      name: 'capacity',
      type: 'text',
      required: true,
      localized: true,

    },
    {
      name: 'prices',
      type: 'array',
      fields: [
        {
          name: 'duration',
          type: 'text',
          required: true,
          
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      fields: [
       
        {
          name: 'text',
          type: 'text',
          required: true,
          localized: true,
        }
      ],
    },
  ],
};

export default ArrabidaBoatCollection;