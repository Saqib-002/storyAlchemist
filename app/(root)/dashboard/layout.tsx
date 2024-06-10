import { Toaster } from "@/components/ui/toaster";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="primary-gradient box-content max-h-screen w-full overflow-hidden ">
      {children}
      <Toaster />
    </main>
  );
}
