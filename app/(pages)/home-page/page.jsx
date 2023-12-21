import BreadCrumbs from '@/app/components/BreadCrumbs'
import Hero from '@/app/components/Hero'
import React from 'react'

const Homepage = () => {
  return (
  
      <div className='font-sans font-semibold w-full'>
        <Hero 
        title="INFINITY AI"
        breadCrumbs={
          <BreadCrumbs />
        }
        />
      </div>
      
    
  )
}

export default Homepage