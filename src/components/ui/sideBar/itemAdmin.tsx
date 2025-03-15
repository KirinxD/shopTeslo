import Link from "next/link";
import React from "react";
import {
  IoPeopleOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const ItemAdmin = () => {
  return (
    <div>
      <Link
        href="/"
        className="flex p-2 items-center mt-8 hover:bg-gray-100 rounded transition-all"
      >
        <IoTicketOutline size={25} />
        <span className="ml-3 text-xl"> Ordenes</span>
      </Link>

      <div className="w-full h-px bg-gray-200 my-10" />
      <Link
        href="/"
        className="flex p-2 items-center mt-8 hover:bg-gray-100 rounded transition-all"
      >
        <IoShirtOutline size={25} />
        <span className="ml-3 text-xl">Productos</span>
      </Link>
      <Link
        href="/"
        className="flex p-2 items-center mt-8 hover:bg-gray-100 rounded transition-all"
      >
        <IoTicketOutline size={25} />
        <span className="ml-3 text-xl">Ordenes</span>
      </Link>
      <Link
        href="/"
        className="flex p-2 items-center mt-8 hover:bg-gray-100 rounded transition-all"
      >
        <IoPeopleOutline size={25} />
        <span className="ml-3 text-xl">Usuarios</span>
      </Link>
    </div>
  );
};
