import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../style/globals.css";
const state: boolean = false;
const statusComponent = (element) => {
  const [status1, setStatus1] = useState(`[#F0F4F3]`);
  const [status2, setStatus2] = useState(`[#F0F4F3]`);
  const [status3, setStatus3] = useState(`[#F0F4F3]`);
  useEffect(() => {
    console.log(element.element.status);
    if (element.element.status == "applied" ) {
      setStatus1(`black shadow-2xl shadow-black`);
    }
    if (element.element.status == "Under process" ) {
      setStatus2(`black shadow-2xl shadow-black`);
    }
    if (element.element.status == "Approval" ) {
      setStatus3(`black shadow-2xl shadow-black`);
    }
  }, []);
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
      <button className="h-[30px] w-[100px] bg-red-600 rounded-md ml-10 mt-2 pl-2 hover:h-[35px] hover:w-[125px] hover:mt-1 hover:ml-8">
        Withdraw
      </button>
      <div className="flex flex-row mt-10 mx-5 justify-between ">
        <div>
        <div
          className={`bg-${status1} h-[50px] w-[50px] rounded-full ml-3 mb-3`}
          ></div>
          <h1>Submitted</h1>
        </div>
        <div>
        <div
          className={`bg-${status2} h-[50px] w-[50px] rounded-full ml-3 mb-3`}
          ></div>
            <h1>Processing...</h1>
          </div>
        <div>
          <div
          className={`bg-${status3} h-[50px] w-[50px] rounded-full ml-3 mb-3`}
          ></div>
            <h1>Accepted</h1>
          </div>
      </div>
    </div>
  );
};
export default statusComponent;
