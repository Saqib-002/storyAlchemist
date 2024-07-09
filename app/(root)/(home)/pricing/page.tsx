import SubscribeComponent from "@/components/page/home/SubscribeComponent";
import { getUserByEmail } from "@/lib/actions/user.action";
import { getServerSession } from "next-auth/next";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
  console.log(user);
  return (
    <div className="pt-20 text-white">
      <SubscribeComponent
        priceId="price_1Pa56zSDEORYZxmyUmdvTjOB"
        price="5"
        description="sdfs"
        userId={user._id.toString()}
      />
    </div>
  );
};

export default page;
