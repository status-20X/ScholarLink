"use client";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import SchemesList from "../schemes.json";
import "../style/globals.css";
import SchemeComponent from "../SchemeComponent/page";

interface SchemeProps {
  name: string;
  about: string;
  state: string;
  certificates_required: string[];
}

const page = () => {
  const [schemes, SetSchemes] = useState<SchemeProps[]>([]);

  useEffect(() => {
    SetSchemes(SchemesList);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        {schemes.map((scheme) => {
          return <SchemeComponent scheme={scheme} />;
        })}
      </div>
    </>
  );
};

export default page;
