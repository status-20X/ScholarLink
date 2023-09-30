"use client"
import I from '../dp.jpg'
import React from 'react'
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import {useEffect , useState} from 'react'
import Image from 'next/image';
const Dashboard= () => {
  return (
    <div className='bg-[#1E1E1E] min-w-full h-screen flex items-center justify-center'>
      <div  className=' bg-[#D9D9D9] rounded-[2.5rem] w-[80%] flex flex-col items-center justify
      -center'>
        <div className='rounded-full flex justify-center h-[30rem] w-[30rem] bg-black p-4'>
          <Image src= {I} alt="ada" className='rounded-full self-center w-[95%] h-[95%]'/>
        </div>
        <div className='rounded-xl bg-black text-white mt-10 text-center text-9xl'>Arjit Kedia</div>
        <div className='bg-black rounded-[15rem] min-h-[6.25rem] min-w-[22.5rem] m-6 text-white flex flex-col justify-center items-center text-xl'>
          <div>Scheme</div>
          <div>Status</div>
          <div>extra</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
