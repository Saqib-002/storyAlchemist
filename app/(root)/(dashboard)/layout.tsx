import AvatarDropdown from "@/components/shared/AvatarDropdown";
import CustomButton from "@/components/shared/CustomButton";
import Sidebar, { MobileNav } from "@/components/shared/Navbar/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="primary-gradient box-content flex  h-screen  max-h-screen w-full  overflow-hidden text-light-700">
      <Sidebar />
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between p-4">
          <Image
            src="/images/logo-main.png"
            width="88"
            height="40"
            alt="logo"
          />
          <div className="flex h-max gap-4">
            <Link href="/pricing">
              <CustomButton
                otherClasses="max-xs:hidden"
                imgUrl="/icons/upgrade.svg"
                style="secondary"
                title="Buy Credits"
                imgClasses="invert"
              />
            </Link>
            <AvatarDropdown />
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
      <Toaster />
    </main>
  );
}
