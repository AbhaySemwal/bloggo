"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import useSWR, { mutate } from 'swr';
const Dashboard = () => {    
  const session = useSession();
  console.log(session);
  const fetcher=(...args)=>fetch(...args).then(res=>res.json());
  const {data,mutate,error,isLoading}=useSWR(`/api/posts?username=${session?.data?.user.name}`,fetcher);
  console.log(data);
  //useEffect method to fetch data
  // const [data,setData]=useState([]);
  // const [err,setErr]=useState(false);
  // const [isLoading,setIsLoading]=useState(false);
  // useEffect(()=>{
  //   const getData=async()=>{
  //     setIsLoading(true);
  //     const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
  //       cache:"no-store"
  //     });
  //     if(!res.ok)
  //     setErr(true);
  //     const data=await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   }  
  //   getData();
  // },[]);
  const router = useRouter();
  if(session.status==="loading")
  return <p>Loading...</p>;
  if(session.status==="unauthenticated")
  router?.push("/dashboard/login");

  const handleSubmit=async(e)=>{
    e.preventDefault(); 
    const title=e.target[0].value;
    const desc=e.target[1].value;
    const image=e.target[2].value;
    const content=e.target[3].value;
    try{
      await fetch("/api/posts",{
        method:"POST",
        body:JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      }); 
      mutate();
      e.target.reset();
    }
    catch(err){
      console.log(err)
    }
  }
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  if(session.status==="authenticated"){
    return (
      <div className='flex gap-24'>
        <div className='w-1/2 flex flex-col gap-5'>
          {isLoading?"Loading...":
            data?.map((post)=>
              <div className='flex items-center justify-between mt-10' key={post._id}>
                <div className='w-[200px] h-[100px] relative'>
                  <Image className='object-cover' src={post.image} width={200} height={100}/>
                </div>
                <h2>{post.title}</h2>
                <span onClick={() => handleDelete(post._id)} className='cursor-pointer text-red-600'>X</span>
              </div>
            )
          }
        </div>
        <form className='w-1/2 flex-1 flex flex-col gap-5' onSubmit={handleSubmit}>
          <h1 className='font-bold text-3xl'>Add New Post</h1>
          <input className='p-2 bg-transparent border-solid border-[2px] rounded-sm text-[#bbb] text-xl font-semibold' type='text' placeholder='Title'></input>
          <input className='p-2 bg-transparent border-solid border-[2px] rounded-sm text-[#bbb] text-xl font-semibold' type='text' placeholder='Desc'></input>
          <input className='p-2 bg-transparent border-solid border-[2px] rounded-sm text-[#bbb] text-xl font-semibold' type='text' placeholder='image'></input>
          <textarea
          className='p-2 bg-transparent border-solid border-[2px] rounded-sm text-[#bbb] text-xl font-semibold'
          placeholder='Content'
          cols={30}
          rows={10}
          >
          </textarea>
          <button className='flex items-center justify-center bg-[#327a58] py-2 rounded-md'>Send</button>
        </form>
      </div>
    )
  }
}

export default Dashboard