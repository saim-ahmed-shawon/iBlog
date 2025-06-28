import Message from "@/models/Message"
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    const data = await request.json()
    const newMsg = await new Message(data)

    try {
        await connect()
        await newMsg.save()

        return new NextResponse("message sent!", {status:201})
    } catch (error) {
        return new NextResponse("message not sent!", {status:500})
        
    }
}