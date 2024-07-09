import AvatarDropdown from "@/components/shared/AvatarDropdown";
import CustomButton from "@/components/shared/CustomButton";
import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar/Navbar";
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
    <main className="primary-gradient box-content min-h-screen w-full ">
    <Navbar />
    {children}
    <Footer />
  </main>
  );
}