import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
const region = process.env.AWS_REGION_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID as string;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY as string;

export async function POST(req: Request) {
  const data = await req.json();
  const s3 = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  try {
    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: data.key,
    });
    //   const url = await getSignedUrl(s3, command, { expiresIn });
    const response = await s3.send(command);
    console.log(response);
    return Response.json({ response });
    // return Response.json({ url: "s" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error generating signed URL" });
  }
}
