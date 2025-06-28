import Blog from "@/models/Blog"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {
    const {id} = await params

    try {
        await connect()
        const blog = await Blog.findById(id)

        return new NextResponse(JSON.stringify(blog), {status:200})
    } catch (error) {
        return new NextResponse("Blog not found", {status:500})
        
    }
}
export const DELETE = async (req, {params}) => {
    const {id} = await params

    try {
        await connect()
        await Blog.findByIdAndDelete(id)

        return new NextResponse("Blog deleted", {status:200})
    } catch (error) {
        return new NextResponse("Blog was not deleted", {status:500})
        
    }
}