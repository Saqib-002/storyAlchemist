"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-dark-600 p-4">
      {sidebarLinks.map(({ route, imgURL, label }) => {
        const isActive =
          (pathname.includes(route) && route.length > 1) || pathname === route;
        return (
          <Link
            href={route}
            key={route}
            className={`${isActive ? "bg-primary-700" : ""} my-2 flex gap-2 rounded-md px-4 py-2 duration-200 hover:bg-primary-700`}
          >
            <Image
              className="invert"
              src={imgURL}
              alt="label"
              width={20}
              height={20}
            />
            <p>{label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
