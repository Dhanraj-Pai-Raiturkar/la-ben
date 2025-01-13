import React from "react";
import SwiperLayout from "./swiper-layout";
import {
  nearbyAttractions,
  sliderAutoplayConfig,
  sliderBreakpoints,
} from "../constants";
import Card from "./card";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";

const NearbyAttractionSection = () => {
  return (
    <SectionLayout>
      <SectionHeader
        title={"Nearby Attractions"}
        description={
          "Explore the best places around our resort to make your stay unforgettable."
        }
      />
      <SwiperLayout
        breakpoints={sliderBreakpoints}
        displayNavigation={true}
        autoPlay={sliderAutoplayConfig}
        height="500px"
      >
        {nearbyAttractions.map((attractions, index) => (
          <Card key={index} {...attractions} />
        ))}
      </SwiperLayout>
    </SectionLayout>
  );
};

export default NearbyAttractionSection;
