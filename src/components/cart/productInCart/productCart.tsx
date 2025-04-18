"use client";
import { useCartStore } from "@/store";
import { ProductinCart } from "./productInCart";

export const ProductInCart = () => {
 
  const productInCart = useCartStore((state) => state.cart)|| [];

  if (!productInCart) {
    return <p>Loading ... </p>;
  }
  
  return (
    <>
      {productInCart.sort((a, b) => a.slug.localeCompare(b.slug)).map((product) => (
       <ProductinCart key={product.id+product.size} product={product}/>
      ))}
    </>
  );
};
