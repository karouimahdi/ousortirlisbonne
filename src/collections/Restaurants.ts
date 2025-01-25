// src/collections/Restaurants.ts
import { CollectionConfig } from 'payload';


export const Restaurants: CollectionConfig = {
  slug: 'restaurants',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'location'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      
     
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'resto-categories',//es collection slug
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
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
        }
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type:'number'
    },
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
          
        },
        {
          name: 'hours',
          type: 'text',
          defaultValue: '12h-23h',
        }
      ]
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        }
      ],
    },
    {
      name: 'verified',
      type: 'checkbox',
      label: 'Verified Restaurant',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      }
    }
  ],
};