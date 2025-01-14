"use client";

import Link from "next/link";
import React from "react";
import HeroLayout from "./hero-layout";

const HeroSection = () => {
  return (
    <HeroLayout background="bg-bannerImage">
      <div className=" h-screen w-full flex items-end bg-blackOverlay">
        <div className="container mx-auto mb-60 md:mb-40 px-2 md:px-4 lg:px-20">
          <h1 className="md:text-4xl text-3xl md:font-bold leading-tight font-semibold">
            Welcome to Resort Name
          </h1>
          <p className="text-base md:text-lg text-left text-white-600 md:mb-1 lg:mb-4">
            A Resort In Goa, India
          </p>
          <button className="font-semibold md:rounded-full text-sm md:text-base bg-white text-black my-1 px-4 py-1 md:px-6 md:py-2 rounded-md hover:bg-gray-300">
            <Link href="#">Book Now</Link>
          </button>
        </div>
      </div>
    </HeroLayout>
  );
};

export default HeroSection;
