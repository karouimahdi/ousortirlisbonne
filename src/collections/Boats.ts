

  // collections/Boats.ts
  import { CollectionConfig } from 'payload';
  
  
  const CoucherBoat: CollectionConfig = {
    slug: 'boats-coucher-soleil',
    admin: {
      useAsTitle: 'title',
      defaultColumns: ['title', 'type', 'capacity'],
    },
    fields: [
      
      {
        name: 'images',
        type: 'array',
        fields: [
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
        ],
        required: true,
      },
    
      {
        name: 'title',
        type: 'text',
        required: true,
        localized: true,
  
      },
      {
        name:"best-seller",
        type:"checkbox"
      },
      {
        name: 'capacity',
        type: 'text',
        required: true,
        localized: true,
  
      },  {
        name: 'duration',
        type: 'text',
        required: true,
        localized: true,
  
      },
      {
        name: 'prices',
        type: 'text',
        localized:true

      },
      {
        name: 'départ',
        type: 'text',
        localized:true
      },
    ],
  };
  
  export default CoucherBoat;