import HeroSection from "./components/hero-section";
import ImageCard from "./components/image-card";

import NearbyAttractionSection from "./components/nearby-attractions-section";
import RestaurantsSection from "./components/restaurants-section";
import RoomsSection from "./components/rooms-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <main className="flex flex-col w-full">
        <div className="w-full">
          <HeroSection />
          <RoomsSection />
          <RestaurantsSection />
          <NearbyAttractionSection />
        </div>
      </main>
    </div>
  );
}
