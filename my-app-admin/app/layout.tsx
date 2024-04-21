import type { Metadata } from "next";

import { Urbanist } from "next/font/google";


import ToasterProvider from "@/providers/toaster-provider";
import ModalProvider from "@/providers/modal-provider";

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
        <ToasterProvider />
          <ModalProvider />
          {children}
          </body>
      </html>
    
  );
}

/* 
import { ClerkProvider } from '@clerk/nextjs'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
} */
