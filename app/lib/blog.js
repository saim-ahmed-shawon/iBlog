// lib/blogs.js
import connectDB from './connectDB' // adjust path if needed
import Blog from '@/models/Blog'     // use your actual Blog model path

export async function getAllBlogs() {
  await connectDB()
  const blogs = await Blog.find().lean()
  return blogs.map(blog => ({
    ...blog,
    _id: blog._id.toString(), // convert ObjectId for safe rendering
  }))
}