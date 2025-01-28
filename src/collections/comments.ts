import { CollectionConfig } from "payload";

export const Testimential: CollectionConfig = {
  slug: "comments",
  labels: {
    singular: "Testimential",
    plural: "Testimentials",
  },
 
  fields: [
    {
      name: "authorName",
      type: "text",
      required: true,
      localized:true
    },
    {
      name: "description",
      type: "text",
      unique: true,
      required: true,
      localized:true

    },
]
};
