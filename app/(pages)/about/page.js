import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import Button from '@/components/Button'

export const metadata = {
  title: "About iBlog & Saim",
  description: "This is a demo blogging website's about page made with Next js, MongoDB and Tailwind CSS",
};

const About = () => {
  return (
    <>

    <div className='py-1 px-4 mx-auto max-w-screen-xl lg:px-6'>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-20">
        <div className="relative rounded overflow-hidden h-70 md:col-span-2">
          <Image className='w-full object-cover object-center' src={'https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg'} width={720} height={720} alt='about image'/>
          <div className="py-2 px-4 rornded absolute bg-slate-500 bottom-5 md:left-5">
            <h2 className='text-xl md:text-2xl font-bold'>iBlog - is a dummy project</h2>
            <h3 className='text-xs md:text-sm font-bold'>It is made to show my webdevelopment skills.</h3>
          </div>
        </div>
         <div className='flex flex-col gap-2'>
            <h2 className="text-2xl">Who am I?</h2>
            <p>I am a fullstact webdeveloper, based in Bangladesh. Because of living in a third world country I can delever the premium quality work for reasonable price. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed ea est hic totam cum assumenda enim facere veritatis deserunt id, minus sit dignissimos doloremque nihil ipsum odit, animi aliquid. Magni dolorum architecto aliquid ipsa, minus, repellendus veniam deserunt cum soluta cupiditate atque, rerum voluptatibus unde dolor praesentium fuga culpa.</p>
          </div>
          
          <div className='flex flex-col gap-5'>
            <h2 className="text-2xl">Who I do?</h2>
            <p>I am a fullstact webdeveloper, based in Bangladesh. Because of living in a third world country I can delever the premium quality work for reasonable price.  soluta cupiditate atque, rerum voluptatibus unde dolor praesentium fuga culpa.</p>
            <ul className='flex flex-col gap-5 list-disc ml-5'>
              <li>Full-stack web development</li>
              <li>UI/UX design</li>
              <li>Provide quality work</li>
              </ul>
              <Link href={`/contact`}>
              <Button text={"Contact"}/>
</Link>
          </div>
      </div>
    </div>
      
    </>
  )
}

export default About
