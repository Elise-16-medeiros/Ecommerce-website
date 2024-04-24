import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { apiAuthPrefix,
  publicRoutes,
  privateRoutes,
  DEFAULT_LOGIN_REDIRECT
 } from "./routes";
import { NextApiRequest } from "next";

const { auth } = NextAuth(authConfig);
 
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPrivateRoute = privateRoutes.includes(nextUrl.pathname);

if (isApiAuthRoute) {
  return null;
}

if (isPrivateRoute) {
  if(isLoggedIn) {
return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }
return null;
}

if (!isLoggedIn && !isPublicRoute) {
  return Response.redirect(new URL('/auth/login', nextUrl))
}
return null;

})


export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  }
