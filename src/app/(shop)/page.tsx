import { titleFont } from "@/config/fonts";


export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className={`${titleFont.className} font-bold`}>Bienvenido</h1>

      </main>

  );
}
