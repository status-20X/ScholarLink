"use client";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SchemesList from "../schemes.json";
import SchemeComponent from "../SchemeComponent/page";

const page = () => {
  const [schemes, SetSchemes] = useState([{ name: "empty" }]);
  useEffect(() => {
    SetSchemes(SchemesList.schemes);
  }, []);
  return (
    <>
      {schemes.map((element) => {
        return <SchemeComponent element={element} />;
      })}
    </>
  );
};

export default page;
