import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/ImageS3.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2765]/80 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Découvrez les Meilleures Expériences
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Explorez les événements, restaurants et activités incontournables
              </p>
              <Button className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-200">
                Découvrir Maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default HeroSection