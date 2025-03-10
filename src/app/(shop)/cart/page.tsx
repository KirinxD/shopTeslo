import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { FaRegTrashCan } from "react-icons/fa6";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  //redirect("/empty")
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={"Carrito"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items</span>
            <Link href={"/"} className="underline mb-5">
              Continua comprando
            </Link>
            {/* items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
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
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <div className="flex flex-row space-x-1 items-center">
                    <QuantitySelector quantity={2} />
                    <FaRegTrashCan  className=" text-red-500 hover:text-red-600 cursor-pointer" size={25}/>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2"> Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className=" text-right">3 artículos</span>
              <span>Sub total</span>
              <span className=" text-right">$ 100</span>
              <span>Impuesto (15%)</span>
              <span className=" text-right">$ 25.90</span>
              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 125.90</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href={"/checkout/address"}
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
