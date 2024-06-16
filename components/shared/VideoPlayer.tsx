"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";

interface Props {
  videoSrc: string;
  imgUrl: string;
}

const VideoPlayer = ({ videoSrc, imgUrl }: Props) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="size-max cursor-pointer overflow-hidden rounded-lg  transition-transform duration-300 hover:scale-105"
        >
          <ReactPlayer
            onContextMenu={(e: any) => {
              e.preventDefault();
            }}
            playing={isPlaying}
            width="400px"
            height="300px"
            url={videoSrc}
            controls={true}
            light={isPlaying ? "" : imgUrl}
            playsinline
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
            pip={true}
          />
          <source src={videoSrc} type="video/mp4" />
          <p className="my-4 text-center text-light-400">Title</p>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
