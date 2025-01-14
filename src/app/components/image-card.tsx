"use client";

import Image from "next/image";
import React from "react";

export type ImageCardProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
};

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  description,
  title,
  link,
}) => {
  return (
    <div className="relative h-[35rem] shadow-md rounded-md">
      <Image
        src={image}
        alt="Room Description"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      <div className="flex flex-col p-2 md:p-4 absolute inset-0 flex items-start justify-end bg-black bg-opacity-45 text-white text-lg font-semibold rounded-md">
        <h2 className="md:text-2xl text-xl md:font-bold leading-tight font-semibold uppercase mb-4">
          {title}
        </h2>
        <p className="text-xs font-light md:text-base text-left md:mb-1 lg:mb-4 w-1/2">
          {description}
        </p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 text-xs font-semibold">
          <a href={link}>Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
