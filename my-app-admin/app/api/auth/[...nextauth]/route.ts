import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import { Adapter } from "next-auth/adapters";
import prismadb from "@/lib/prismadb";

const handler = NextAuth({

  adapter: PrismaAdapter(prismadb) as Adapter,
    providers: [
        GoogleProvider({
          clientId: '',
          clientSecret:'',
        })
      ]
  
})

export { handler as GET, handler as POST }