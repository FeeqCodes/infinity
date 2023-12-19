import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-5 w-full mb-20 flex justify-between'>
      <span className='block'>Infinity</span>

      <ul className='flex gap-5'>
        <li>Chat with Gemini</li>
        <li>Image Search</li>
        <li>Image Comparison</li>
      </ul>
    </nav>
  )
}

export default Navbar