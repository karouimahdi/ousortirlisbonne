

  // collections/Boats.ts
  import { CollectionConfig } from 'payload';
import { text } from 'stream/consumers';
  
  
  const RentBoat: CollectionConfig = {
    slug: 'boats-to-rent',
    admin: {
      useAsTitle: 'title',
      defaultColumns: ['title', 'type', 'capacity'],
    },
    fields: [
      
  
    
      {
        name: 'title',
        type: 'text',
        required: true,
        localized: true,
  
      },
      {
        name:'type',
        type:'text',
        required:true,
        localized:true 

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
  
  export default RentBoat;