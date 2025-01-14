import React from "react";
import HeroLayout from "./hero-layout";
import SectionLayout from "./section-layout";

const RestaurantsSection = () => {
  return (
    <HeroLayout background="bg-neutral-900" height="h-[30rem]">
      <SectionLayout customStyles="flex flex-col justify-center items-center h-full">
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex,
          exercitationem excepturi ipsam quod minus laborum harum corrupti neque
          architecto repellendus perferendis cumque tempore quos placeat
          nesciunt! Perspiciatis, quae minus?
        </p>
      </SectionLayout>
    </HeroLayout>
  );
};

export default RestaurantsSection;
