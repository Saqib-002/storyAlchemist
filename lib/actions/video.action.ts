"use server";
import Video from "@/database/video.model";
import { connectToDatabase } from "../mongoose";

export async function createVideo(videoData: any) {
  try {
    connectToDatabase();
    const newVideo = await Video.create(videoData);
    return JSON.stringify(newVideo);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getUserVideos(params: any) {
  try {
    await connectToDatabase();
    const { userId } = params;
    const videos = await Video.find({ user: userId });
    return videos;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getVideoById(params: any) {
  try {
    await connectToDatabase();
    const { videoId } = params;
    const videos = await Video.findById(videoId);
    return videos;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
