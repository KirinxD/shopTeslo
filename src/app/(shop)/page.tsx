import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products =initialData.products;

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2  sm:items-start ">
      <Title title={"Tienda"} subtitle="Todos los productos"/>
      <ProductGrid products={products}/>
    </main>
  );
}
