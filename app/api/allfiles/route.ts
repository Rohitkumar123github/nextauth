import connectDB from "@/app/utils/database/database"

export async function GET(request: Request) {
    // await connectDB()
    return new Response('Hello, allfiles!')
  }