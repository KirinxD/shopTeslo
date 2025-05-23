"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { set } from "zod";

interface Props {
  quantity: number;
  onQuantityUpdated:(value:number)=>void;
  stock: number;
}
export const QuantitySelector = ({ quantity, onQuantityUpdated,stock}: Props) => {
  const [limitBuy, setLimitBuy] = useState(false);
  const [messageError, setMessageError] = useState("");

  const onQuantityChanged = (value: number) => {
    if (quantity + value > 10 || quantity + value > stock) {
      setLimitBuy(true);
      setMessageError(quantity + value > 10 ?"El limite de compra son 10 unidades":"El limite de compra no puede superar al stock disponible");
    } else if (quantity + value <= 10 && quantity + value >= 1) {
      onQuantityUpdated(quantity+value);
      if (limitBuy) setLimitBuy(false);
    }
  };

  return (
    <>
      <div className="flex">
        <button onClick={() => onQuantityChanged(-1)}>
          <IoRemoveCircleOutline className="hover:text-blue-600 transition-colors duration-200 cursor-pointer" size={30} />
        </button>
        <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
          {quantity}
        </span>
        <button onClick={() => onQuantityChanged(+1)}>
          <IoAddCircleOutline className="hover:text-blue-600 transition-colors duration-200 cursor-pointer" size={30} />
        </button>
      </div>
      <div className="mt-2">
        {limitBuy && (
          <span className="text-red-500 fade-in">
           {messageError}
          </span>
        )}
      </div>
    </>
  );
};
