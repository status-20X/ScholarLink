"use client";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SchemesList from "../schemes.json";
import "../style/globals.css";
import SchemeComponent from "../SchemeComponent/page";

const page = () => {
  const [schemes, SetSchemes] = useState([]);
  useEffect(() => {
    SetSchemes(SchemesList);
    console.log(SchemesList);
  }, []);
  return (
    <>
      <div className="flex flex-col">
        {schemes.map((element) => {
          return <SchemeComponent element={element} />;
        })}
      </div>
    </>
  );
};

export default page;
