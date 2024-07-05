import AvatarDropdown from "@/components/shared/AvatarDropdown";
import CustomButton from "@/components/shared/CustomButton";
import Sidebar, { MobileNav } from "@/components/shared/Navbar/Sidebar";
import { Toaster } from "@/components/ui/toaster";
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
              otherClasses="max-xs:hidden"
              imgUrl="/icons/upgrade.svg"
              style="secondary"
              title="upgrade"
              imgClasses="invert"
            />
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
