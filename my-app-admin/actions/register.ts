'use server'

import * as z from 'zod'
import bcrypt from 'bcrypt'

import prismadb from '@/lib/prismadb';
import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/data/tokens';




export const register = async (values: z.infer<typeof RegisterSchema>) => {
   const validatedFields = RegisterSchema.safeParse(values);
   if (!validatedFields.success) { 
    return { error: 'Invalid fields' };
   }

   const { email, password, name } = validatedFields.data;
   const hashedPassword = await bcrypt.hash(password, 10);

const existingUser = await getUserByEmail(email);

if (existingUser) {
   return { error: 'User already exists' };
}

await prismadb.user.create({
   data: {
      name,
      email,
      password: hashedPassword,
   },
});

const verificationToken = await generateVerificationToken(email)

   return { success: 'Confirmation email sent' };
};