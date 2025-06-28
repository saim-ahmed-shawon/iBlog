import Blog from "@/models/Blog"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request) => {
  const url = new URL(request.url) 
  const username = url.searchParams.get("username")

  try {
    await connect()
    const blogs = await Blog.find(username && {username})

    return new NextResponse(JSON.stringify(blogs), {status:200})
    
} catch (error) {
      return new NextResponse("Database error", {status:500})
    
  }
}

export const POST = async (request) => {
    const data = await request.json()
    const newBlog = await new Blog(data)

    try {
        await connect()
        await newBlog.save()

        return new NextResponse("Blog created", {status:201})
        
    } catch (error) {
        return new NextResponse(error, {status:500})
        
    }
}