// lib/blogs.js
import Blog from '@/models/Blog'
import connect from '@/utils/db'     // use your actual Blog model path

export async function getAllBlogs() {
  await connect()
  const blogs = await Blog.find().lean()
  return blogs.map(blog => ({
    ...blog,
    _id: blog._id.toString(), // convert ObjectId for safe rendering
  }))
}