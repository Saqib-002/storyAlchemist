"use client";
import AvatarDropdown from "@/components/shared/AvatarDropdown";
import CustomButton from "@/components/shared/CustomButton";
import Sidebar from "@/components/shared/Navbar/Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  if (session === null) {
    redirect("/sign-in");
  }
  const getResponse = async () => {
    await fetch("/api/gemini").then((res) => {
      console.log(res);
      console.log(res.text());
    });
  };
  return (
    <div className="grid h-screen grid-cols-2-max text-light-700">
      <Sidebar />
      <div className=" bg-dashboard">
        <div className="flex items-center justify-between p-4">
          <p>Documentrio</p>
          <div className="flex h-max gap-4">
            <CustomButton
              imgUrl="/icons/upgrade.svg"
              style="secondary"
              title="upgrade"
              imgClasses="invert"
            />
            <AvatarDropdown
              imgSrc={session.user?.image}
              username={session.user?.name}
            />
          </div>
        </div>
        <div className="h-full">
          <button onClick={getResponse}>Click</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
