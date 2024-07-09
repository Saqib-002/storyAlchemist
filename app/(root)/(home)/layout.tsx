import { Navbar } from "@/components/shared/Navbar/Navbar";
import React from "react";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="primary-gradient box-content min-h-screen w-full ">
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </main>
  );
}
