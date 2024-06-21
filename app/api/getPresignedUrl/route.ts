// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import AWS from "aws-sdk";
// import { NextApiRequest } from "next";

// const region = process.env.AWS_REGION_NAME;
// const accessKeyId = process.env.AWS_ACCESS_KEY_ID as string;
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY as string;

const cloudfrontKeyPairId = process.env.CLOUDFRONT_KEY_PAIR_ID;
const cloudfrontPrivateKey = process.env.CLOUDFRONT_PRIVATE_KEY;
if (!cloudfrontKeyPairId || !cloudfrontPrivateKey) {
  throw new Error("CLOUDFRONT_KEY_PAIR_ID environment variable is not set");
}
const cloudfront = new AWS.CloudFront.Signer(
  cloudfrontKeyPairId,
  cloudfrontPrivateKey
);
function generateSignedUrl(key: string) {
  const url = `https://${process.env.CLOUDFRONT_DOMAIN}/${key}`;
  const expires = Math.floor((Date.now() + 3600 * 1000) / 1000); // 3600 seconds expiry

  return cloudfront.getSignedUrl({
    url,
    expires,
  });
}

export async function POST(req: Request) {
  const data = await req.json();
  // const referer = req.headers.get("referer");
  // if (!referer || !referer.startsWith("http://localhost:3000")) {
  //   return Response.json(
  //     { error: "Unauthorized" },
  //     {
  //       status: 403,
  //     }
  //   );
  // }
  // const s3 = new S3Client({
  //   region,
  //   credentials: {
  //     accessKeyId,
  //     secretAccessKey,
  //   },
  // });
  // const expiresIn = 3600;
  try {
    //   const command = new GetObjectCommand({
    //     Bucket: process.env.AWS_S3_BUCKET_NAME,
    //     Key: data.path,
    //   });
    //   const url = await getSignedUrl(s3, command, { expiresIn });

    const url = generateSignedUrl(data.path);
    return Response.json({ url });
    // return Response.json({ url: "s" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error generating signed URL" });
  }
}
