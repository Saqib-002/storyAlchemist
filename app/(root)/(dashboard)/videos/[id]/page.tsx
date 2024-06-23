"use client";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { getVideoById } from "@/lib/actions/video.action";
import { getPresignedUrl } from "@/lib/utils";
import { ParamsProps } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }: ParamsProps) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbUrl, setThumbUrl] = useState("");
  useEffect(() => {
    const getData = async () => {
      const videoResponse = await getVideoById({ videoId: params.id });
      const video = JSON.parse(videoResponse);
      const videoSrc = await getPresignedUrl(video.videos.final);
      const thumbSrc = await getPresignedUrl(video.images[0][0]);
      setVideoUrl(videoSrc);
      setThumbUrl(thumbSrc);
    };
    getData();
  }, []);
  return (
    <div className="flex-center flex-col gap-8 p-8">
      <VideoPlayer videoSrc={videoUrl} imgUrl={thumbUrl} title="" />
      <div className="flex  gap-8">
        <Link
          href={`/edit/${params.id}`}
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
