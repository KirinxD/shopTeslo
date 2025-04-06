export const revalidate = 604800; //7 dias

import { getProductBySlug } from "@/actions";
import { ProductMobileSlidesShow,ProductSlidesShow} from "@/components";
import { AddToCart } from "@/components/product/addToCart/addToCart";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProductBySlug(slug);
  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        {/*Desktop slideshow */}
        <ProductSlidesShow
          className="hidden md:block"
          images={product.images}
          title={product.title}
        />
        {/*Mobile slideshow */}
        <ProductMobileSlidesShow
          className="block md:hidden"
          images={product.images}
          title={product.title}
        />
      </div>
      <div className="col-span1 px-5">
        <AddToCart product={product}  />
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
