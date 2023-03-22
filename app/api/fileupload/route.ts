export async function GET(request: Request) {
    return new Response('Hello, from fileupload')
  }
export async function POST(request: Request) {
     
    console.log(request.body)
    return new Response('Hello, from fileupload post data')
  }


// import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
//   message: string
// }
// import {NextApiRequest, NextApiResponse } from 'next'

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }
