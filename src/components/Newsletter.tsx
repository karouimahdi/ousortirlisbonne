import { Button } from "@/components/ui/button";
import {Mail} from 'lucide-react';

const Newsletter = () => {
    const handleSubmit = () => {
     
      // Handle newsletter subscription
    };
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2a2765] mb-4">
              Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Restez informé des meilleures offres
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative flex-grow max-w-md">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#37b7ab] focus:border-transparent"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="bg-[#2a2765] hover:bg-[#37b7ab] text-white rounded-full transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
              >
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  export default Newsletter