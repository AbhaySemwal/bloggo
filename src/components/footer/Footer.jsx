"use client"
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='flex items-center justify-between h-[50px]'>
        <div>©2023 Bloggo. All rights reserved.</div>
        <div className='flex gap-3 cursor-pointer items-center justify-center'>
          <div className='text-[#5451dc]'><FacebookIcon/></div>
          <div className='text-[#f35757]'><InstagramIcon/></div>
          <div className='text-[#4a49b6]'><TwitterIcon/></div>
          <div className='text-[#ff2020]'><YouTubeIcon/></div>
        </div>
    </div>
  )
}

export default Footer