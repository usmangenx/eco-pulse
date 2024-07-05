"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/logo.JPG";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative grid grid-cols-3 items-center border-r-2 border-b-2 border-l-2 p-7 border-gray-200 rounded-b-3xl">
      <div className="flex justify-between items-center col-span-3 md:col-span-1">
        <Image
          src={Logo}
          width={150}
          height={75}
          alt="logo"
        />
        <button
          className="md:hidden block text-gray-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
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
            />
          </svg>
        </button>
      </div>
      <ul className={`col-span-3 md:col-span-1 flex flex-col md:flex-row justify-center items-center ${menuOpen ? "block" : "hidden"} md:flex mt-3 md:mt-0`}>
        <Link href="#home">
          <li className="text-gray-500 font-[600] md:mx-4">HOME</li>
        </Link>
        <Link href="#about">
          <li className="text-gray-500 font-[600] md:mx-4">ABOUT US</li>
        </Link>
        <li className="md:hidden mt-2 md:mt-0">
          <button className="bg-[#4baa04] px-5 rounded-3xl text-white">Join Us</button>
        </li>
      </ul>
      <div className="hidden md:flex col-span-3 md:col-span-1 justify-end mt-2 md:mt-0">
        <button className="bg-[#4baa04] px-5 py-3 rounded-3xl text-white">Join Us</button>
      </div>
    </div>
  );
};

export default NavBar;
