import { ProductGrid, Title } from "@/components";
import NotFound from "../not-found";
import { initialData } from "@/seed/seed";

interface Props {
  params: {
    id: string;
  };
}

export default async function Checkoutage({ params }: Props) {
  const { id } = await params;
  const gender = id === "kid" ? "Niños" : id === "women" ? "Mujer" : "Hombre";
  const productsPerGender = initialData.products.filter((product) => product.gender === id);
  /*if (id=="kids") return NotFound()*/
  return (
    <main className="flex flex-col gap-8 row-start-2  sm:items-start ">
      <Title
        title={`Articulo de ${gender}`}
        subtitle="Articulos por categoria"
      />
      <ProductGrid products={productsPerGender} />
    </main>
  );
}
