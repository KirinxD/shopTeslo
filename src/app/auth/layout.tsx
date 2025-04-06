import { TopMenu } from "@/components";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4">
      <TopMenu section={false} />
      <main className="flex justify-center">
        <div className="w-full sm:w-[350px] px-10">{children}</div>
      </main>
    </div>
  );
}
