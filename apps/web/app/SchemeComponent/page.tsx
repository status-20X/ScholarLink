"use client";
import "tailwindcss/tailwind.css";
import React ,{useState,useEffect} from "react";
import Link from "next/link";
import applied from "../status.json";
const page = (element) => {
  const handleClick = () => {
    
    alert("Apllied");
  }
  return (
    <div className="rounded-3xl bg-[#06a67e] p-5 m-5">
        <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-black">
          {element.element.name}
        </h5>
        <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
           {element.element.about}
        </h5>
        <p className="font-normal text-xl text-black dark:text-white-400">
        From:{element.element.state}
        </p>
        <button type="button" className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
      <div onClick={handleClick} className="flex flex-row align-middle">
        <span className="mr-2">Apply</span>
        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </div>
    </button>
    </div>
  );
};

export default page;
