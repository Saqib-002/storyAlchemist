"use server";
import CreateVideo from "@/components/page/dashboard/CreateVideo";
import { getUserByEmail } from "@/lib/actions/user.action";
import { getServerSession } from "next-auth";
import React from "react";

async function CreateNew() {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
  return (
    <div className=" size-full bg-dashboard bg-center">
      <CreateVideo userId={user._id.toString()} />
    </div>
  );
}

export default CreateNew;
