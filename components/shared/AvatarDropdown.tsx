"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const AvatarDropdown = () => {
  const { data: session } = useSession();
  if (session === null) return null;
  const user = session.user;
  return (
    <div className="flex items-center">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user?.image!} />
            <AvatarFallback className="border-2 border-solid border-primary-300 bg-primary-800">
              {user?.name ? user?.name[0].toUpperCase() : "A"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 border-primary-300  bg-primary-900 text-light-700">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-primary-300" />
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/createNew">Create a video</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-primary-300" />
          <DropdownMenuItem className="p-0">
            <button
              type="button"
              className="group size-full px-2 py-1 text-start"
              onClick={() =>
                signOut({ callbackUrl: "http://localhost:3000/sign-in" })
              }
            >
              <Image
                src="/icons/logout.svg"
                width={12}
                height={12}
                alt="Sign Out"
                className="mr-1 inline invert duration-200 group-hover:filter-none"
              />
              Sign Out
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <span className="ml-3 max-sm:hidden">{user?.name}</span>
    </div>
  );
};

export default AvatarDropdown;
