"use client";

import Link from "next/link";
import React, { useState } from "react";
import { navigationMenu } from "../constants";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="w-full p-2 md:px-20 md:py-2">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            // className="bg-black bg-opacity-75 text-white p-2 rounded-md focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-between">
          <div className="hidden md:flex items-center justify-center">
            {/* <Image
              className="cursor-pointer"
              alt="logo"
              src="/logomain.jpeg"
              width={50}
              height={50}
            /> */}
            <h1 className="text-xl font-semibold text-gray-800 w-48">La Ben</h1>
          </div>
          <ul className="hidden md:flex w-full items-center justify-end">
            {navigationMenu.map((navItem, index) => (
              <li key={`navItem-desktop-${index}`} className="mx-4">
                <span className="uppercase text-base text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-semibold hover:cursor-pointer">
                  {navItem.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-black bg-opacity-25 w-full h-full p-4">
            <button
              onClick={closeModal}
              className="text-white focus:outline-none absolute top-4 right-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-center h-full space-y-4">
              {navigationMenu.map((navItem, index) => (
                <li key={`navItem-mobile-${index}`}>
                  <Link href="/">
                    <span
                      onClick={closeModal}
                      className="uppercase text-base text-white px-3 py-2 rounded-md text-sm font-semibold hover:cursor-pointer"
                    >
                      {navItem.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
