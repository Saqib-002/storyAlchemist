import CreateVideo from "@/components/page/dashboard/CreateVideo";
import { getUserByEmail } from "@/lib/actions/user.action";
import { getServerSession } from "next-auth";
import React from "react";

async function Dashboard() {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
  return (
    <div className=" h-full bg-dashboard">
      <CreateVideo userId={user._id.toString()} />
    </div>
  );
}

export default Dashboard;
