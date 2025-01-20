"use client"
import { TestimonialsSection } from "./testimonials-with-marquee"


const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Sortie tuktuk 2h organisée quasi à la dernière minute. Nous voulions commencer notre séjour par un aperçu de la ville. Et bien mission accomplie grâce au professionnalisme et à la réactivité de l’organisatrice et du chauffeur Khalid. Merci à tous les 2. Nous finissons dans un bon resto recommandé par notre chauffeur ( déposés devant ) le top !!",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Super visite avec Helena ! C’est une guide au top ! très gentille qui s’adapte à vos envies ! A faire absolument lors de votre séjour à Lisbonne. En début de séjour cela vous permettra d’avoir de très bonnes adresses pour tout le reste de votre séjour !",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Nous avons choisi l’option «&nbsp;Découverte de la ville sur mesure&nbsp;» en tour privé et nous avons été ravis ! Notre tour s’est terminé par une dégustation de «&nbsp;petiscos&nbsp;» et de spécialités portugaises.&nbsp; Cette visite est parfaite en début de séjour pour profiter des conseils du guide (lieux à visiter, restaurants, bars, soirées) pour le reste de votre séjour."
  }
]

export function TestimonialsSectionDemo() {
  return (
    <TestimonialsSection
      title="Témoignages Facebook Où sortir à Lisbonne"
      description="Retrouvez l’intégralité des témoignages sur notre page Facebook ou pour les plus récentes sur Truspilot et surtout n’hésitez pas à laisser le votre!"
      testimonials={testimonials}
    />
  )
}