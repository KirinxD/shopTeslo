"use client";
import type { Country } from "@/interfaces";
import { useAddressStore } from "@/store";
import clsx from "clsx";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  postalCode: string;
  city: string;
  country: string;
  telephone: string;
  rememberAddress: boolean;
};
interface Props {
  country: Country[];
}
export const AddressForm = ({ country }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm<FormInputs>();

  const setAddress = useAddressStore((state) => state.setAddress);
  const address = useAddressStore((state) => state.address);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {

    setAddress(data);
  };

  useEffect(() => {
    
    if (address.firstName) {
      console.log("entro")
      reset(address);
    }
  },[address]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2"
    >
      <div className="flex flex-col mb-2">
        <span>Nombres</span>
        <input
          type="text"
          className="p-2 border border-slate-300 rounded-md"
          {...register("firstName", { required: "El nombre es obligatorio" })}
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <span>Apellidos</span>
        <input
          type="text"
          className="p-2 border border-slate-300 rounded-md"
          {...register("lastName", { required: "El apellido es obligatorio" })}
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <span>Dirección</span>
        <input
          type="text"
          className="p-2 border border-slate-300 rounded-md"
          {...register("address", { required: "La dirección es obligatoria" })}
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <span>Dirección 2 (opcional)</span>
        <input
          type="text"
          className="p-2 border border-slate-300 rounded-md"
          {...register("address2")}
        />
      </div>

      <div className="flex flex-col mb-2">
        <span>Código postal</span>
        <input
          type="text"
          className="p-2 border border-slate-300 rounded-md"
          {...register("postalCode", {
            required: "El código postal es obligatorio",
          })}
        />
        {errors.postalCode && (
          <p className="text-red-500 text-sm">{errors.postalCode.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <span>Ciudad</span>
        <input
          type="text"
          className="p-2 border border-slate-300 rounded-md"
          {...register("city", { required: "La ciudad es obligatoria" })}
        />
        {errors.city && (
          <p className="text-red-500 text-sm">{errors.city.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <span>País</span>
        <select
          className="p-2 border border-slate-300 rounded-md"
          {...register("country", { required: "El país es obligatorio" })}
        >
          <option value="">[ Seleccione ]</option>
          {country.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm">{errors.country.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <span>Teléfono</span>
        <input
          type="text"
          className="p-2 border border-slate-300 rounded-md"
          {...register("telephone", { required: "El teléfono es obligatorio" })}
        />
        {errors.telephone && (
          <p className="text-red-500 text-sm">{errors.telephone.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-5 sm:mt-1">
        <div className="inline-flex items-center mb-10">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="checkbox"
          >
            <input
              type="checkbox"
              className="h-5 w-5 cursor-pointer rounded-md border border-blue-gray-200 transition-all checked:border-blue-500 checked:bg-blue-500 hover:opacity-80"
              id="checkbox"
              {...register("rememberAddress")}
            />
          </label>
          <span>¿Recordar datos?</span>
        </div>

        <button
          disabled={!isValid}
          type="submit"
          className={clsx({
            "btn-primary": isValid,
            "btn-disabled": !isValid,
          })}
        >
          Siguiente
        </button>
      </div>
    </form>
  );
};
