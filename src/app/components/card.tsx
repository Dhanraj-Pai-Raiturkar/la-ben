"use client";

import Image from "next/image";
import React from "react";

export type CardProps = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div
      key={title + image}
      className="shadow-md rounded-lg p-3 md:px-2 md:py-4 flex flex-col items-start min-h-[29rem] justify-around"
    >
      <div className="relative w-full h-64">
        <Image
          className="rounded-md"
          width={0}
          height={0}
          style={{ width: "100%", height: "200px", minHeight: "257px" }}
          sizes="1000px"
          src={image}
          alt={description}
          objectFit="fill"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-white text-lg font-semibold rounded-md"></div>
      </div>
      <h2 className="text-lg font-semibold my-2 text-slate-600">{title}</h2>
      <p className="text-gray-500 text-base text-slate-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 text-xs font-semibold">
        <a href={link}>Read More</a>
      </button>
    </div>
  );
};

export default Card;
