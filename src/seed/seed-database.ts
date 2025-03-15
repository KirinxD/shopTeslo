import { initialData } from "./seed";
import { prisma } from "../lib/prisma";
import { countries } from "./seed-countries";

async function main() {
  //Elimino registros anteriores
  await prisma.country.deleteMany();
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  //Categorias
  const { categories, products, users } = initialData;
  await prisma.user.createMany({ data: users });
  
  const categoriesData = categories.map((category) => ({ name: category }));
  await prisma.category.createMany({ data: categoriesData });

  const categoriesDb = await prisma.category.findMany();
  const categoriesMap = categoriesDb.reduce((map, category) => {
    map[category.name] = category.id;
    return map;
  }, {} as Record<string, string>);

  //Paises
  const countryDb=await prisma.country.createMany({
    data:countries
  })

  //Productos
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: { ...rest, categoryId: categoriesMap[type] },
    });

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));
    await prisma.productImage.createMany({ data: imagesData });
  });

  console.log("seed ejecutada correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
