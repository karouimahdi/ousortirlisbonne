
export type BoatParty = {
    title: string;
    description: string;
    image: {
      url: string;
      alt?: string;
    };
    capacity: number;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
    schedule: {
      days: string;
      time: string;
    };
    price: number;
    location: string;
  }

  export type ArrabidaBoat = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: 'motor' | 'sail';
    images: {
      image: {
        id: string;
        alt?:string
        url: string;
      };
      id?: string;
    }[];
    title: string ;
    capacity: string ;
    prices: {
      duration: string;
      price: string;
      id?: string;
    }[];
    features: {
      text: string ;
      id?: string;
    }[];
  };

  export type  CoucheSoleilBoat ={
    title: string;
    price: string;
    time: string;
    capacity: string;
    departure: string;
    isBestSeller: boolean; // Added best-seller property

    images: string[];
  }
  export type  BoatToRent ={
    title: string;
    price: string;
    time: string;
    capacity: string;
    departure: string;
    type:string;
    isBestSeller: boolean; // Added best-seller property

    images: string[];
  }
  export type  SessimbraActivities ={
    title: string;
    description: string[];
    includes: string[];
   // Added best-seller property

    images: string[];
  }
  export type Sport ={
    title:string,
    location:string,
    price:number,
    duration:string,
    includedItems:string[],
    image:string
    badge: string
} 

export type Restaurant= {
  id: string;
  name: string;
  slug: string;
  mainImage: {
    url: string;
    alt?: string;
  };
  category: {
    id: string;
    name: string;
    slug: string;
  };
  location: string;
  price: number;
  highlighted: boolean;
  images: string;
}
  export type RestaurantCategory={
    id:string;
    name:string;
    slug:string;
    image:string;
  }
  type Price ={
    duration: string;
    price: string;
  }
  
  interface Feature {
    icon: string; // Assuming icons are represented as strings (e.g., "Users", "Anchor")
    text: string;
  }
  
  export type BigBoat= {
    title: string;
    capacity: string;
    description: string;
    badge: string;
    prices?: {
      duration: string;
      price: string;
    }[];
    features?: string[];
    images?: {
      
      id: string;
      alt?:string
      url: string;
    
  }[];  }
  export type Discover= {
    id:string;
    title: string;
    duration: string;
    description: string;
    locations: string;
    price: string;
    images: {
      
        id: string;
        alt?:string
        url: string;
      
    }[];  }  