import React from 'react'
import Image from "next/image"


const Navbar = () => {
  return (
    <nav className='py-5 w-full mb-20 flex justify-between '>
      <span className='block'>
        <Image src="" alt=''  />
      </span>

      <ul className='flex gap-5'>
        <li>Chat with Gemini</li>
        <li>Image Search</li>
        <li>Image Comparison</li>
      </ul>
    </nav>
  )
}

export default Navbar