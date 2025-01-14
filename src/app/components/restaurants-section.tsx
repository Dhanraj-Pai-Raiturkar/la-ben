import React from "react";
import HeroLayout from "./hero-layout";
import SectionLayout from "./section-layout";
import SectionHeader from "./section-header";
import SwiperLayout from "./swiper-layout";
import ImageCard from "./image-card";
import { restaurantsData, sliderAutoplayConfig } from "../constants";

const RestaurantsSection = () => {
  return (
    <div id="restaurants">
      <HeroLayout background="bg-neutral-900" height="h-[37rem] md:h-[33rem]">
        <SectionLayout customStyles="flex flex-col md:flex-row justify-around md:justify-between items-center h-full py-16 md:py-8">
          <div className="flex flex-col">
            <p className="text-xs font-semibold text-neutral-400 uppercase">
              salud!
            </p>
            <SectionHeader
              title="Dining Experiences"
              titleColor="text-white-600"
              descriptionColor="text-white-600"
              description="Indulge in a variety of gourmet cuisines and exquisite dining experiences at our on-site restaurants."
              customStyles={"gap-2"}
            />
          </div>
          <SwiperLayout
            displayNavigation
            autoPlay={sliderAutoplayConfig}
            width="w-full md:w-2/3"
            navColor="white"
          >
            {restaurantsData.map((_, index) => (
              <ImageCard
                width="w-full"
                height="h-[20rem]"
                key={_.title + index}
                customStyles="shadow-sm shadow-gray-100"
                linkText="view menu"
                {..._}
              />
            ))}
          </SwiperLayout>
        </SectionLayout>
      </HeroLayout>
    </div>
  );
};

export default RestaurantsSection;
