import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  getTotalItems: () => number;
  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  deleteProduct: (product: CartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getSummaryInformation: () => {
        const { cart } = get();
        const subTotal = cart.reduce(
          (subtotal, product) => product.quantity * product.price + subtotal,
          0
        );
        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },
      deleteProduct: (product: CartProduct) => {
        const { cart } = get();
        console.log(cart);
        const updatedCartProducts = cart.filter(
          (item) => item.id != product.id || item.size != product.size
        );
        console.log(updatedCartProducts);
        set({ cart: updatedCartProducts });
        console.log(cart);
      },
      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();
        const updatedCartProducts = cart
          .map((item) => {
            if (item.id === product.id && item.size === product.size) {
              return { ...item, quantity: quantity };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);
        set({ cart: updatedCartProducts });
      },
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      clearCart: () => {
        set({ cart: [] });
      },
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        //Verifico si el producto ya existe en el carrito
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );
        //Si no existe en el carrito, lo agrego
        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }
        //Si existe en el carrito, actualizo la cantidad
        const updatedCart = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });
        set({ cart: updatedCart });
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
