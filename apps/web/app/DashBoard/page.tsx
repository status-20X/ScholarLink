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
    <>
    </>
  )
}

export default Dashboard
