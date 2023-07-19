"use client"
import React from 'react'
import Link from 'next/link'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
const links=[
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:2,
        title:"Portfolio",
        url:"/portfolio",
    },
    {
        id:3,
        title:"Blog",
        url:"/blog",
    },
    {
        id:4,
        title:"About",
        url:"/about",
    },
    {
        id:5,
        title:"Contact",
        url:"/contact",
    },
    {
        id:6,
        title:"Dashboard",
        url:"/dashboard",
    },

]

const Navbar = () => {
const session = useSession();
  return (
    <div className='flex items-center justify-between h-[100px]'>
        <Link className='font-bold text-lg' href="/">Bloggo</Link>
        <div className='flex items-center justify-center gap-3 text-sm'>
            <DarkModeToggle/>
            <div className='flex items-center justify-center gap-3'>
                {links.map(link=>(
                    <Link key={link.id} href={link.url}>{link.title}</Link>
                ))}
            </div>
            {
                session.status==="authenticated"&&(
                <button className='bg-[#07c063] rounded-md px-2 py-1' onClick={signOut}>Logout</button>
                )
            }
        </div>
    </div>
  )
}

export default Navbar