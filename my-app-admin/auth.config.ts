import bcryptjs from 'bcryptjs'
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user"

import Google from 'next-auth/providers/google'
import Facebook from "next-auth/providers/facebook"
 
export default { providers: [ 
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Facebook({
        clientId: process.env.AUTH_FACEBOOK_ID as string,
        clientSecret: process.env.AUTH_FACEBOOK_SECRET as string,
    }),
    Credentials ({
       async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)
        if (validatedFields.success) {
            const { email,password } = validatedFields.data;

            const user = await getUserByEmail(email);
            if( !user || !user.password) return null;
            const passwordsMatch = await bcryptjs.compare(password, user.password);
           
            if(passwordsMatch) return user;
        }
return null;

       }
    })

] } satisfies NextAuthConfig