"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store";

export const ClearCartClient = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);

  return null;
};
