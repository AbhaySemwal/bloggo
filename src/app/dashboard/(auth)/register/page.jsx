"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'

const Register = () => {
  const[err,setErr]=useState(false);
  const router = useRouter();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const name=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    
    try{
      const res=await fetch("/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          name,email,password,
        })
      });
      res.status===201&&router.push("/dashboard/login?success=Account has been created")
    }catch(err){
      setErr(true);
    }

  }

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <input
          className='p-5 bg-transparent border-solid border-[1px] rounded-md text-xl font-bold'
          type='text'
          placeholder='username'
          required={true}>
        </input>
        <input
          className='p-5 bg-transparent border-solid border-[1px] rounded-md text-xl font-bold'
          type='email'
          placeholder='email'
          required={true}>
        </input>
        <input
          className='p-5 bg-transparent border-solid border-[1px] rounded-md text-xl font-bold'
          type='password'
          placeholder='password'
          required={true}>
        </input>
        <button className='bg-[#2a865a] py-3 rounded-md font-semibold'>Register</button>
      </form>
      {err&&"Something went wrong"}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register