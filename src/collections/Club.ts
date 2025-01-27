import { CollectionConfig } from "payload";

export const Club: CollectionConfig = {
  slug: "club",
  labels: {
    singular: "Club",
    plural: "Clubs",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "price", "location"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized:true
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,

    },
    {
      name: "category",
      type: "relationship",
      relationTo: "resto-categories",
      required: true,

    },
    {
      name: "location",
      type: "text",
      required: true,
      localized:true

    },
    {
      name: "mainImage",
      type: "upload",
      relationTo: "media",
      required: true,
            localized:true

    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        }
      ],
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "contact",
      type: "group",
      fields: [
        {
          name: "phone",
          type: "text",
          required: true,
        },
        {
          name: "hours",
          type: "text",
          defaultValue: "12h-23h",
          required: true,
        }
      ]
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "feature",
          type: "text",
          required: true,
        }
      ],
    },
    {
      name: "highlighted",
      type: "checkbox",
      label: "Featured Restaurant",
      defaultValue: false,
      admin: {
        position: "sidebar",
      }
    },
    {
      name: "verified",
      type: "checkbox",
      label: "Verified Restaurant",
      defaultValue: false,
      admin: {
        position: "sidebar",
      }
    }
  ],
};
