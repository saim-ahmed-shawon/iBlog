"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { ToastContainer, toast, Bounce } from 'react-toastify';

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

const Register = () => {

const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const router = useRouter()

  const onSubmit = async(data) => {
    const res = await fetch("/api/auth/register", {method:"POST", body:JSON.stringify(data), headers:{"Content-Type": 'application/json'}})
    let result = {}

    try {
      const jsonRes = await res.json()
      result = jsonRes? jsonRes:{}
    } catch (error) {
      console.error(error)
    }

    if(!res.ok){
      if(result.error.includes("username")){
        console.log(result.error)
        setError("username", {type:"manual", message:result.error})
      }else if(result.error.includes("email")){
        console.log(result.error)
        setError("email", {type:"manual", message:result.error})
      }
    }else {
    toast.success("🎉 Account created successfully!", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
      transition: Bounce,
    });

    setTimeout(() => {
      router.push("/dashboard/login");
    }, 3000);
  }
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
theme="dark"
transition={Bounce}
/>

    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>

<div className='flex flex-col gap-2 justify-center items-center'>
<form onSubmit={handleSubmit(onSubmit)} className=" w-full max-w-sm mx-auto">
    <h1 className='py-4 text-xl sm:text-3xl font-bold w-full text-center'>Create a new account</h1>

  <div className="mb-5">
    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <input {...register("username", { required: {value:true, message:"This field is required"}, minLength:{value:3, message:"Username must be atleast 3 charecters long"} })} type="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user123" required />
       {errors.username &&  <p className="text-red-500">{errors.username.message}</p>}
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input {...register("email", { required: {value:true, message:"This field is required"} })} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
       {errors.email &&  <p className="text-red-500">{errors.email.message}</p>}
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input {...register("password", { required: {value:true, message:"This field is required"}, minLength:{value:8, message:"Password must be atleast 8 charecters long"} })} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
       {errors.password &&  <p className="text-red-500">{errors.password.message}</p>}
  </div>
  {isSubmitting && <button disabled type="button" className="w-full justify-center py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-2 focus:ring-slate-700 focus:text-slate-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
</svg>
Creating...
</button>}
   {!isSubmitting && <Button type={"submit"} text={"Create"} width={"w-full"}/>}
</form>

<Link href={"/dashboard/login"}>
<p className="underline hover:text-slate-500 active:text-slate-500">Already have an account? Login</p>
</Link>

</div>

    </div>
    </>
  )
}

export default Register
