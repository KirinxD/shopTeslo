import { getPaginatedProductWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

/*interface Props {
  searchParams: {
    page?: string;
  };
}*/
type SearchParams = Promise<{ [page: string]: string | string[] | undefined }>;
export default async function Home(props: {  searchParams: SearchParams;
}) {
  const params = await props.searchParams;
  const page = params.page ? Number(params.page) : 1;
  const { products,totalPages } = await getPaginatedProductWithImages({page});
  if (products.length === 0) {
    redirect("/");
  }

  return (
    < >
      <Title title={"Tienda"} subtitle="Todos los productos" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
