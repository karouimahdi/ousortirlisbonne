// data/activities.ts
export const categories = [
    {
      id: 1,
    name: "Nautiques",
    icon: "/nautique.png",
    slug: "nautiques", // Add a slug property

    activities: [
      {
        id: 1,
        title: "Jet Ski",
        description: "Profitez d'une balade en jet ski sur les eaux turquoise.",
        price: "50€",
        location: "Plage de la Baie",
        images: ["/jet1.jpg", "/jet2.jpg", "/jet3.jpg"],
        details: {
          tariffs: [
            { duration: "2 heures", price: "300€" },
            { duration: "3 heures", price: "375€" },
            // Add more as needed
          ],
          itinerary: "Découvrez les charmes de Lisbonne, notamment le Cristo Rei, le pont 25 de Abril, la Torre de Belém, la Praça do Comércio et le Padrão dos Descobrimentos.",
          additionalInfo: "Les tarifs présentés incluent la privatisation complète du voilier, que vous soyez 5 ou 10 participants.",
          // Other details

        },
        image: "/jetSki.jpeg",

      },
      ],
    },
    {
      id: 2,
      name: "Terrestres",
      icon: "/terrestre.png",
      slug: "terrestre", // Add a slug property

      activities: [
        {
          id: 3,
          title: "Randonnée en montagne",
          description: "Découvrez des paysages à couper le souffle.",
          price: "30€",
          location: "Montagne du Pic",
          image: "/rand.jpeg",
          images: ["/jet1.jpg", "/jet2.jpg", "/jet3.jpg"],
          details: {
            tariffs: [
              { duration: "2 heures", price: "300€" },
              { duration: "3 heures", price: "375€" },
              // Add more as needed
            ],
            itinerary: "Découvrez les charmes de Lisbonne, notamment le Cristo Rei, le pont 25 de Abril, la Torre de Belém, la Praça do Comércio et le Padrão dos Descobrimentos.",
            additionalInfo: "Les tarifs présentés incluent la privatisation complète du voilier, que vous soyez 5 ou 10 participants.",
            // Other details
  
          },
        },
      ],
    },
    {
      id: 3,
      name: "Visites Guidées",
      slug: "visites-guidees", // Add a slug property

      icon: "/visite.png",
      activities: [
        {
          id: 4,
          title: "Visite de la vieille ville",
          description: "Explorez l'histoire et la culture locale.",
          price: "20€",
          location: "Centre-ville historique",
          image: "/rand.jpeg",
          images: ["/jet1.jpg", "/jet2.jpg", "/jet3.jpg"],
          details: {
            tariffs: [
              { duration: "2 heures", price: "300€" },
              { duration: "3 heures", price: "375€" },
              // Add more as needed
            ],
            itinerary: "Découvrez les charmes de Lisbonne, notamment le Cristo Rei, le pont 25 de Abril, la Torre de Belém, la Praça do Comércio et le Padrão dos Descobrimentos.",
            additionalInfo: "Les tarifs présentés incluent la privatisation complète du voilier, que vous soyez 5 ou 10 participants.",
            // Other details
  
          },
        },
      ],
    },
  ];