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
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  username: string | undefined | null;
  imgSrc: string | undefined | null;
}

const AvatarDropdown = ({ username, imgSrc }: Props) => {
  return (
    <div className="flex items-center">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={imgSrc!} />
            <AvatarFallback className="border-2 border-solid border-primary-300 bg-primary-800">
              {username ? username[0].toUpperCase() : "A"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 border-primary-300  bg-primary-900 text-light-700">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-primary-300" />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
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
      <span className="ml-3">{username}</span>
    </div>
  );
};

export default AvatarDropdown;
