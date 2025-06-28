import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const data = await request.json();
    
    // check user exists or not
    await connect()

    try {
// check if user exists or not
        const exists = await User.findOne({$or: [{email:data.email}, {username:data.username}]})

    if(exists){
        if(exists.email === data.email){
            return  NextResponse.json({error:"This email is already registered"}, {status:400})
        }
        if(exists.username === data.username){
            return  NextResponse.json({error:"This username is already taken"}, {status:400})
        }
    }

//crate new user
    const newUser = await new User(data)
    await newUser.save()
    return new NextResponse("User created", {status:201})
        
    } catch (error) {
        return new NextResponse(error, {status:500})
    }
    
}