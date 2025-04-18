import { getPaginatedOrders } from "@/actions";
import { Title } from "@/components";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { IoCardOutline } from "react-icons/io5";

export default async function pageOrder() {
  const { ok, orders } = await getPaginatedOrders();

  if (!ok) {
    redirect("/");
  } else if (!orders) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Title title="Ordenes de usuarios" />
      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b border-gray-300">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                #ID
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Fecha compra
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Nombre completo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Estado
              </th>
             
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b border-gray-300 transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #{order.id.split("-").at(-1)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.createdAt
                    .toISOString()
                    .replace("T", " ")
                    .split(".")[0]
                    .trim()}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap capitalize">
                  {order?.OrderAddress?.firstName}{" "}
                  {order?.OrderAddress?.lastName}
                </td>
                <td className="flex items-center text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {order.isPaid ? (
                    <>
                      <IoCardOutline className="text-green-800" />
                      <span className="mx-2 text-green-800">Pagada - {order.paidAt
                    ?.toISOString()
                    .replace("T", " ")
                    .split(".")[0]
                    .trim() || ""} </span>
                    </>
                  ) : (
                    <>
                      <IoCardOutline className="text-red-800" />
                      <span className="mx-2 text-red-800">No Pagada</span>
                    </>
                  )}
                </td>
                
                <td className="text-sm text-gray-900 font-light px-6 ">
                  <Link
                    href={`/admin/orders/${order.id}`}
                    className="hover:underline"
                  >
                    Ver orden
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
