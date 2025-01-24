import type { CollectionConfig } from 'payload'

export const BlogCategory: CollectionConfig = {
  slug: 'blogs-categories',
  fields: [
    {
      name: 'title',
      type: 'text',
     localized: true,
    },
  
  ]
}