"use client";

import React, { CSSProperties, useRef } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import SwiperNavBtn from "./swiper-nav-btns";

export type SwiperLayoutProps = {
  children: React.ReactNode;
  breakpoints?: SwiperOptions["breakpoints"];
  autoPlay?: SwiperOptions["autoplay"];
  height?: CSSProperties["height"];
  displayNavigation?: boolean;
};

const SwiperLayout: React.FC<SwiperLayoutProps> = ({
  children,
  breakpoints,
  autoPlay,
  height,
  displayNavigation,
}) => {
  SwiperCore.use([Autoplay]);
  const swiperRef = useRef({});
  return (
    <div className="flex justify-center items-center w-full cursor-grab active:cursor-grabbing">
      {displayNavigation && (
        <SwiperNavBtn
          onClick={() => (swiperRef.current as any)?.slidePrev()}
          direction="prev"
        />
      )}
      <Swiper
        breakpoints={breakpoints}
        // style={{ height: height ?? "500px" }}
        loop={true}
        autoplay={autoPlay}
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {React.Children.toArray(children).map((child, index) => (
          <SwiperSlide className="p-1" key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      {displayNavigation && (
        <SwiperNavBtn
          onClick={() => (swiperRef.current as any)?.slideNext()}
          direction="next"
        />
      )}
    </div>
  );
};

export default SwiperLayout;
