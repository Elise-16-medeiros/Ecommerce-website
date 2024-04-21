import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import AuthProvider from "./_provider-auth/auth";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Page Store",
  description: "Admin Page Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
      <html lang="en">
        <body className={font.className}>
          <AuthProvider>
          {children}
          </AuthProvider>
          </body>
      </html>
    
  );
}
