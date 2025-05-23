"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import { FaRegTrashCan } from "react-icons/fa6";
import { CartProduct } from "@/interfaces";
import { getStockBySlug } from "@/actions";

interface Props {
  product:CartProduct
}
export const ProductinCart = ({ product }: Props) => {
  const [stockProduct, setStockProduct] = useState<number>(0);
  const updateProductInCart = useCartStore(
    (state) => state.updateProductQuantity
  );
  const deleteProduct=useCartStore((state)=>state.deleteProduct);

  useEffect(() => {
    const fetchStock = async () => {
      const stock = await getStockBySlug(product.slug);
      setStockProduct(stock);
    };
    fetchStock();
  }, [product.slug]);

  return (
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
            onQuantityUpdated={(quantity) =>
              updateProductInCart(product, quantity)
            }
            stock={stockProduct}
          />
          <FaRegTrashCan
            onClick={() => deleteProduct(product)}
            className=" text-red-500 hover:text-red-600 cursor-pointer"
            size={25}
          />
        </div>
      </div>
    </div>
  );
};
