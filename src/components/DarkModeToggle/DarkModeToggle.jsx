"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
// import { ThemeContext } from '@emotion/react';

const DarkModeToggle = () => {
const {toggle,mode}=useContext(ThemeContext);
  return (
    <div onClick={toggle} className='cursor-pointer flex justify-between items-center relative p-1 w-[42px] h-[24px] border-[1.5px] border-solid border-[#2f734a] rounded-xl'>
        <div className='text-[12px]'>🌙</div>
        <div className='text-[12px]'>🌞</div>
        <div className={`w-[15px] h-[15px] bg-[#15764f] rounded-full absolute ${mode=="light"?"left-1":"right-1"}`}></div>
    </div>
  )
}

export default DarkModeToggle