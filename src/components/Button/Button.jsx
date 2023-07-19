import Link from 'next/link'
import React from 'react'

const Button = ({text,url}) => {
  return (
    <Link href={url}>
        <button className='flex items-center px-5 justify-center bg-[#4fcc7f] rounded-md py-2 text-sm'>{text}</button>
    </Link>
  )
}

export default Button