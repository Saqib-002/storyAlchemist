import VideoPlayer from "@/components/shared/VideoPlayer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getUserByEmail } from "@/lib/actions/user.action";
import { getUserVideos } from "@/lib/actions/video.action";
import { getPresignedUrl } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

const Page = async () => {
  revalidatePath("/videos");
  const session = await getServerSession();
  const user = await getUserByEmail({ email: session?.user?.email });
  const videos = await getUserVideos({ userId: user._id.toString() });
  // Fetch all video and thumbnail URLs asynchronously
  const videosWithUrls = await Promise.all(
    videos.map(async ({ title, videos, images, _id, createdAt }) => {
      const url = await getPresignedUrl(videos.final);
      const thumbUrl = await getPresignedUrl(images[0][0]);
      return {
        videoSrc: url,
        imgUrl: thumbUrl,
        key: _id.toString(),
        title,
        createdAt: new Date(createdAt),
      };
    })
  );
  return (
    <ScrollArea className="custom-scrollbar">
      <h2 className="h2-semibold pl-8">My Collection</h2>
      <div className="flex h-full flex-wrap gap-8 overflow-y-hidden p-8">
        {videosWithUrls.map(({ videoSrc, imgUrl, key, title, createdAt }) => {
          return (
            <Link key={key} href={`/videos/${key}`}>
              <VideoPlayer
                videoSrc={videoSrc}
                imgUrl={imgUrl}
                title={title}
                createdAt={createdAt}
              />
            </Link>
          );
        })}
      </div>
      {videosWithUrls.length === 0 && (
        <div className="flex-center h-full">
          <p className="text-wrap">
            No videos found. create your own by going to create a new video
            section
          </p>
        </div>
      )}
    </ScrollArea>
  );
};

export default Page;
