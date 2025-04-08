"use client";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { FaRegTrashCan } from "react-icons/fa6";

export const ProductInCart = () => {
  const updateProductInCart=useCartStore((state)=>state.updateProductQuantity);
  const productInCart = useCartStore((state) => state.cart)|| [];
  const deleteProduct=useCartStore((state)=>state.deleteProduct);

  if (!productInCart) {
    return <p>Loading ... </p>;
  }
  
  return (
    <>
      {productInCart.sort((a, b) => a.slug.localeCompare(b.slug)).map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.images}`}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={product.title}
            className="mr-5 rodunded-none"
          />
          <div>
            <Link className="hover:underline" href={`/product/${product.slug}`}>
              <p>
                {product.size} - {product.title}{" "}
              </p>
            </Link>
            <p>{product.price}</p>
            <div className="flex flex-row space-x-1 items-center">
              <QuantitySelector
                quantity={product.quantity}
                onQuantityUpdated={(quantity) => updateProductInCart(product,quantity)}
                stock={0}
                //TODO VER ACA
              />
              <FaRegTrashCan onClick={()=>deleteProduct(product)}
                className=" text-red-500 hover:text-red-600 cursor-pointer"
                size={25}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
