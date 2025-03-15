"use server";

import { signIn } from "@/auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return "Success";
  } catch (error) {
    if ((error as any).type === "CredentialsSignin") {
      return "CredentialsSignin";
    }
    return "Error desconocido";
  }
}

export const login = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      
      redirect:false, email, password });

    return "Success";
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "UnknownError",
    };
  }
};



/*"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(formData: FormData) {
  try {
    const credentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    };
    const res = await signIn("credentials", credentials);
  } catch (error) {
    if (error instanceof AuthError) {
      return { msg: "crendenciales invalidas" };
    }
  }
}*/
