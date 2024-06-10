import CreateVideo from "@/components/page/dashboard/CreateVideo";
import AvatarDropdown from "@/components/shared/AvatarDropdown";
import CustomButton from "@/components/shared/CustomButton";
import Sidebar from "@/components/shared/Navbar/Sidebar";
import { getUserByEmail } from "@/lib/actions/user.action";
import { getServerSession } from "next-auth";
import React from "react";

async function Dashboard() {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
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
            <AvatarDropdown />
          </div>
        </div>
        <CreateVideo userId={user._id.toString()} />
      </div>
    </div>
  );
}

export default Dashboard;
