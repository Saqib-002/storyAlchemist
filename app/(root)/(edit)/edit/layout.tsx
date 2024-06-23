import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="primary-gradient box-content flex  h-screen  max-h-screen w-full  overflow-hidden text-light-700">
      {children}
    </main>
  );
}
