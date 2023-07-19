import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData=(cat)=>{
  const data=items[cat]
  if(data)
  return data;
  return notFound();
}

const Category = ({params}) => {
  const data=getData(params.category)
  return (
    <div>
      <h1 className='font-semibold text-3xl my-4'>{params.category}</h1>
      {
        data.map((item)=>(
        <div className='flex mt-10 mb-20 gap-10 [&:nth-child(2n+1)]:flex-row-reverse' key={item.id}>
          <div className='flex-1 flex flex-col gap-5 justify-center'>
            <h1 className='font-semibold text-5xl'>{item.title}</h1>
            <p>{item.desc}</p>
            <Button text={"See More"} url={"#"}/>
          </div>
          <div className='relative flex-1 h-[500px]'>
            <Image
              fill={true}
              src={item.image}
              alt=""
            />
          </div>  
        </div>
        ))
      }
    </div>
  )
}

export default Category