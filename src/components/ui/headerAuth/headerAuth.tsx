import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";
import { FaShirtsinbulk } from "react-icons/fa6";

export const HeaderAuth = () => {
  return (
    <nav className="flex px-5 w-full mt-4">
      <Link className="text-black transition-colors duration-200 hover:text-pink-300" href={"/"}>
        <div className="flex flex-col items-center">
          <FaShirtsinbulk
            size={25}
            className=""
          />

          <span
            className={`${titleFont.className} antialiased font-bold
          `}
          >
            Teslo
          </span>
        </div>
      </Link>
    </nav>
  );
};
