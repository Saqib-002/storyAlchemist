import React from "react";
import { getUserByEmail } from "@/lib/actions/user.action";
import { getServerSession } from "next-auth";
import ProfileForm from "@/components/page/profile/ProfileForm";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/shared/CustomButton";

const page = async () => {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
  // console.log(user);
  return (
    <div className="flex justify-center gap-8 p-4">
      <div className="min-w-[400px]">
        <h1 className="h3-semibold my-4">Your Profile</h1>
        <ProfileForm user={JSON.stringify(user)} />
      </div>
      <div className="mt-12 flex size-max flex-col gap-4 rounded-md border border-solid  border-light-700  px-6 py-4">
        <div className="flex gap-4">
          <div>
            <h3 className="paragraph-semibold">Your Credits</h3>
            <p className="h1-bold">{user.credits}</p>
            <p>available</p>
          </div>
          <div className="size-max rounded-full bg-cyan-900 p-4">
            <Image
              src="/icons/credits.png"
              alt="videos"
              height={32}
              width={32}
            />
          </div>
        </div>
        <Link href="/pricing">
          <CustomButton
            otherClasses="max-xs:hidden"
            imgUrl="/icons/upgrade.svg"
            style="secondary"
            title="Buy Credits"
            imgClasses="invert"
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
