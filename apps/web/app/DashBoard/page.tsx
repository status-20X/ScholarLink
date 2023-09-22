"use client"
import I from '../dp.jpg'
import React from 'react'
import "tailwindcss/tailwind.css";
import {useEffect , useState} from 'react'
import Image from 'next/image';
const Dashboard= () => {
     const [Schemes, SetSchemes] = useState([{name:"empty"}]);
  useEffect(() => {
    SetSchemes([
    { name: 'Mango Dev'}
  ]);
  }, []);
  return (
    <div className='mx-20'>
      <div className='mx-40 my-20'>
        <Image src={I} width={400} height={400} alt='hello' className='rounded-full'/>
      </div>
      <div>
      <div className='bg-black min-w-[200px] text-white min-h-[300px] py-20 color-white'>
        {
        Schemes.map((element) => {
              return (
                <option value={element.name} className='size-6xl px-60'>
                  {element.name}
                  </option>
              )
            })
        }
      </div>
      </div>
    </div>
  )
}

export default Dashboard
