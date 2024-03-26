"use client";

import Link from "next/link";
import { dashboardLinks } from "@/lib/constants";
import { UserButton } from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <>
      <div className="flex h-16  w-full items-center justify-between border-b border-gray-200 bg-white px-5">
        <h1 className="uppercase">Logo</h1>
        <nav>
          <ul className="hidden gap-4 md:flex md:items-center md:justify-center">
            {dashboardLinks.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  passHref
                  className="rounded-sm px-1 py-1 hover:text-slate-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-24 flex items-end justify-end md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/" passHref>
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/collections" passHref>
                  Collections
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products" passHref>
                  Products
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders" passHref>
                  Orders
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/customers" passHref>
                  Customers
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <UserButton />
      </div>
    </>
  );
};
