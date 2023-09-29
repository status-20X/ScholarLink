"use client"
import I from '../dp.jpg'
import React from 'react'
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import {useEffect , useState} from 'react'
import Image from 'next/image';
const Dashboard= () => {
     const [Schemes, SetSchemes] = useState([{name:"empty"}]);
  useEffect(() => {
    SetSchemes([
    { name: 'Tushar'},
    { name: 'Information'},
    { name: 'Information'},
    { name: 'Infromation'},
  ]);
  }, []);
  return (
    <div className='bg-[#1E1E1E] min-w-full h-[300vh] items-center relative'>
      <div  className=' top-[43rem] left-[16rem] bg-[#D9D9D9] rounded-[2.5rem] min-h-[25rem]  min-w-[31.5rem] p-10 flex flex-col items-center justify-items-center absolute'>
        <div className='rounded-full h-[10rem] w-[10rem] bg-black p-4'>
          <Image src= {I} alt="ada" className='rounded-full w-[7.5rem] h-[7.5rem]'/>
        </div>
        <div className='rounded-lg bg-black text-white mt-10 min-w-[12.5rem] text-center'>Arjit Kedia</div>
        <div className='bg-black rounded-[15rem] min-h-[6.25rem] min-w-[12.5rem] m-6 text-white flex flex-col justify-center items-center text-xl'>
          <div>Scheme</div>
          <div>Status</div>
          <div>extra</div>
        </div>
        <div className='bg-black rounded-[15rem] min-h-[6.25rem] min-w-[12.5rem] m-6 text-white flex flex-col justify-center items-center text-xl'>
          <div>Scheme</div>
          <div>Status</div>
          <div>extra</div>
        </div>
       <div className='bg-black rounded-[15rem] min-h-[6.25rem] min-w-[12.5rem] m-6 text-white flex flex-col justify-center items-center text-xl'>
          <div>Scheme</div>
          <div>Status</div>
          <div>extra</div>
        </div>
        <div className='bg-black rounded-[15rem] min-h-[6.25rem] min-w-[12.5rem] m-6 text-white flex flex-col justify-center items-center text-xl'>
          <div>Scheme</div>
          <div>Status</div>
          <div>extra</div>
        </div>
        <div className='bg-black rounded-[15rem] min-h-[6.25rem] min-w-[12.5rem] m-6 text-white flex flex-col justify-center items-center text-xl'>
          <div>Scheme</div>
          <div>Status</div>
          <div>extra</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
