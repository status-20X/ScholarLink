"use client";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import SchemesList from "../schemes.json";
import "../style/globals.css";
import SchemeComponent from "../Components/SchemeComponent/scheme-component";

interface SchemeProps {
  name: string;
  about: string;
  state: string;
  certificates_required: string[];
}

const Page = () => {
  const [schemes, SetSchemes] = useState<SchemeProps[]>([]);

  useEffect(() => {
    SetSchemes(SchemesList);
  }, []);

  return (
    <>
      <div className="flex flex-col">
        {schemes.map((scheme) => {
          return <SchemeComponent scheme={scheme} key={scheme.name} />;
        })}
      </div>
    </>
  );
};

export default Page;
