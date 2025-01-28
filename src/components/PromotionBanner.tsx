"use client"
import { useTranslation } from "@/translations/provider/localeProvider";
import { Button } from "./ui/button";

const PromotionsBanner = () => {
  const {translations}=useTranslation()
    return (
      <section className="bg-[#ea3e4e] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0">
{translations["discountOffer"]}            </div>
            <Button className="bg-white text-[#ea3e4e] hover:bg-[#37b7ab] hover:text-white rounded-full transform hover:scale-105 transition-all duration-200">
{          translations["seeOffers"]
}            </Button>
          </div>
        </div>
      </section>
    );
  };
  export default PromotionsBanner