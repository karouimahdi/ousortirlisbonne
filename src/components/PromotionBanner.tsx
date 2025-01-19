import { Button } from "./ui/button";

const PromotionsBanner = () => {
    return (
      <section className="bg-[#ea3e4e] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0">
              -10% sur votre prochaine réservation !
            </div>
            <Button className="bg-white text-[#ea3e4e] hover:bg-[#37b7ab] hover:text-white rounded-full transform hover:scale-105 transition-all duration-200">
              Voir les offres
            </Button>
          </div>
        </div>
      </section>
    );
  };
  export default PromotionsBanner