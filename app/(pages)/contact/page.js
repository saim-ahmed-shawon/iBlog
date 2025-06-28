"use client"

import React from 'react'
import Image from 'next/image'
import { useForm } from "react-hook-form"

import contactImage from "@/public/contact.png"
import Form from '@/components/Form';
import { delay, notify } from '@/components/Form'

const page = () => {

          const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm();

     const onSubmit = async(data) => {
  await delay(3)
  await fetch('/api/contact',{method:'POST', body:JSON.stringify(data), headers:{"Content-Type":"application/json"}})
   notify("☺️ Thanks for sharing your thoughts!")
   reset()
 }



  return (
    <>

      <div className='py-1 px-4 mx-auto max-w-screen-xl lg:px-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10">
            <div className='hidden md:block'>
                <Image className='floatAnimation' src={contactImage} width={720} height={720} alt='contact image'></Image>
            </div>
            <div className='pt-10'>
              <Form onSubmit={onSubmit} username={"hidden"} password={"hidden"}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default page
