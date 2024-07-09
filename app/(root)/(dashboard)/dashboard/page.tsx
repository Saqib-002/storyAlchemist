import UserChart from "@/components/page/dashboard/UserChart";
import { getConsumedCredits } from "@/lib/actions/creation.action";
import { getUserByEmail } from "@/lib/actions/user.action";
import { getUserVideos } from "@/lib/actions/video.action";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

async function Dashboard() {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
  const videos = await getUserVideos({ userId: user._id });
  const consumedCredits = await getConsumedCredits({ userId: user._id });
  return (
    <div className=" h-full overflow-y-scroll bg-dashboard bg-center p-4">
      <div className="flex gap-4 p-4 ">
        <div className="flex w-max gap-4 rounded-md border border-solid border-light-700 px-6 py-4">
          <div>
            <h3 className="paragraph-semibold">Total Videos</h3>
            <p className="h1-bold">{videos.length}</p>
            <p>videos generated</p>
          </div>
          <div className="size-max rounded-full bg-cyan-900 p-4">
            <Image
              src="/icons/videos.png"
              alt="videos"
              height={32}
              width={32}
            />
          </div>
        </div>
        <div className="flex w-max gap-4 rounded-md border border-solid border-light-700 px-6 py-4">
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
        <div className="flex w-max gap-4 rounded-md border border-solid border-light-700 px-6 py-4">
          <div>
            <h3 className="paragraph-semibold">Credits Consumed</h3>
            <p className="h1-bold">{consumedCredits}</p>
            <p>this month</p>
          </div>
          <div className="size-max rounded-full bg-cyan-900 p-4">
            <Image
              src="/icons/credits_consumed.svg"
              alt="videos"
              height={32}
              width={32}
            />
          </div>
        </div>
      </div>
      <UserChart userId={user._id.toString()} />
    </div>
  );
}

export default Dashboard;
