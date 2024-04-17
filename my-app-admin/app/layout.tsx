import type { Metadata } from "next";

import { Urbanist } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
    </ClerkProvider>
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