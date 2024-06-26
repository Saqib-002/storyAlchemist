import AvatarDropdown from "@/components/shared/AvatarDropdown";
import CustomButton from "@/components/shared/CustomButton";
import Sidebar from "@/components/shared/Navbar/Sidebar";
import { Toaster } from "@/components/ui/toaster";
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
          <p>Documentrio</p>
          <div className="flex h-max gap-4">
            <CustomButton
              imgUrl="/icons/upgrade.svg"
              style="secondary"
              title="upgrade"
              imgClasses="invert"
            />
            <Link href="/dashboard" className="btn btn-secondary">
              Create new
            </Link>
            <AvatarDropdown />
          </div>
        </div>
        {children}
      </div>
      <Toaster />
    </main>
  );
}
