import React from 'react';
import { Calendar, Clock, Waves, Martini, Users, MapPin } from 'lucide-react';

const BoatPartyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 ">
          <img 
            src="/Boat-Party.jpeg" 
            alt="Catamaran party" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2a2765]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <div className="animate-fade-in-down text-center">
            <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Boat Party
            </h1>
            <p className="text-2xl mb-8 text-white">Une expérience unique sur la Méditerranée</p>
            <button className="bg-[#ea3e4e] hover:bg-[#ea3e4e]/90 text-white font-bold py-4 px-10 rounded-full transform hover:scale-105 transition-all shadow-lg">
              Embarquez dès maintenant!
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all border border-gray-100">
            <div className="flex items-center mb-4">
              <Users className="w-10 h-10 text-[#37b7ab] mr-4" />
              <h3 className="text-2xl font-semibold text-[#2a2765]">60 Places</h3>
            </div>
            <p className="text-gray-600">Catamaran spacieux avec bars et espace détente</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all border border-gray-100">
            <div className="flex items-center mb-4">
              <Martini className="w-10 h-10 text-[#ea3e4e] mr-4" />
              <h3 className="text-2xl font-semibold text-[#2a2765]">Open Bar</h3>
            </div>
            <p className="text-gray-600">Première heure open bar incluse</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all border border-gray-100">
            <div className="flex items-center mb-4">
              <Waves className="w-10 h-10 text-[#37b7ab] mr-4" />
              <h3 className="text-2xl font-semibold text-[#2a2765]">Baignade</h3>
            </div>
            <p className="text-gray-600">Spots de baignade exceptionnels</p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[#2a2765]">
                Informations
              </h2>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-[#ea3e4e] mr-4" />
                  <p className="text-lg text-gray-700">Tous les samedis de mai à octobre</p>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-8 h-8 text-[#ea3e4e] mr-4" />
                  <p className="text-lg text-gray-700">De 11h à 14h</p>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-[#ea3e4e] mr-4" />
                  <p className="text-lg text-gray-700">Départ du Vieux-Port</p>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#ea3e4e] rounded-xl p-8 text-center w-full transform hover:scale-105 transition-all shadow-lg">
                <h3 className="text-5xl font-bold mb-4 text-white">50€</h3>
                <p className="text-2xl mb-8 text-white">par personne</p>
                <button className="bg-white text-[#ea3e4e] font-bold py-4 px-8 rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg text-lg">
                  Réserver maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatPartyPage;