"use client";

import React from "react";

export type SwiperNavBtnProps = {
  onClick: () => void;
  direction: "prev" | "next";
};

const SwiperNavBtn: React.FC<SwiperNavBtnProps> = ({ onClick, direction }) => {
  const getButton = () => {
    switch (direction) {
      case "prev":
        return (
          <button
            className="hidden md:flex bg-transparent swiper-button-prev w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition"
            aria-label="Previous Slide"
            onClick={onClick}
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
          </button>
        );
      case "next":
        return (
          <button
            className="hidden md:flex bg-transparent swiper-button-next w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition"
            aria-label="Next Slide"
            onClick={onClick}
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
          </button>
        );
      default:
        return <></>;
    }
  };
  return <>{getButton()}</>;
};

export default SwiperNavBtn;
