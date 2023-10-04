import React from "react";

interface DashboardProps {
  scheme: string;
  status: string;
}

const DashboardComponent = ({ scheme, status }: DashboardProps) => {
  return (
    <>
      <div className="bg-black rounded-[15rem] min-h-[6.25rem] min-w-[22.5rem] m-2 text-white flex flex-col justify-center items-center text-xl">
        <div>{scheme}</div>
        <div>{status}</div>
        <div>extra</div>
      </div>
    </>
  );
};

export default DashboardComponent;
