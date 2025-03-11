"use client";
import type{ CartProduct, Product, Sizes } from "@/interfaces";
import { StockLabel } from "../stockLabel/StockLabel";
import { titleFont } from "@/config/fonts";
import { QuantitySelector, SizeSelector } from "@/components";
import { useState } from "react";
import { useCartStore } from "@/store";

export const AddToCart = ({ product }: { product: Product }) => {
const addProductToCart=useCartStore((state)=>state.addProductToCart)
  const [size, setSize] = useState<Sizes>();
  const [quantity, setQuantity] = useState<number>(1);
  const [canBuy, setCanBuy] = useState(false);

  const addtoCart = () => {
    setCanBuy(true);
    if (!size) return;

    const cartProduct :CartProduct ={
        id: product.id,
        slug: product.slug,
        title: product.title,
        price: product.price,
        quantity: quantity,
        size: size,
        images: product.images[0],
    }
    addProductToCart(cartProduct);
    cleanWindow();
  };

  const cleanWindow = () => {
    setCanBuy(false);
    setSize(undefined);
    setQuantity(1);
  }

  return (
    <>
      <StockLabel slug={product.slug} />
      <h1 className={`${titleFont.className} text-2xl font-bold`}>
        {product.title}
      </h1>
      <p className="text-lg mb-5">$ {product.price.toFixed(2)}</p>
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        setSize={setSize}
      />
      <QuantitySelector onQuantityUpdated={setQuantity} quantity={quantity} />
      {canBuy && !size && (
        <p className="mt-2 text-red-500 fade-in">
          {" "}
          Debe seleccionar una talla*
        </p>
      )}
      <button onClick={addtoCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
};
