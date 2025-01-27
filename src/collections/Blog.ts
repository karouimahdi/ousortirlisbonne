import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blogs",
  labels: {
    singular: "Blog",
    plural: "Blogs",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      localized: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "blogs-categories",
      required: true,
    },
    {
      name: "readTime",
      type: "text",
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
      name: "featured",
      type: "checkbox",
      label: "Featured Article",
      defaultValue: false,
    }
  ],
  admin: {
    defaultColumns: ["title", "category", "date", "readTime", "featured"],
    useAsTitle: "title",
  },
};
