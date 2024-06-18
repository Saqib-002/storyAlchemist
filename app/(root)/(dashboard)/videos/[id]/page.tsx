import VideoPlayer from "@/components/shared/VideoPlayer";
import { getVideoById } from "@/lib/actions/video.action";
import { getPresignedUrl } from "@/lib/utils";
import { ParamsProps } from "@/types";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: ParamsProps) => {
  const video = await getVideoById({ videoId: params.id });
  const videoUrl = await getPresignedUrl(video.videos.final);
  const thumbUrl = await getPresignedUrl(video.images[0][0]);
  console.log(video);
  return (
    <div className="flex-center flex-col gap-8 p-8">
      <VideoPlayer videoSrc={videoUrl} imgUrl={thumbUrl} title="" />
      <div className="flex  gap-8">
        <Link
          href={`/videos/edit/${params.id}`}
          className="btn btn-quaternary block overflow-hidden rounded-sm"
        >
          Edit
        </Link>
        <Link
          href={videoUrl}
          className="btn btn-quaternary block overflow-hidden rounded-sm"
        >
          Download
        </Link>
      </div>
    </div>
  );
};

export default Page;
