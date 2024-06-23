"use client";
// import { Editor } from "@/components/Editor/Editor";
import { getVideoById } from "@/lib/actions/video.action";
import { getPresignedUrl } from "@/lib/utils";
import { ParamsProps } from "@/types";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const DynmicEditor = dynamic(
  () => import("@/components/Editor/Editor").then((a) => a.EditorWithStore),
  {
    ssr: false,
  }
);

const Page = ({ params }: ParamsProps) => {
  const [videoUrl, setVideoUrl] = useState("");
  useEffect(() => {
    const getVideo = async () => {
      const videoResponse = await getVideoById({ videoId: params.id });
      const video = JSON.parse(videoResponse);
      const url = await getPresignedUrl(video.videos.final);
      setVideoUrl(url);
    };
    getVideo();
  }, []);
  return (
    <div className="size-full">
      <DynmicEditor />
    </div>
  );
};

export default Page;
