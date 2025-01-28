"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import useSWR from "swr";
import { getEventDay } from "./action";
import { useRouter } from "next/navigation";
interface Event {
  title: string;
  description: string;
  image: string;
  slug: string;
  
}
const FeaturedEvent = () => {
  const { data: event } = useSWR(
    useSWR<Event>,
    async (_) => await getEventDay()
  );
  const router = useRouter(); // Initialisez useRouter
  const handleLearnMore = () => {
    if (event?.slug) {
      router.push(`/${event.slug}`); // Redirigez vers la page du slug
    }
  };

    return (
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                 src={
                  typeof event?.image === "string"
                    ? event.image
                    : (event?.image.url ?? undefined)
                }       />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-[#2a2765] mb-4">
                Événement du Jour
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                {event?.title}
              </h4>
              <p className="text-gray-600 mb-6">
{event?.description}              </p>
           
              <Button  onClick={handleLearnMore} className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white rounded-full transform hover:scale-105 transition-all duration-200">
                En savoir plus
              </Button>
             
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default FeaturedEvent
  