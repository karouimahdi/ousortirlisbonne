
  
  // app/lib/data.ts
  export const venues= [
    {
      id: 1,
      name: "Le Petit Jardin",
      slug: "le-petit-jardin",
      category: "Restaurants Gastronomiques",
      categorySlug: "restaurants-gastronomiques",
      location: "Paris 8ème",
      image: "/resto2*.jpeg",
      description: "Un havre de paix au cœur de Paris avec une cuisine raffinée",
      price: "€€€",
      images: [
        '/rest1.jpeg',
        '/rsto.jpeg',
        '/resto2*.jpeg',
        '/rsto3.jpeg'
      ],
      phone: "+33 1 XX XX XX XX",
      hours: "12h-23h",
    },
    // Add more venues...
  ];
  
  export const categories = [
    { 
      id: 1, 
      name: 'Rooftops', 
      slug: 'rooftops',
      image: '/rooftop.jpeg' 
    },
    { 
      id: 2, 
      name: 'Bars à Cocktails', 
      slug: 'bars-cocktails',
      image: '/bars.jpeg' 
    },
    { 
      id: 3, 
      name: 'Restaurants Gastronomiques', 
      slug: 'restaurants-gastronomiques',
      image: '/rsto.jpeg' 
    },
  ];