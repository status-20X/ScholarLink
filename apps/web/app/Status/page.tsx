"use client";
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import React, { useState, useEffect } from "react";
const state: boolean = false;
import status from "../status.json";
import StatusComponent from "../StatusComponent/page";

const CheckStatus = () => {
  const [ascheme, setAscheme] = useState([{ name: "empty" , status : "applied" }]);
  useEffect(() => {
    setAscheme(status.schemes);
  }, []);
  return (
    <div className="flex flex-col">
      {ascheme.map((element) => {
        return <StatusComponent element={element} />;
      })}
    </div>
  );
};
``;
export default CheckStatus;
