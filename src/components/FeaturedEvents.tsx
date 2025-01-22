import Image from "next/image";
import { Button } from "./ui/button";

const FeaturedEvent = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/images3.jpeg"
                alt="Featured event"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-[#2a2765] mb-4">
                Événement du Jour
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                Festival de Jazz en Plein Air
              </h4>
              <p className="text-gray-600 mb-6">
                Profitez d'une soirée exceptionnelle avec les meilleurs artistes de jazz dans un cadre idyllique. Une expérience unique à ne pas manquer !
              </p>
              <Button className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white rounded-full transform hover:scale-105 transition-all duration-200">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default FeaturedEvent
  