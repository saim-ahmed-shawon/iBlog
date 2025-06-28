"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from './Button'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const [toggle, setToggle]= useState(false)
    const pages = [
        {id:"1", title:"Home", href:"/"},
        {id:"2", title:"Portfolio", href:"/portfolio"},
        {id:"3", title:"Blogs", href:"/blogs"},
        {id:"4", title:"About", href:"/about"},
        {id:"5", title:"Contact", href:"/contact"},
        {id:"6", title:"Dashboard", href:"/dashboard"},
    ]
    const session = useSession()

  return (
    <>

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href={`/`} className="flex items-center space-x-3 rtl:space-x-reverse">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#cad5e2" fill="none">
    <path d="M17.7341 17.7341C22.2582 13.21 23.3585 6.97526 20.1916 3.80838C17.6271 1.24383 13.0506 1.4776 9 4.06186M3.80838 20.1916C6.28643 22.6697 10.6429 22.535 14.5884 20.1916M6.26587 6.26587C2.97995 9.55179 1.50022 13.7401 2.14979 17" stroke="#cad5e2" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M16.915 7.08503C15.0148 5.18491 11.274 5.84506 8.55952 8.55952C5.84506 11.274 5.18491 15.0148 7.08503 16.915C8.98515 18.8151 12.726 18.1549 15.4405 15.4405C17.0895 13.7915 17.9803 11.7638 17.9997 10" stroke="#cad5e2" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M13.6383 10.3617C14.2717 10.9951 14.0516 12.242 13.1468 13.1468C12.242 14.0516 10.9951 14.2717 10.3617 13.6383C9.7283 13.0049 9.94835 11.758 10.8532 10.8532C11.758 9.94835 13.0049 9.7283 13.6383 10.3617Z" stroke="#cad5e2" strokeWidth="1.5" strokeLinecap="round"></path>
</svg>      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">iBlog</span>
  </Link>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {session.status === "authenticated" && <button onClick={()=>signOut()} type="button" className={`w-fit text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 cursor-pointer`}>Logout</button>}
      {session.status === "loading" && <Button text={`wait..`}/>}
      {session.status === "unauthenticated" && <Link href={"/dashboard/login"}><Button text={`Login`}/></Link>}
      <button onClick={()=>setToggle(!toggle)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`items-center justify-between ${toggle? "" : "hidden"} w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {pages.map(page=>{ return <li key={page.id}>
        <Link href={page.href} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-700 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{page.title}</Link>
      </li>})}

    </ul>
  </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
