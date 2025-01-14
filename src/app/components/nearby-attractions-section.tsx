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
    <div id="attractions">
      <SectionLayout>
        <SectionHeader
          title={"Explore Our Neighborhood"}
          description={
            "Explore the best places around our resort to make your stay unforgettable."
          }
        />
        <SwiperLayout
          breakpoints={sliderBreakpoints}
          displayNavigation={true}
          autoPlay={sliderAutoplayConfig}
          height="300px"
        >
          {nearbyAttractions.map((attractions, index) => (
            <Card key={index} {...attractions} />
          ))}
        </SwiperLayout>
      </SectionLayout>
    </div>
  );
};

export default NearbyAttractionSection;
