"use client";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../style/globals.css";

const StatusComponent = (element) => {
  const [status1, setStatus1] = useState("bg-white");
  const [status2, setStatus2] = useState("bg-white");
  const [status3, setStatus3] = useState("bg-white");
  const [progressWidth, setProgressWidth] = useState("w-[33.33%]");
  const checkmark1 = element.element.status === "applied" ? "✔" : "";
  const checkmark2 = element.element.status === "Under process" ? "✔" : "";
  const checkmark3 = element.element.status === "Approval" ? "✔" : "";

  useEffect(() => {
    if (element.element.status === "applied") {
      setStatus1("bg-black");
      setStatus2("bg-white");
      setStatus3("bg-white");
      setProgressWidth("w-[33.33%]");
    } else if (element.element.status === "Under process") {
      setStatus1("bg-black");
      setStatus2("bg-black");
      setStatus3("bg-white");
      setProgressWidth("w-[66.66%]");
    } else if (element.element.status === "Approval") {
      setStatus1("bg-black");
      setStatus2("bg-black");
      setStatus3("bg-black");
      setProgressWidth("w-full");
    }
  }, [element.element.status]);

  return (
    <div className="rounded-3xl bg-[#06a67e] p-5 m-5">
      <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-black">
        {element.element.name}
      </h5>
      <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
        {element.element.about}
      </h5>
      <p className="font-normal text-xl text-black dark:text-white-400">
        From: {element.element.state}
      </p>
      <button className="h-[30px] w-[100px] bg-red-600 rounded-md ml-10 mt-2 pl-2 hover:h-[35px] hover:w-[125px] hover:mt-1 hover:ml-8">
        Withdraw
      </button>
      <div className="flex flex-row mt-10 mx-5 justify-between">
        <div className="relative">
          <div className={`rounded-full h-[50px] w-[50px] ml-3 mb-3 ${status1}`}>
            <span className="text-white text-2xl absolute inset-0 flex items-center justify-center mb-9">{checkmark1}</span>
          </div>
          <h1 className="text-white">Submitted</h1>
        </div>
        <div className="relative">
          <div className={`rounded-full h-[50px] w-[50px] ml-3 mb-3 ${status2}`}>
            <span className="text-white text-2xl absolute inset-0 flex items-center justify-center mb-9 mr-3">{checkmark2}</span>
          </div>
          <h1 className="text-white">Processing...</h1>
        </div>
        <div className="relative">
          <div className={`rounded-full h-[50px] w-[50px] ml-3 mb-3 ${status3}`}>
            <span className="text-white text-2xl absolute inset-0 flex items-center justify-center mb-9 ml-2">{checkmark3}</span>
          </div>
          <h1 className="text-white">Accepted</h1>
        </div>
      </div>
      {/* Progress line */}
      <div className="h-2 bg-white mt-4">
        <div className={`h-full bg-black ${progressWidth}`} />
      </div>
    </div>
  );
};

export default StatusComponent;



