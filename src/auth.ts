import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const config = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = {};
          const { email, password } = credentials;

          if (!email || !password) {
            console.log("Error");
          }
          console.log({ email, password });

          return user;
        } catch (error) {
          if (error instanceof z.ZodError) {
            console.error("Validation failed: ", error.issues[0]);
            return { error: "Credenciales inválidas o datos incorrectos." };
          } else {
            return { error: "Ocurrio un problema al intentar logearse." };
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    register: "/auth/new-account",
  },
};

export const { signIn, signOut, auth } = NextAuth(config);
