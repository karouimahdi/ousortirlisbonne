import type { CollectionConfig } from "payload";

export const EventDay: CollectionConfig = {
  slug: "event-day",
  labels: {
    singular: "Today Event",
    plural: "Today Events",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    
    },  {
        name: "slug",
        type: "text",
        required: true,
      
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
      name: "date",
      type: "text",
      required: true,
     
    },
    {
      name: "time",
      type: "text",
      required: true,
     
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "events-categories",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    
    {
      name: "featured",
      type: "checkbox",
      label: "Featured Article",
      defaultValue: false,
    },
 
    {
        name:"prix",
        type:"text",
        defaultValue:"Gratuit",

    },
    {
        name:"nombre de place",
        type:"text"
    }

  ],
  admin: {
    defaultColumns: ["title", "category", "date", "readTime", "featured"],
    useAsTitle: "title",
  },
};
