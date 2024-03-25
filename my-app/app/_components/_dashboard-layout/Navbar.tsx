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
      <div className="w-full h-16 bg-slate-400 flex justify-between items-center px-5">
        <h1 className="uppercase">Logo</h1>
        <nav>
          <ul className="md:flex md:justify-center md:items-center gap-4 hidden">
            {dashboardLinks.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  passHref
                  className="hover:text-slate-300 rounded-sm px-1 py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden flex justify-end items-end ml-24">
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
