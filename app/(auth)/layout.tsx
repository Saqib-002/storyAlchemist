import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="primary-gradient z-10 min-h-screen w-full ">
      {children}
    </main>
  );
}
