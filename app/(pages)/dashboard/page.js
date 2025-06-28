"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";
import useSWR from "swr";

import Button from "@/components/Button";


const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const username = session.data.user.email;
    await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify({ ...data, username }),
      headers: { "Content-Type": "application/json" },
    });
    toast.success("Blog created successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
      transition: Bounce,
    });
    await mutate();
    reset();
  };

  //delete handling
  const handleDelete =async (id) => {
    try{await fetch(`/api/blogs/${id}`,{method:"DELETE"})
    await mutate()
    toast.success("Blog deleted",{delay:1000})

  }catch (error) {
      console.log(error)
    }
  }

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/blogs?username=${session?.data?.user.email}`,
    fetcher
  );
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session]);

  if (session.status === "authenticated") {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="flex gap-10 flex-col md:flex-row ">
            <div className="createBlogs md:w-1/2">
              <h1 className="text-xl sm:text-3xl font-bold w-full pb-5">
                Create a new blog
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className="mb-6">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    {...register("title", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    type="text"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  />
                  {errors.title && (
                    <p className="text-red-500">{errors.title.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image link
                  </label>
                  <input
                    {...register("image", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    type="text"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  />
                  {errors.image && (
                    <p className="text-red-500">{errors.image.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="content"
                    className={` block mb-2 text-sm font-medium text-gray-900 dark:text-white`}
                  >
                    Your content
                  </label>
                  <textarea
                    {...register("content", {
                      required: {
                        value: true,
                        message: "Please type something to send",
                      },
                    })}
                    type="text"
                    id="content"
                    className="bg-gray-50 min-h-30 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                  />
                  {errors.content && (
                    <p className="text-red-500">{errors.content.message}</p>
                  )}
                </div>
                {isSubmitting && (
                  <button
                    disabled
                    type="button"
                    className="w-full justify-center py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-2 focus:ring-slate-700 focus:text-slate-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                  >
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                    Posting...
                  </button>
                )}
                {!isSubmitting && (
                  <Button type={"submit"} width={`w-full`} text={`Post`} />
                )}
              </form>
            </div>

            <div className="yourBlogs md:w-1/2 flex flex-col gap-5">
              <h1 className="text-xl sm:text-3xl font-bold w-full text-center">
                Your blogs
              </h1>

              {isLoading
                ? ""
                : data.map((blog) => {
                    return (
                      <div
                        key={blog._id}
                        className="blog grid grid-cols-3 gap-5 justify-between bg-slate-800 p-3 rounded"
                      >
                        <div className="image w-full h-30 overflow-hidden rounded">
                          <Image
                            className="w-full h-full object-cover object-center"
                            src={blog.image}
                            width={240}
                            height={240}
                            alt="blog image"
                          />
                        </div>
                        <div className="others flex gap-3 justify-around items-center col-span-2">
                          <h1 className="font-bold w-2/3">{blog.title}</h1>
                          <h1 onClick={()=>handleDelete(blog._id)} className="font-bold text-white bg-red-800 rounded p-1 w-7 h-7 flex justify-center items-center ">
                            X
                          </h1>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </>
    );
  }
  if (session.status === "loading") {
    return (
      <div className="py-8 px-4 mx-auto max-w-screen-xl min-h-screen lg:py-16 lg:px-6 flex justify-center items-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
    );
  }
};

export default Dashboard;
