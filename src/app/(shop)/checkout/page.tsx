import {  Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={"Verificar orden"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href={"/cart"} className="underline mb-5">
              Editar carrito
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
                  <p>{product.price} x3</p>
                  <p className="font-bold">Subtotal: $ {product.price * 3}</p>
                </div>
              </div>
            ))}{" "}
          </div>
          <div className="bg-white rounded-xl shadow-xl p-7 ">
            <h2 className="text-2xl mb-2 font-semibold"> Dirección de entrega:</h2>
            <div className="mb-4 mt-2">
              <p>Destinatario: Adrián alfonso</p>
              <p>Dirección: Peron 6512</p>
              <p>Ciudad: Grand bourg</p>
              <p>Localidad: Malvinas argentinas</p>
              <p>CP : 1612</p>
            </div>
            <div className="w-full bg-slate-300 h-0.5 rounded" />
            <h2 className="text-2xl mt-4 mb-2 font-semibold"> Resumen de orden:</h2>
            <div className="grid grid-cols-2 ">
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
              <p className="mb-5">
                <span className="text-xs"> Al hacer click &quot;Colocar orden&quot;, aceptas nuestros <a href="#" className="underline">términos y condiciones</a> y <a href="#" className="underline">política de privacidad</a></span>
              </p>
              <Link
                className="flex btn-primary justify-center"
                href={"/orders/123"}
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
