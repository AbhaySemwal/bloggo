import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'
const About = () => {
  return (
    <div className='flex flex-col'>
      <div className="relative h-[250px]">
        <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className='object-cover grayscale'
        />
        <div className='absolute bottom-5 px-5 py-2 bg-[#27ba8b]'>
          <h1 className='font-bold text-2xl'>Digital Storytellers</h1>
          <h2 className='font-semibold'>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className='flex gap-5 mt-5'>
        <div className='flex flex-col gap-5'>
          <h1 className='font-bold text-4xl'>Who are we?</h1>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?</p>
        </div>
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl">What We Do?</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
              Creative Illustrations
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast and Handy
              <br />
              <br /> - Mobile Apps
            </p>
            <Button url="/contact" text="Contact" />
          </div>
        </div>
      </div>
  )
}

export default About