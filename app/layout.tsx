import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import React from "react";

const spaceGrostesk = Space_Grotesk({ subsets: ["vietnamese"] });
const montserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Documentrio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrostesk.className} ${montserat.className}`}>
        <main className="primary-gradient box-content min-h-screen w-full ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
