"use client";
import I from "../dp.jpg";
import React from "react";
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import Image from "next/image";
import DashboardComponent from "../Components/DashboardComponent/dashboard-component";

const Dashboard = () => {
  return (
    <div className="bg-[#1E1E1E] min-w-full h-fit flex items-center justify-center">
      <div
        className=" bg-[#D9D9D9] rounded-[2.5rem] w-[40%] my-4 flex flex-col items-center justify
      -center"
      >
        <div className="rounded-full flex justify-center h-[10%] w-[40%] bg-black p-2">
          <Image
            src={I}
            alt="ada"
            className="rounded-full self-center w-[50%] h-[50%]"
          />
        </div>
        <div className="rounded-xl bg-black w-[60%] text-white mt-3 text-center text-3xl">
          Sooraj Kashyap
        </div>
        <DashboardComponent scheme="scheme" status="pending" />
        <DashboardComponent scheme="scheme" status="resolved" />
        <DashboardComponent scheme="scheme" status="pending" />
        <DashboardComponent scheme="scheme" status="pending" />
        <DashboardComponent scheme="scheme" status="resolved" />
        <DashboardComponent scheme="scheme" status="pending" />
      </div>
    </div>
  );
};

export default Dashboard;
