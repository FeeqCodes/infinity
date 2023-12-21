import React from 'react'
import Link from "next/link"



const Links = ({text, endpoint}) => {
  return (
    <div>
        <Link
            className='text-white bg-[#1F1E1E] rounded-[20px] border border-white p-3 px-6' 
            href={endpoint}>
            {text}
        </Link>
    </div>
  )
}

export default Links