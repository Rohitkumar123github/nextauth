import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;

  if (method === "GET") {
    return res
      .status(200)
      .json({ message: "Hello from get request videos, Next.js!" });
  }
}
