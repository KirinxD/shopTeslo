export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Sizes[];
  slug: string;
  tags: string[];
  title: string;
  gender: Sizes;
}

export interface CartProduct{
  id: string;
  slug:string;
  title: string;
  price: number;
  quantity: number;
  size: Sizes;
  images: string;
}

export type Categoty = "men" | "women" | "kid" | "unisex";
export type Sizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ypes = "shirts" | "pants" | "hoodies" | "hats";
