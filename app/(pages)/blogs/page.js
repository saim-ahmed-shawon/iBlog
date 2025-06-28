import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "iBlog - Blogs",
  description: "This is a demo blogging website's blog page, made with Next js, MongoDB and Tailwind CSS",
};

const Blogs = async () => {
 
  const d = await fetch(`https://i-blog-five.vercel.app/api/blogs`,{cache:"no-store"})
  const posts = await d.json()

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
<div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-2">
{posts.map(blog=>{return <Link href={`/blogs/${blog._id}`} key={blog._id}>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
               
                  <Image className="md:w-1/3 w-full h-50 object-cover rounded-lg sm:rounded-none sm:rounded-l-lg" src={blog.image} width={720} height={720} alt={"Blog Image"}/>
              
              <div className="w-full md:w-2/3 p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blog.title.length>50 ? blog.title.slice(0,50)+"..." : blog.title}
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{blog.content.length> 100 ? blog.content.slice(0,100)+"..." : blog.content}</p>
              </div>
          </div> 

      </Link>})}
      </div> 
       
  </div>
</section>
    </>
  )
}

export default Blogs
