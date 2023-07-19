import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import styles from "./page.module.css"

export const metadata = {
  title: 'Bloggo Contact Info',
  description: 'A Blog Site',
}

const Contact = () => {
  return (
    <div className='flex flex-col gap-10'>
      <h1 className='font-bold text-6xl text-center mt-5'>Let's Keep in Touch</h1>
      <div className='flex items-center gap-[100px]'>
        <div className='relative h-[500px] flex-1'>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className='flex-1 flex flex-col gap-5'>
          <input className='bg-transparent outline-none text-[#bbb] border-solid border-2 border-[#bbb] p-3' type='text' placeholder='name'></input>
          <input className="bg-transparent outline-none text-[#bbb] border-solid border-2 border-[#bbb] p-3" type='text' placeholder='email'></input>
          <textarea className='bg-transparent outline-none text-[#bbb] border-solid border-2 border-[#bbb] p-3' placeholder='message' cols={30} rows={10}></textarea>
          <Button url={"#"} text={"Send"}></Button>
        </form>
      </div>
    </div>
  )
}

export default Contact