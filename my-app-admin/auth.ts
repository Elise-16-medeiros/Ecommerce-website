import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prismadb from "./lib/prismadb"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"

export const { handlers: { GET, POST }, 
auth,
signIn,
signOut,
 } = NextAuth({
   adapter: PrismaAdapter(prismadb),
   session: { strategy: "jwt" },
   ...authConfig,
 })