"use client";
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import React, { useState, useEffect } from "react";
import status from "../status.json";
import StatusComponent from "../StatusComponent/page";

interface SchemeProps {
  name: string;
  about: string;
  state: string;
  certificates_required: string[];
  status: string;
}

const CheckStatus = () => {
  const [schemes, setSchemes] = useState<SchemeProps[]>([]);
  useEffect(() => {
    setSchemes(status);
  }, []);

  return (
    <div className="flex flex-col">
      {schemes.map((scheme) => {
        return <StatusComponent scheme={scheme} />;
      })}
    </div>
  );
};
``;
export default CheckStatus;
