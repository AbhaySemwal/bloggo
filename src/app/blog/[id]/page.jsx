import Image from 'next/image'
import React from 'react'
import {notFound} from "next/navigation";

async function getData(id){
  const res=await fetch(`http://localhost:3000/api/posts/${id}`,{
    // // next:{revalidate:10}
    // cache:"no-store"
  });
  if(!res.ok)
  return notFound();
  return res.json();
}
export async function generateMetadata({ params }) {
  const post=await getData(params.id);
  return{
    title:post.title,
    description:post.desc
  };
}
const BlogPost = async({params}) => {
  const data=await getData(params.id)
  return (
    <div>
      <div className='flex'>
        <div className='flex-1 flex flex-col justify-between'>
          <h1 className='font-bold text-4xl'>{data.title}</h1>
          <p>{data.desc}</p>
          <div className='flex gap-2 items-center'>
            <Image
              className='rounded-full object-cover'
              src={data.image}
              alt=""
              width={40}
              height={40}
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className='flex-1 relative h-[300px]'>
            <Image
              className='object-cover'
              src={data.image}
              alt=""
              fill={true}
            />
        </div>
      </div>
      <div className='mt-10'>
        <p>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost