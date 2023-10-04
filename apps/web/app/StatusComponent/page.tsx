"use client";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../style/globals.css";

interface SchemeProps {
  name: string;
  about: string;
  state: string;
  certificates_required: string[];
  status: string;
}

interface StatusComponentProps {
  scheme: SchemeProps;
}

const StatusComponent: React.FC<StatusComponentProps> = ({ scheme }) => {
  const statArr = ["applied", "Under process", "Approval"];
  const [status, setStatus] = useState<number>(
    statArr.indexOf(scheme.status) + 1
  );

  const pwidth = Math.floor(status / 3) * 100;
  const progressWidth = `w-[${pwidth}%]`;
  console.log(progressWidth);

  return (
    <div className="rounded-3xl bg-[#06a67e] p-5 m-5">
      <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-black">
        {scheme.name}
      </h5>
      <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
        {scheme.about}
      </h5>
      <p className="font-normal text-xl text-black dark:text-white-400">
        From: {scheme.state}
      </p>
      <button className="h-[30px] w-[100px] bg-red-600 rounded-md ml-10 mt-2 pl-2 hover:h-[35px] hover:w-[125px] hover:mt-1 hover:ml-8">
        Withdraw
      </button>
      <div className="flex flex-row mt-10 mx-5 justify-between">
        <div className="relative">
          <div
            className={`rounded-full h-[50px] w-[50px] ml-3 mb-3 ${
              status == 1 ? "bg-black" : "bg-white"
            }`}
          >
            <span className="text-white text-2xl absolute inset-0 flex items-center justify-center mb-9">
              {status == 1 && "✔"}
            </span>
          </div>
          <h1 className="text-white">Submitted</h1>
        </div>
        <div className="relative">
          <div
            className={`rounded-full h-[50px] w-[50px] ml-3 mb-3 ${
              status == 2 ? "bg-black" : "bg-white"
            }`}
          >
            <span className="text-white text-2xl absolute inset-0 flex items-center justify-center mb-9 mr-3">
              {status == 2 && "✔"}
            </span>
          </div>
          <h1 className="text-white">Processing...</h1>
        </div>
        <div className="relative">
          <div
            className={`rounded-full h-[50px] w-[50px] ml-3 mb-3 ${
              status == 3 ? "bg-black" : "bg-white"
            }`}
          >
            <span className="text-white text-2xl absolute inset-0 flex items-center justify-center mb-9 ml-2">
              {status == 3 && "✔"}
            </span>
          </div>
          <h1 className="text-white">Accepted</h1>
        </div>
      </div>
      <div className="h-2 bg-white mt-4">
        <div className={`h-full bg-black ${progressWidth}`} />
      </div>
    </div>
  );
};

export default StatusComponent;
