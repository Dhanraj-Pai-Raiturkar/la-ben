import React from "react";
import SwiperLayout from "./swiper-layout";
import {
  nearbyAttractions,
  roomsData,
  sliderAutoplayConfig,
  sliderBreakpointsRooms,
} from "../constants";
import Card from "./card";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import ImageCard from "./image-card";

const RoomsSection = () => {
  return (
    <div id="rooms">
      <SectionLayout>
        <SectionHeader
          title={"Discover Our Luxurious Rooms"}
          description={
            "Experience the epitome of comfort and elegance in our beautifully designed rooms."
          }
        />
        <SwiperLayout
          breakpoints={sliderBreakpointsRooms}
          displayNavigation={true}
          autoPlay={sliderAutoplayConfig}
          height="33rem"
        >
          {roomsData.map((_, index) => (
            <ImageCard height="h-[35rem]" key={index} {..._} />
          ))}
        </SwiperLayout>
      </SectionLayout>
    </div>
  );
};

export default RoomsSection;
