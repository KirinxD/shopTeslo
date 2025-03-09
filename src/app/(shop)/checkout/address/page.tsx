import { Title } from "@/components";
import Link from "next/link";

export default function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full xl:w-[1000px] flex flex-col justify-center text-left px-4 rounded-xl shadow-xl bg-white">
        <Title title="Datos para la entrega" subtitle="" />

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>Nombres</span>
            <input type="text" className="p-2 border border-slate-300  rounded-md " />
          </div>

          <div className="flex flex-col mb-2">
            <span>Apellidos</span>
            <input type="text" className="p-2 border border-slate-300 rounded-md " />
          </div>

          <div className="flex flex-col mb-2">
            <span>Dirección</span>
            <input type="text" className="p-2 border border-slate-300  rounded-md " />
          </div>

          <div className="flex flex-col mb-2">
            <span>Dirección 2 (opcional)</span>
            <input type="text" className="p-2 border border-slate-300  rounded-md " />
          </div>

          <div className="flex flex-col mb-2">
            <span>Código postal</span>
            <input type="text" className="p-2 border border-slate-300  rounded-md " />
          </div>

          <div className="flex flex-col mb-2">
            <span>Ciudad</span>
            <input type="text" className="p-2 border border-slate-300  rounded-md " />
          </div>

          <div className="flex flex-col mb-2">
            <span>País</span>
            <select className="p-2 border border-slate-300  rounded-md ">
              <option value="">[ Seleccione ]</option>
              <option value="CRI">Costa Rica</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Teléfono</span>
            <input type="text" className="p-2 border border-slate-300  rounded-md " />
          </div>

          <div className="flex flex-col mb-5 sm:mt-5">
            <Link
              href="/checkout"
              className="btn-primary flex w-full sm:w-1/2 justify-center "
            >
              Siguiente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
