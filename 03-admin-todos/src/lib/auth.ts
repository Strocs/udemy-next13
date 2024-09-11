import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "./prisma";
import Credentials from "next-auth/providers/credentials";
import { signInCredentials } from "@/auth/actions/auth-actions";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@email.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize({ email, password }) {
        return await signInCredentials(email as string, password as string);
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // like middlewares in each step of login
    async signIn() {
      // maybe it make more sense get user from db on signIn, detect if user is active, and then assign to user the new values?
      return true;
    },

    async jwt({ token }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email! },
      });

      if (dbUser?.isActive === false) {
        throw new Error("User is not active");
      }

      token.roles = dbUser?.roles;
      token.id = dbUser?.id;

      return token;
    },

    async session({ session, token }) {
      if (session && session.user) {
        session.user.roles = token.roles;
        session.user.id = token.id!;
      }
      return session;
    },
  },
});
