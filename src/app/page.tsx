
// pages/index.tsx

import HeroSection from "@/components/HeroSection";
import ProductSection from "../components/ProductCard";
import FeaturedSection from "../components/Featuredsection";
import GearUpSection from "../components/GearUpSection";
import DontMissSection from "../components/DontMissSection";
import TheEssentials from "../components/TheEssentials";

 
export default function Home() {
  

  return (
    <div>
      
      <div className="container mx-auto p-6 flex">
      <HeroSection />
        
          </div>
      <ProductSection />
      <FeaturedSection />
      <GearUpSection />
      <DontMissSection />
      <TheEssentials />
      
      
    </div>
  );
}





