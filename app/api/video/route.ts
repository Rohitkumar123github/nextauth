// import { NextApiRequest, NextApiResponse } from "next";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   return res
//     .status(200)
//     .json({ message: "Hello from get request videos, Next.js!" });
// }
//not working
// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const method = req.method;

//   if (method === "GET") {
//     return res
//       .status(200)
//       .json({ message: "Hello from get request videos, Next.js!" });
//   }
// }
// export async function POST(request: Request) {
//   return new Response("Hello from post request videos, Next.js!");
// }

export async function GET(request: Request) {
  //   const formData = await request.formData();
  //   const file = formData.get("file");

  // Do something with the file, like save it to a database or upload it to a server

  const responseData = { message: "File uploaded successfully!" };
  const responseInit = { headers: { "Content-Type": "application/json" } };
  const jsonResponse = new Response(JSON.stringify(responseData), responseInit);
  return jsonResponse;
}

import type { NextApiRequest, NextApiResponse } from "next";
import busboy from "busboy";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

function uploadVideoStream(req: NextApiRequest, res: NextApiResponse) {
  const bb = busboy({ headers: req.headers });
  console.log("bb", bb);

  bb.on("file", (_, file, info) => {
    // auth-api.mp4
    const fileName = info.filename;
    const filePath = `./videos/${fileName}`;

    const stream = fs.createWriteStream(filePath);

    file.pipe(stream);
  });

  bb.on("close", () => {
    res.writeHead(200, { Connection: "close" });
    res.end(`That's the end`);
  });

  req.pipe(bb);
  return;
}

const CHUNK_SIZE_IN_BYTES = 1000000; // 1 mb

// function getVideoStream(req: NextApiRequest, res: NextApiResponse) {
//   const range = req.headers.range;

//   if (!range) {
//     return res.status(400).send("Rang must be provided");
//   }

//   const videoId = req.query.videoId;

//   const videoPath = `./videos/${videoId}.mp4`;

//   const videoSizeInBytes = fs.statSync(videoPath).size;

//   const chunkStart = Number(range.replace(/\D/g, ""));

//   const chunkEnd = Math.min(
//     chunkStart + CHUNK_SIZE_IN_BYTES,
//     videoSizeInBytes - 1
//   );

//   const contentLength = chunkEnd - chunkStart + 1;

//   const headers = {
//     "Content-Range": `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
//     "Accept-Ranges": "bytes",
//     "Content-Length": contentLength,
//     "Content-Type": "video/mp4",
//   };

//   res.writeHead(206, headers);
//   const videoStream = fs.createReadStream(videoPath, {
//     start: chunkStart,
//     end: chunkEnd,
//   });

//   videoStream.pipe(res);
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  //   if (method === "GET") {
  //     return getVideoStream(req, res);
  //   }

  if (method === "POST") {
    return uploadVideoStream(req, res);
  }

  return res.status(405).json({ error: `Method ${method} is not allowed` });
}
