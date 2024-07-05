"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex w-max flex-col bg-dark-600 p-4 max-xs:hidden">
        {sidebarLinks.map(({ route, imgURL, label }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;
          return (
            <Link
              href={route}
              key={route}
              className={`${isActive ? "bg-primary-700" : ""}  my-2 flex min-w-max gap-2 rounded-md px-4 py-2 duration-200 hover:bg-primary-700`}
            >
              <Image
                className="invert"
                src={imgURL}
                alt="label"
                width={20}
                height={20}
              />
              <p className="max-lg:hidden">{label}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};
const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map(({ route, imgURL, label }) => {
        const isActive =
          (pathname.includes(route) && route.length > 1) || pathname === route;
        return (
          <SheetClose asChild key={route}>
            <Link
              href={route}
              className={`${
                isActive ? "rounded-lg bg-primary-700 text-light-900" : ""
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={imgURL}
                alt={label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="xs:hidden">
        <Image
          src="/icons/menu.svg"
          alt="Menu"
          width={36}
          height={36}
          className="sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto border-none">
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
