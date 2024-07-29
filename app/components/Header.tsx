"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function changeClick() {
    setClicked(!clicked);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && clicked) {
        setClicked(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [clicked]);

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto  px-4  text-black">
      <h1 className="  text-3xl font-bold hover:scale-110 transition ease-out">
        {" "}
        Moti Ai{" "}
      </h1>

      <ul className=" hidden md:flex gap-3 ">
        <li className="p-4 hover:text-green1 transition ease-in-out">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4 hover:text-green1 transition ease-in-out">
          <Link href="/extension">Extension</Link>
        </li>
        <li className="p-4 hover:text-green1 transition ease-in-out">
          <Link href="/login">Login</Link>
        </li>
        <li className="p-4 hover:text-green1 transition ease-in-out">
          <Link href="/signup">Sign Up</Link>
        </li>
      </ul>

      <div onClick={changeClick} className="text-xl text-black block md:hidden">
        {clicked ? (
          <FaTimes className="text-3xl" />
        ) : (
          <FaBars className="text-3xl" />
        )}
      </div>

      <div
        className={
          clicked
            ? "fixed left-0 top-0  w-[60%] h-full border-r-gray-300 bg-[#000300] transition-all duration-500 ease-in-out"
            : "fixed left-[-100%] transition-all duration-500 "
        }
      >
        <h1 className=" text-3xl font-bold text-green1 p-4 mt-4">Flow.</h1>
        <ul className="pt-10 uppercase text-white">
          <li className="p-4 border-b border-gray-600 ">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link href="/about">Extension</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link href="/about">Login</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link href="/about">Sign Up</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
