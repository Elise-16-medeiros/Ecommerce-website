/* import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prismadb = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prismadb

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prismadb
 */

 import { PrismaClient } from '@prisma/client';

declare global {
    var prisma:PrismaClient | undefined;
}

const prismadb = new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

export default prismadb; 