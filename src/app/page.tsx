"use client";

import Image from "next/image";
import HeroSection from "./components/hero-section";
import { nearbyAttractions } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/modules";
import { useRef } from "react";
import SwiperCore from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function Home() {
  SwiperCore.use([Autoplay]);
  const swiperRef = useRef({});
  return (
    <div className="flex flex-col items-center w-full">
      <main className="flex flex-col w-full">
        <div className="w-full">
          <HeroSection />
          <div className="lg:mx-28 md:mx-20 mx-2 py-20">
            <section className="mb-8">
              <h1 className="text-3xl font-bold text-left text-slate-700">
                Nearby Attractions
              </h1>
              <p className="text-lg text-left text-slate-600 mt-2">
                Explore the best places around our resort to make your stay
                unforgettable.
              </p>
            </section>
            {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            <div className="flex justify-center items-center w-full cursor-grab active:cursor-grabbing">
              {/* <button
                className="hidden md:flex bg-transparent swiper-button-prev w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-200 transition"
                aria-label="Previous Slide"
                onClick={() => (swiperRef.current as any)?.slidePrev()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button> */}
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 1, // For small screens (e.g., mobile)
                  },
                  768: {
                    slidesPerView: 2, // For medium screens (e.g., tablets)
                  },
                  1024: {
                    slidesPerView: 3, // For large screens (e.g., desktops)
                  },
                  1280: {
                    slidesPerView: 3, // For extra-large screens
                  },
                }}
                style={{ height: "500px" }}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={() => console.log("slide change")}
              >
                {nearbyAttractions.map((_, index) => (
                  <SwiperSlide key={index}>
                    <div
                      key={index}
                      className="shadow-md rounded-lg px-2 py-4 flex flex-col items-start h-3/4"
                    >
                      <Image
                        className="rounded-md"
                        width={0}
                        height={0}
                        style={{ width: "100%", height: "200px" }}
                        sizes="300px"
                        src={_.image}
                        alt={_.description}
                        objectFit="cover"
                        objectPosition="center"
                      />
                      <h2 className="text-lg font-semibold my-2 text-slate-600">
                        {_.title}
                      </h2>
                      <p className="text-gray-500 text-base text-slate-600">
                        {_.description}
                      </p>
                      <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 text-xs font-semibold">
                        Read More
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <button
                className="hidden md:flex bg-transparent swiper-button-next w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-200 transition"
                aria-label="Next Slide"
                onClick={() => (swiperRef.current as any)?.slideNext()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button> */}
            </div>
            {/* </section> */}
          </div>
        </div>
      </main>
    </div>
  );
}
