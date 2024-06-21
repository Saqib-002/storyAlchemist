"use client";
import { getVideoById } from "@/lib/actions/video.action";
import { getPresignedUrl } from "@/lib/utils";
import { ParamsProps } from "@/types";
import React, { useEffect, useState } from "react";

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
  return <div></div>;
};

export default Page;
