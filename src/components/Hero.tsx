import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  imageUrl: string;
  title?: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  altText?: string;
}

const HeroSection = ({
  imageUrl,
  title,
  description,
  buttonText,
  buttonLink,
  altText = "Hero background"
}: HeroProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2765]/80 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {description}
            </p>
            <Link href={buttonLink} passHref>
              <Button 
                className="bg-[#ea3e4e] hover:bg-[#37b7ab] text-white px-8 py-6 text-lg rounded-full 
                transform hover:scale-105 transition-all duration-200"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;