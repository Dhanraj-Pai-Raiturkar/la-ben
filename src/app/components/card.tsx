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
      className="shadow-md rounded-lg px-2 py-4 flex flex-col items-start h-3/4"
    >
      <Image
        className="rounded-md"
        width={0}
        height={0}
        style={{ width: "100%", height: "200px" }}
        sizes="300px"
        src={image}
        alt={description}
        objectFit="cover"
        objectPosition="center"
      />
      <h2 className="text-lg font-semibold my-2 text-slate-600">{title}</h2>
      <p className="text-gray-500 text-base text-slate-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 text-xs font-semibold">
        <a href={link}>Read More</a>
      </button>
    </div>
  );
};

export default Card;
