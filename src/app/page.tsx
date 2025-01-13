"use client";

import HeroSection from "./components/hero-section";

import NearbyAttractionSection from "./components/nearby-attractions-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <main className="flex flex-col w-full">
        <div className="w-full">
          <HeroSection />
          <NearbyAttractionSection />
        </div>
      </main>
    </div>
  );
}
