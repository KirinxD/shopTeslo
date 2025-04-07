import { Footer, Section, SideBar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu section={true} />
      <div className="flex mt-2  justify-center sm:hidden"><Section /></div>
      <SideBar />
      <div className="px-1 sm:px-10">{children}</div>
      <Footer />
    </main>
  );
}
