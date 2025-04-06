"use client";
import { login, registerUser } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { LoadingButton } from "..";

const formSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z
    .string()
    .min(1, "El correo es obligatorio")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Formato de correo inválido"
    ),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const AccountForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorDb, setErrorDb] = useState("");
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorDb("");
    const validationResult = formSchema.safeParse(formData);

    if (!validationResult.success) {
      // Mapear los errores
      const newErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setLoading(false);
      setErrors(newErrors);
      return;
    }

    const resp = await registerUser(
      formData.name,
      formData.email,
      formData.password
    );
    if (!resp.ok) {
      setLoading(false);
      setErrorDb(resp.message ?? "");
      return;
    }
    const resp2 = await login(formData.email, formData.password);
    if (resp2) {
      window.location.replace("/");
    }
    // Si no hay errores, enviar datos
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* Nombre */}
      <label htmlFor="name">Nombre completo</label>
      <input
        id="name"
        name="name"
        className={clsx("px-5 py-2 border border-slate-300 rounded-md mb-2", {
          "border-red-500": !!errors.name,
        })}
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name}</span>
      )}

      {/* Email */}
      <label htmlFor="email">Correo electrónico</label>
      <input
        id="email"
        name="email"
        className={clsx("px-5 py-2 border border-slate-300 rounded-md mb-2", {
          "border-red-500": !!errors.email,
        })}
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email}</span>
      )}

      {/* Contraseña */}
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        className={clsx("px-5 py-2 border border-slate-300 rounded-md mb-2", {
          "border-red-500": !!errors.password,
        })}
        type="password"
        value={formData.password}
        onChange={handleChange}
        autoComplete="new-password"
      />
      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password}</span>
      )}
      {errorDb}
      {/* Botón de envío */}

      {!loading ? (
        <button type="submit" className="btn-primary">
          Crear cuenta
        </button>
      ) : (
        <LoadingButton />
      )}

      {/* Divisor */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      {/* Enlace a login */}
      <Link href="/auth/login" className="btn-secondary text-center">
        Login
      </Link>
    </form>
  );
};
