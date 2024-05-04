"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session === null) {
    redirect("/login");
  }
  return (
    <div className="text-light-700">
      This is the Dashboard{" "}
      <button
        onClick={() =>
          signOut({ callbackUrl: "http://localhost:3000/sign-in" })
        }
        className="mt-24 cursor-pointer bg-black"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
