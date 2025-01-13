"use client";

import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-bannerImage bg-no-repeat bg-cover bg-bottom w-full border-0 p-0 m-0 min-h-screen mb-24">
      {/* <Navbar /> */}
      <div className=" h-screen w-full flex items-end bg-blackOverlay">
        <div className="container mx-auto mb-44 md:mb-40 px-2 md:px-4">
          <h1 className="md:text-4xl text-3xl md:font-bold leading-tight md:mb-1 lg:mb-4 font-semibold">
            Welcome to La Ben
          </h1>
          <p className="text-base md:text-lg text-left text-white-600 md:mb-1 lg:mb-4">
            A budgeted Resort In Goa, India
          </p>
          <button className="font-semibold md:rounded-full text-sm md:text-base bg-black text-white my-2 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-gray-700">
            <Link href="https://www.easeroom.co/HotelbookingNew/#/">
              Book Now
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
