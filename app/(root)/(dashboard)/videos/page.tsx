import VideoPlayer from "@/components/shared/VideoPlayer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getUserByEmail } from "@/lib/actions/user.action";
import { getUserVideos } from "@/lib/actions/video.action";
import { getServerSession } from "next-auth";
import React from "react";

const Page = async () => {
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
  const videos = await getUserVideos({ userId: user._id.toString() });
  // Fetch all video and thumbnail URLs asynchronously
  const videosWithUrls = await Promise.all(
    videos.map(async ({ videos, images }) => {
      const videoUrlResponse = await fetch(
        `http://localhost:3000/api/getPresignedUrl`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: videos.final,
            referer: "http://localhost:3000",
          }),
        }
      );
      const { url } = await videoUrlResponse.json();

      const thumbUrlResponse = await fetch(
        `http://localhost:3000/api/getPresignedUrl`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            path: images[0][0],
          }),
        }
      );
      const thumbUrl = await thumbUrlResponse.json();
      return {
        videoSrc: url,
        imgUrl: thumbUrl.url,
        key: videos.final,
      };
    })
  );
  return (
    <ScrollArea className="custom-scrollbar">
      <div className="flex h-full flex-wrap justify-between gap-8 overflow-y-hidden p-8">
        {videosWithUrls.map(({ videoSrc, imgUrl, key }) => {
          return <VideoPlayer key={key} videoSrc={videoSrc} imgUrl={imgUrl} />;
        })}
      </div>
    </ScrollArea>
  );
};

export default Page;
