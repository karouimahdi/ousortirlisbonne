import { CollectionConfig } from "payload";

 export const BigBoatCollection  : CollectionConfig ={
  slug: 'boats', // The URL-friendly name for the collection
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'capacity',
      type: 'text',
      label: 'Capacity',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge',
      required: true,
    },
    {
      name: 'prices',
      type: 'array',
      label: 'Prices',
      fields: [
        {
          name: 'duration',
          type: 'text',
          label: 'Duration',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
          required: true,
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        // {
        //   name: 'icon',
        //   type: 'text',
        //   label: 'Icon',
        //   required: true,
        // },
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media', // Assumes you have a media collection for file uploads
          required: true,
        },
      ],
    },
  ],
};

