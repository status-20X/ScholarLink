"use client";
import "tailwindcss/tailwind.css";
import "../../style/globals.css";
import React from "react";

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
  const width = ["w-[33%]", "w-[66%]", "w-full"];
  const statusIndex = statArr.indexOf(scheme.status) + 1;

  return (
    <div className="rounded-3xl bg-[#06a67e] p-5 m-5" role="button">
      <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-black">
        {scheme.name}
      </h5>
      <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
        {scheme.about}
      </h5>
      <p className="font-normal text-xl text-black dark:text-white-400">
        From: {scheme.state}
      </p>
      <button
        type="button"
        className="h-[30px] w-[100px] bg-red-600 rounded-md ml-10 mt-2 pl-2 hover:h-[35px] hover:w-[125px] hover:mt-1 hover:ml-8"
      >
        Withdraw
      </button>
      <div className="flex flex-row mt-10 mx-5 justify-between">
        {statArr.map((_, index) => (
          <div className="relative" key={index}>
            <div
              className={`rounded-full h-[50px] w-[50px] ml-3 mb-3 ${
                statusIndex === index + 1 ? "bg-black" : "bg-white"
              }`}
            >
              <span className="text-white text-2xl absolute inset-0 flex items-center justify-center mb-9">
                {statusIndex === index + 1 && "✔"}
              </span>
            </div>
            <h1 className="text-white">{_}</h1>
          </div>
        ))}
      </div>
      <div className="h-2 bg-white mt-4 w-full">
        <div className={`h-full bg-black ${width[statusIndex - 1]}`} />
      </div>
    </div>
  );
};

export default StatusComponent;
