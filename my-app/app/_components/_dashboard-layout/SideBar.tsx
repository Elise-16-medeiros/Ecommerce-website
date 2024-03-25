"use client";

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
import { Cards } from "./Cards";

export const SideBar = () => {
  return (
    <>
      <nav className="w-full h-16 bg-slate-400 flex justify-between items-center px-5">
        <div className="uppercase">dashboard</div>
        <div>
          <ul className="md:flex md:justify-center md:items-center md:gap-4 hidden">
            <li>dashboard</li>
            <li>collections</li>
            <li>products</li>
            <li>orders</li>
            <li>customers</li>
          </ul>
        </div>
        <div className="md:hidden flex justify-center items-center pr-16">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <UserButton />
      </nav>
      <Cards />
    </>
  );
};
