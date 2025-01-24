import type { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blogs',
  fields: [
    {
        name: 'miniature',
        type: 'upload',
        relationTo: 'media',
      },
    {
      name: 'title',
      type: 'text',
     localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
        name :'category',
        type: 'relationship',
        relationTo: 'blogs-categories',
        localized: true,
    },
    {
      name: 'content',
      type: 'textarea',
      localized: true,
    },

  ]
}