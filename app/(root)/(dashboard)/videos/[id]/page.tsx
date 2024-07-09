"use client";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { deleteVideoById, getVideoById } from "@/lib/actions/video.action";
import { deleteObjectFromS3, getPresignedUrl } from "@/lib/utils";
import { ParamsProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({ params }: ParamsProps) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbUrl, setThumbUrl] = useState("");
  const router = useRouter();
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
  async function deleteVideo() {
    const videoResponse = await getVideoById({ videoId: params.id });
    const video = JSON.parse(videoResponse);
    console.log(video);
    await deleteObjectFromS3(video.videos.final);
    const res = await deleteVideoById({ videoId: params.id });
    console.log(res);
    router.push("/videos");
  }
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
        <button
          type="button"
          className="border border-solid border-red-500 px-2 transition-colors duration-300 hover:border-red-900"
          onClick={deleteVideo}
        >
          <Image src="/icons/bin.svg" alt="del" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default Page;
