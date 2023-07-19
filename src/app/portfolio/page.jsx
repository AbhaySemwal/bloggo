import React from 'react'
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div>
      <h1 className='my-10 font-semibold text-4xl'>Choose a gallery</h1>
      <div className='flex gap-5'>
        <Link style={{backgroundImage:`url("/illustration.png")`}} className='border-solid border-[5px] relative rounded-sm w-[300px] h-[400px] border-[#bbb]' href="/portfolio/illustrations" >
            <span className='absolute bottom-5 left-5 font-semibold text-4xl'>Illustrations</span>
        </Link>
        <Link style={{backgroundImage:`url("/websites.jpg")`}} className='border-solid border-[5px] relative rounded-sm w-[300px] h-[400px] border-[#bbb]' href="/portfolio/websites" >
            <span className='absolute bottom-5 left-5 font-semibold text-4xl'>Websites</span>
        </Link>
        <Link style={{backgroundImage:`url("/apps.jpg")`}} className='border-solid border-[5px] relative rounded-sm w-[300px] h-[400px] border-[#bbb]' href="/portfolio/applications" >
            <span className='absolute bottom-5 left-5 font-semibold text-4xl'>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio