import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Hello, from fileupload");
}
export async function POST(request: Request) {
  console.log(request.body);
  return new Response("Hello, from fileupload post data");
}

// // import type { NextApiRequest, NextApiResponse } from 'next'

// // type ResponseData = {
// //   message: string
// // }
// // import {NextApiRequest, NextApiResponse } from 'next'

// // export default function handler(
// //   req: NextApiRequest,
// //   res: NextApiResponse
// // ) {
// //   res.status(200).json({ message: 'Hello from Next.js!' })
// // }

// // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction\
// //with typescript but need some debugging
// // import type { NextApiRequest, NextApiResponse } from "next";
// // import busboy from "busboy";
// // import fs from "fs";

// // export const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };

// // function uploadVideoStream(req: NextApiRequest, res: NextApiResponse) {
// //   const bb = busboy({ headers: req.headers });

// //   bb.on("file", (_, file, info) => {
// //     // auth-api.mp4
// //     const fileName = info.filename;
// //     const filePath = `./videos/${fileName}`;

// //     const stream = fs.createWriteStream(filePath);

// //     file.pipe(stream);
// //   });

// //   bb.on("close", () => {
// //     res.writeHead(200, { Connection: "close" });
// //     res.end(`That's the end`);
// //   });

// //   req.pipe(bb);
// //   return;
// // }

// // const CHUNK_SIZE_IN_BYTES = 1000000; // 1 mb

// // function getVideoStream(req: NextApiRequest, res: NextApiResponse) {
// //   const range = req.headers.range;

// //   if (!range) {
// //     return res.status(400).send("Rang must be provided");
// //   }

// //   const videoId = req.query.videoId;

// //   const videoPath = `./videos/${videoId}.mp4`;

// //   const videoSizeInBytes = fs.statSync(videoPath).size;

// //   const chunkStart = Number(range.replace(/\D/g, ""));

// //   const chunkEnd = Math.min(
// //     chunkStart + CHUNK_SIZE_IN_BYTES,
// //     videoSizeInBytes - 1
// //   );

// //   const contentLength = chunkEnd - chunkStart + 1;

// //   const headers = {
// //     "Content-Range": `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
// //     "Accept-Ranges": "bytes",
// //     "Content-Length": contentLength,
// //     "Content-Type": "video/mp4",
// //   };

// //   res.writeHead(206, headers);
// //   const videoStream = fs.createReadStream(videoPath, {
// //     start: chunkStart,
// //     end: chunkEnd,
// //   });

// //   videoStream.pipe(res);
// // }

// // export default function handler(req: NextApiRequest, res: NextApiResponse) {
// //   const method = req.method;

// //   if (method === "GET") {
// //     return getVideoStream(req, res);
// //   }

// //   if (method === "POST") {
// //     return uploadVideoStream(req, res);
// //   }

// //   return res.status(405).json({ error: `Method ${method} is not allowed` });
// // }

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// // import type { NextApiRequest, NextApiResponse } from "next";

// //without typescript also included video streaming option but have to work on it
// import busboy from "busboy";
// import fs from "fs";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export async function uploadVideoStream(request: Request) {
//   const bb = busboy({ headers: request.headers });
//   // console.log("header", req.headers)

//   bb.on("file", (_, file, info) => {
//     // auth-api.mp4
//     const fileName = info.filename;
//     const filePath = `./videos/${fileName}`;

//     const stream = fs.createWriteStream(filePath);

//     file.pipe(stream);
//   });

//   bb.on("close", () => {
//     res.writeHead(200, { Connection: "close" });
//     res.end(`That's the end`);
//   });

//   req.pipe(bb);
//   return;
// }

// const CHUNK_SIZE_IN_BYTES = 1000000; // 1 mb

// function getVideoStream(req, res) {
//   const range = req.headers.range;

//   if (!range) {
//     return res.status(400).send("Range must be provided");
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

// export default function handler(req, res) {
//   const method = req.method;

//   if (method === "GET") {
//     return getVideoStream(req, res);
//   }

//   if (method === "POST") {
//     return uploadVideoStream(req, res);
//   }

//   return res.status(405).json({ error: `Method ${method} is not allowed` });
// }
