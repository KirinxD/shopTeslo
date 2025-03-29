"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

//const session =await auth();
export const getOrderByID = async (productId: string) => {
  const session = await auth();

  if (!session?.user) {
    return { ok: false, message: "Debe estar autenticado" };
  }

  const { id, role } = session.user;

  if (!productId) return { ok: false, message: "No hay productID" };;

  const order = await prisma.order.findFirst({
    include: {
      OrderAddress: true,
      OrderItem: {
        include: {
          product: {
            include: {
              ProductImage: {
                take: 1,
                select: {
                  url: true,
                },
              },
            },
          },
        },
      },
    },
    where: {
      id: productId,
      ...(role !== "admin" && { id }),
    }
  });
  //console.log(JSON.stringify(order));
  return !order ? { ok: false, order: null } : { ok: true, order: order };
};
