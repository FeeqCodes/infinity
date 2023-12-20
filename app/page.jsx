"use client";

import Link from "next/link";

import MyCanvas from "./components/Canvas";


export default function Home() {

  

  return (
    <>    
      
      <div className="relative ">
        <MyCanvas />
        <Link href="/image-search" className="absolute top-[10%] left-[50%] p-6 bg-white rounded-sm">Explore</Link>
      </div>
      
    </>
  )
}
