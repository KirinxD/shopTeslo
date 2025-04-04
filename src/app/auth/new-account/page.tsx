import { AccountForm } from "@/components";
import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default function NewAccountPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>
        Crear nueva cuenta
      </h1>
      <AccountForm />
    </div>
  );
}
