
import React from 'react'
import Image from 'next/image';

export const metadata = {
  title: "iBlog - Blog",
  description: "This is a demo blogging website's blog page, made with Next js, MongoDB and Tailwind CSS",
};

const BlogId = async ({params}) => {

  const {id} = await params
  const data =  await fetch(`${process.env.SITE_URI}/api/blogs/${id}`, {cache:"no-store"})
  const blog = await data.json()

  return (
    <>

      <div className="something">

            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-5xl">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">{blog.title}</h2>
                <div className="group overflow-hidden my-8 xl:mb-16 xl:mt-12">
                    <Image className="hidden w-full max-h-100 rounded object-cover group-hover:scale-110 group-active:scale-110 duration-300 ease-in-out dark:block" src={blog.image} width={720} height={720} alt="blog image" />
                </div>
                <div className="mx-auto max-w-5xl space-y-6">
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">{blog.content}</p>
                </div>
                </div>
            </div>
            </section>

      </div>
    </>
  )
}

export default BlogId
