import { auth } from "@/auth";
import { Title } from "@/components";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function profilePage() {
  const session = await auth();
  if (!session?.user) redirect("/");
  return (
    <>
      <Title title="Perfil" />
      <div className="flex flex-col lg:flex-row rounded-2xl items-center justify-center ">
        <div className="rounded-lg p-6 items-center justify-center ">
          <Image
            src="/imgs/profile.svg"
            alt="profile"
            width={200}
            height={200}
            className="shadow-lg rounded-full border-2 border-slate-300"
          />

          <div className="flex flex-col items-center justify-center">
            <span className="text-blue-400 text-sm cursor-pointer hover:underline">
              Editar foto
            </span>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold">{session.user.name}</h2>
          <h4 className="text-lg text-slate-500 font-semibold capitalize">
            {session.user.role}
          </h4>
          <div className="w-full bg-slate-300 h-0.5 rounded mb-4" />

          <form className="flex flex-col mt-4">
            <span className="text-sm text-slate-700">Email:</span>
            <input
              readOnly
              value={session.user.email}
              className=" w-80 text-slate-500 border border-slate-300 rounded-md mt-1 p-2 "
              type="email"
              name="email"
            />
            <span className="text-sm text-slate-700 mt-4">Password:</span>
            <input
              readOnly
              value={"********"}
              className=" w-80 text-slate-500 border border-slate-300 rounded-md mt-1 p-2 "
              type="email"
              name="email"
            />
            <button type="button" className="mt-8 btn-primary cursor-pointer">Editar</button>
          </form>
        </div>
      </div>
    </>
  );
}
