import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export async function getPresignedUrl(key: string): Promise<string> {
  const response = await fetch(`http://localhost:3000/api/getPresignedUrl`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path: key,
      referer: "http://localhost:3000",
    }),
  });
  const { url } = await response.json();
  return url;
}
export async function deleteObjectFromS3(key: string): Promise<string> {
  const response = await fetch(`http://localhost:3000/api/deleteObjectFromS3`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key,
      referer: "http://localhost:3000",
    }),
  });
  const res = await response.json();
  return res;
}
