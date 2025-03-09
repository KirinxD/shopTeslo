"use client"
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import {
  IoCartOutline,
  IoSearchOutline,
} from "react-icons/io5";

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div className=" ">
        <Link className="m-2 p-2 " href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold
          text-black transition-colors duration-200 hover:text-red-200`}>
            Teslo
          </span>
        </Link>
        <span className="m-2 p-2"> | Shop</span>
      </div>
      {/* Center Menu */}
      <div className=" hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/kid"
        >
          Niños
        </Link>
      </div>
      {/*search, cart,menu */}
      <div className=" flex items-center">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-6 h-6" />
        </Link>
        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-3 -right-2  text-white bg-blue-600">
              3
            </span>
            <IoCartOutline className="w-6 h-6" />
          </div>
        </Link>
        <button onClick={openMenu} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menú
        </button>
      </div>
    </nav>
  );
};
