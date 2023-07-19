import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
async function getData(){
  const res=await fetch("http://localhost:3000/api/posts",{
    // next:{revalidate:10}
    cache:"no-store",
  });
  if(!res.ok)
  throw new Error("Failed to fetch data");
  return res.json();
}
const Blog = async() => {
  const data=await getData();
  console.log(data)
  return (
    <div>
    {data.map((item)=>(
      <Link className='flex items-center gap-10 mb-10' key={item.id} href={`/blog/${item._id}`}>
        <div className='relative flex items-center'>
          <Image
            className='object-cover'
            width={400}
            height={250}
            src={item.image}
            alt=""
          />
        </div>
        <div className='flex-1 flex flex-col gap-5'>
          <h1 className='font-semibold text-2xl'>{item.title}</h1>
          <p>{item.desc}</p>
        </div>
      </Link>
      ))
    }
    </div>
  )
}

export default Blog