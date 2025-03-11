"use client";

import { authenticate } from "@/actions";
import { ZodErrors } from "@/components";
import { signInSchema } from "@/lib/zod";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpia errores al escribir
  };

  const clientAction = async (formData: FormData) => {
    setErrors({ email: "", password: "" }); // Reiniciar errores

    try {
      const dataForValid = {
        email: formData.get("email")?.toString() || "",
        password: formData.get("password")?.toString() || "",
      };

      const resultSchema = signInSchema.parse(dataForValid);
      await authenticate(formData); 
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { email?: string; password?: string } = {};
        error.issues.forEach((issue) => {
          if (issue.path.includes("email")) {
            newErrors.email = issue.message;
          } else if (issue.path.includes("password")) {
            newErrors.password = issue.message;
          }
        });
        setErrors((prev) => ({ ...prev, ...newErrors }));
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        clientAction(new FormData(e.currentTarget));
      }}
      className="flex flex-col"
    >
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border border-slate-400 bg-gray-200 rounded mb-1"
        type="email"
        name="email"
        value={formData.email} 
        onChange={handleChange}
      />
      {errors.email && <ZodErrors message={errors.email} />}

      <label htmlFor="password">Contraseña</label>
      <input
        className="px-5 py-2 border border-slate-400 bg-gray-200 rounded mb-1"
        type="password"
        name="password"
        value={formData.password} 
        onChange={handleChange}
      />
      {errors.password && <ZodErrors message={errors.password} />}

      <button type="submit" className="btn-primary">
        Ingresar
      </button>

      {/* divisor line */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Usuario nuevo
      </Link>
    </form>
  );
};