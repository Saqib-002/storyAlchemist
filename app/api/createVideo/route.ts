export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);

  return Response.json({ videoPath: "videos/video.mp4" });
}
