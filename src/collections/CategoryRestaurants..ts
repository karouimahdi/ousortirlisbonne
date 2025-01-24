// src/collections/CategoryRestaurants.ts
import { CollectionConfig } from 'payload';

export const CategoryRestaurants: CollectionConfig = {
  slug: 'resto-categories',
 
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'highlighted',
      type: 'checkbox',
      label: 'Featured Category',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      }
    }
  ],
};