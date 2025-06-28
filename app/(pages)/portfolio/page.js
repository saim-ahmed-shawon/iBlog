import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
<div className="py-1 px-4 mx-auto max-w-screen-xl lg:px-6 ">
<h1 className="text-xl font-bold pb-8 text-slate-500">Gallery</h1>
<div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
  <Link href={`/portfolio/earth`}>
  <div className="card group h-100 border-5 rounded border-white overflow-hidden relative">
    <Image className="w-full h-full object-cover group-active:scale-110 group-hover:scale-110 duration-300 ease-out" src={`https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg`} width={360} height={360} alt="earth image"/>
    <h2 className="absolute text-4xl font-bold group-hover:text-slate-500 right-10 bottom-10 duration-300 ease-out">Earth</h2>
  </div>
  </Link>
  <Link href={`/portfolio/moon`}>
  <div className="card group h-100 border-5 rounded border-white overflow-hidden relative">
    <Image className="w-full h-full object-cover group-active:scale-110 group-hover:scale-110 duration-300 ease-out" src={`https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg`} width={360} height={360} alt="moon image"/>
    <h2 className="absolute text-4xl font-bold group-hover:text-slate-500 right-10 bottom-10 duration-300 ease-out">Moon</h2>
  </div>
  </Link>
  <Link href={`/portfolio/mars`}>
  <div className="card group h-100 border-5 rounded border-white overflow-hidden relative">
    <Image className="w-full h-full object-cover group-active:scale-110 group-hover:scale-110 duration-300 ease-out" src={`https://images.pexels.com/photos/1624360/pexels-photo-1624360.jpeg`} width={360} height={360} alt="mars image"/>
    <h2 className="absolute text-4xl font-bold group-hover:text-slate-500 right-10 bottom-10 duration-300 ease-out">Mars</h2>
  </div>
  </Link>
</div>
</div>
    </>
  );
};

export default page;
