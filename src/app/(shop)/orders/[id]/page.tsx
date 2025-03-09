import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
/*interface Props {
  params: {
    id: string;
  };
}*/

type SearchParams = Promise<{ [id: string]: string | string[] | undefined }>;

export default async function OrderPerIdPage(props: {
  searchParams: SearchParams;
}) {
  const { id } = await props.searchParams;
  //todo: verificar id
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-1 px-3.5 font-bold text-white mb-5",
                { "bg-red-500": true, "bg-green-500": false }
              )}
            >
              <IoCartOutline size={30} />
              <span className="mx-2">Pendiente de pago</span>
            </div>
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
            <h2 className="text-2xl mb-2 font-semibold">
              {" "}
              Dirección de entrega:
            </h2>
            <div className="mb-4 mt-2">
              <p>Destinatario: Adrián alfonso</p>
              <p>Dirección: Peron 6512</p>
              <p>Ciudad: Grand bourg</p>
              <p>Localidad: Malvinas argentinas</p>
              <p>CP : 1612</p>
            </div>
            <div className="w-full bg-slate-300 h-0.5 rounded" />
            <h2 className="text-2xl mt-4 mb-2 font-semibold">
              {" "}
              Resumen de orden:
            </h2>
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
              <div
                className={clsx(
                  "flex items-center rounded-lg py-1 px-3.5 font-bold text-white mb-5",
                  { "bg-red-500": true, "bg-green-500": false }
                )}
              >
                <IoCartOutline size={30} />
                <span className="mx-2">Pendiente de pago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
