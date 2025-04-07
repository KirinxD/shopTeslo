"use client";
import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { Section } from "./section";

interface Props {
  section:boolean ;
}
export const TopMenu = ({section}:Props) => {
  const totalITems = useCartStore((state) => state.getTotalItems());
  const openMenu = useUIStore((state) => state.openSideMenu);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  },[]);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div className=" ">
        <Link className="m-2 p-2 " href={"/"}>
          <span
            className={`${titleFont.className} antialiased font-bold
          text-black transition-colors duration-200 hover:text-red-200`}
          >
            Teslo
          </span>
        </Link>
        <span > | Shop</span>
      </div>
      {/* Center Menu */}
      {section && <div className=" hidden sm:block">
        <Section/>
      </div>}
      {/*search, cart,menu */}
      <div className=" flex items-center">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-6 h-6" />
        </Link>
        <Link href={totalITems===0 && loaded?"/empty":"/cart"} className="mx-2">
          <div className="relative">
            {loaded && totalITems > 0 && (
              <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-3 -right-2  text-white bg-blue-600">
                {totalITems}
              </span>
            )}
            <IoCartOutline className="w-6 h-6" />
          </div>
        </Link>
        {section && <button
          onClick={openMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>}
      </div>
    </nav>
  );
};
