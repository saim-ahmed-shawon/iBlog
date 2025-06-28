import React from 'react'
import {items} from "./data"
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "iBlog - Portfolio",
  description: "This is a demo blogging website's portfolio page, made with Next js, MongoDB and Tailwind CSS",
};

const PortfolioCat = async({params}) => {
  const p = await params

  const getData = async (cat) => {
    const data = await items[cat]
    if(data){
      return data
    }else{
      return notFound()
    }
  }

  const data = await getData(p.category)
  return (
    <>

    <div className="container mx-auto">
      <h1 className="text-lg font-bold py-1 text-slate-500">{params.category}</h1>
      <div className="cards">
        
        {data.map(i=>{return <section key={i.id} className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
    <div className="lg:col-span-5 lg:mt-0 overflow-hidden">

        <Image className="mb-4 hidden dark:block md:h-full hover:scale-110 active:scale-110 duration-300 ease-out rounded" src={i.image} width={720} height={720} alt="peripherals" />

    </div>
    <div className="me-auto place-self-center lg:col-span-7">
      <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
        {i.title}
      </h1>
      <p className="mb-6 text-gray-500 dark:text-gray-400">{i.desc}</p>
    </div>
  </div>
</section>})}

      </div>
    </div>
      
    </>
  )
}

export default PortfolioCat
