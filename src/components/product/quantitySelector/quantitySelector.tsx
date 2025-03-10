"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}
export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(quantity);
  const [limitBuy, setLimitBuy] = useState(false);
  const onQuantityChanged = (value: number) => {
    if (count + value > 10) {
      setLimitBuy(true);
    } else if (count + value <= 10 && count + value >= 1) {
      setCount(count + value);
      if (limitBuy) setLimitBuy(false);
    }
  };
  return (
    <>
      <div className="flex">
        <button onClick={() => onQuantityChanged(-1)}>
          <IoRemoveCircleOutline className="hover:text-blue-600 transition-colors duration-200" size={30} />
        </button>
        <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded">
          {count}
        </span>
        <button onClick={() => onQuantityChanged(+1)}>
          <IoAddCircleOutline className="hover:text-blue-600 transition-colors duration-200" size={30} />
        </button>
      </div>
      <div className="mt-2">
        {limitBuy && (
          <span className="text-red-500 text-sm font-bold">
            {" "}
            El limite de compra 10 unidades
          </span>
        )}
      </div>
    </>
  );
};
