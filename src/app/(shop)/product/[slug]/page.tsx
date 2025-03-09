export const revalidate=60;

import {
  ProductMobileSlidesShow,
  ProductSlidesShow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

/*interface Props {
  params: {
    slug: string;
  };
}*/
type Params = Promise<{ slug: string }>;
export default async function ProductPage(props: {
  params: Params;
}) {
  const { slug } = await props.params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        {/*Desktop slideshow */}
        <ProductSlidesShow className="hidden md:block" images={product.images} title={product.title} />
        {/*Mobile slideshow */}
        <ProductMobileSlidesShow className="block md:hidden" images={product.images} title={product.title} />
      </div>
      <div className="col-span1 px-5">
        <h1 className={`${titleFont.className}`}>{product.title}</h1>
        <p className="text-lg mb-5">$ {product.price}</p>
        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />
        <QuantitySelector quantity={1} />
        <button className="btn-primary my-5">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
