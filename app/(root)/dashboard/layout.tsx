import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="primary-gradient box-content min-h-screen w-full ">
      {children}
    </main>
  );
}
