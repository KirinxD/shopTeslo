import { AccountForm } from "@/components";
import { titleFont } from "@/config/fonts";

export default function NewAccountPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <div className="items-center justify-center">
        <h1 className={`${titleFont.className} text-4xl mb-2`}>Crear cuenta</h1>
        <div className="w-full bg-slate-300 h-0.5 rounded mb-4" />
        <AccountForm />
      </div>
    </div>
  );
}
