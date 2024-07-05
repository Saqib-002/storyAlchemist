import { getUserByEmail } from "@/lib/actions/user.action";
import { getServerSession } from "next-auth";
import React from "react";

async function Dashboard() {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
  return <div className=" h-full bg-dashboard bg-center">dashboard</div>;
}

export default Dashboard;
