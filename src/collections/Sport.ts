

  import type { CollectionConfig } from "payload";
  
  export const Sport: CollectionConfig = {
    slug: "sports",
    labels: {
      singular: "sport",
      plural: "sports",
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
        name: "location",
        type: "text",
        required: true,
        localized: true,
      },
      {
        name: "price",
        type: "text",
        required: true,
        localized: true,
      },
      {
        name: "duration",
        type: "text",
        required: true,
        unique: true,
        
      },
      {
        name: "includedItems",
        type: "array",
fields:[
   { name:"item",
    type:"text",
    required: true,

   }
],
        required: true,
       
      },
      {
        name: "badge",
        type: "text",
        required: true,
        unique: true,
        
      },
    ]
  };
  