"use client";
import I from "../dp.jpg";
import React from "react";
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import Image from "next/image";
import DashboardComponent from "../DashboardComponent/Page";

const Dashboard = () => {
  return (
    <div className="bg-[#1E1E1E] min-w-full h-fit flex items-center justify-center">
      <div
        className=" bg-[#D9D9D9] rounded-[2.5rem] w-[80%] my-4 flex flex-col items-center justify
      -center"
      >
        <div className="rounded-full flex justify-center h-[30rem] w-[30rem] bg-black p-4">
          <Image
            src={I}
            alt="ada"
            className="rounded-full self-center w-[95%] h-[95%]"
          />
        </div>
        <div className="rounded-xl bg-black text-white mt-10 text-center text-9xl">
          Arjit Kedia
        </div>
        <DashboardComponent scheme="scheme" status="pending" />
        <DashboardComponent scheme="scheme" status="resolved" />
        <DashboardComponent scheme="scheme" status="pending" />
      </div>
    </div>
  );
};

export default Dashboard;
