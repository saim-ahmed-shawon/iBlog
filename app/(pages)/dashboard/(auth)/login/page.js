"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { ToastContainer, toast, Bounce } from 'react-toastify';

import Button from '@/components/Button'
import { useRouter, useSearchParams } from 'next/navigation'


const Login = () => {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit = async(data) => {
    await signIn('credentials', data)

  }

    const session = useSession()
  if (session.status==="authenticated") {
    router.push("/dashboard")
  }
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
theme="light"
transition={Bounce}
/>


    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>

<div className='flex flex-col gap-2 justify-center items-center'>
<form onSubmit={handleSubmit(onSubmit)} className=" w-full max-w-sm mx-auto">
    <h1 className='py-4 text-xl sm:text-3xl font-bold w-full text-center'>Login</h1>

  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input {...register("email", { required: {value:true, message:"This field is required"} })} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
       {errors.email &&  <p className="text-red-500">{errors.email.message}</p>}
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
   <input {...register("password", { required: {value:true, message:"This field is required"} })} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
       {errors.password &&  <p className="text-red-500">{errors.password.message}</p>}
  </div>
    <Button type={"submit"} text={"Login"} width={"w-full"}/>
</form>
    <Button type={"button"} text={"Continue with Github"} width={"w-fit"}/>

<Link href={"/dashboard/register"}>
<p className="underline hover:text-slate-500 active:text-slate-500">Create a new account</p>
</Link>

</div>

    </div>
    </>
  )
}

export default Login
