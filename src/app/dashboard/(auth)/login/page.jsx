"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session =useSession();
  const router=useRouter();
  if(session.status==="loading")
  return<p>Loading...</p>;
  if(session.status==="authenticated")
  router?.push("/dashboard");

  const handleSubmit=async(e)=>{

    e.preventDefault();
    const email=e.target[0].value;
    const password=e.target[1].value;
    signIn("credentials",{email,password})

  }

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
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
        <button className='bg-[#2a865a] py-3 rounded-md font-semibold'>Login</button>
      </form>
      {/* {err&&"Something went wrong"} */}
      <button className="flex items-center justify-center bg-white text-black rounded-md p-2" onClick={()=>signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login