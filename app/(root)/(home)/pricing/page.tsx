import { getUserByEmail } from "@/lib/actions/user.action";
import { getServerSession } from "next-auth/next";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });

  return <div className="pt-20 text-white"></div>;
};

export default page;
