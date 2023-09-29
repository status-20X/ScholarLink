"use client";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import React from "react";
const Navbar = () => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="
           top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4 overflow-y-auto bg-[#06A67E]">
          <Link href="/DashBoard" className="flex items-center pl-8 pt-2 mb-5">
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white ">
              Scholar Link
            </span>
          </Link>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <ul className="space-y-2 font-medium flex flex-col ">
            <li>
              <Link
                href="/DashBoard"
                className="flex pl-12 items-center p-2 text-center  text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group underline"
              ><h1>Dashboard</h1>
              </Link>
            </li>

            <li>
              <Link
                href="/Scheme"
                className="flex pl-12 items-center p-2 text-center  text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group underline"
              >
                  Schemes
              </Link>
            </li>
            <li>
              <Link
                href="/Status"
                className="flex pl-12 items-center p-2 text-center  text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group underline"
              >
                  Check Status
              </Link>
            </li>
            <li>
              <Link
                href="/Application"
                className="flex pl-12 items-center p-2 text-center  text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group underline"
              >
                  New Application
              </Link>
            </li>
            <li>
              <Link
                href="/Greviance"
                className="flex pl-12 items-center p-2 text-center  text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group underline"
              >
                  Grievance
              </Link>
            </li>
            <li>
              <Link
                href="/Login"
                className="flex pl-12 items-center p-2 text-center  text-gray-900 rounded-lg dark:text-black hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 group underline"
              >
                  Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Navbar
