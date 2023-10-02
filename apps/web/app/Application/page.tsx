"use client";
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import React, { ChangeEvent, useEffect, useState } from "react";
import schemesList from "../schemes.json";
import InputField from "../ApplicationInput/page";

interface Scheme {
  name: string;
  about: string;
  state: string;
  certificates_required: string[];
}

const Application: React.FC = () => {
  const [schemes, SetSchemes] = useState<Scheme[]>(schemesList);
  const [selectedScheme, setSelectedScheme] = useState<string>(
    schemesList[0].name
  );

  useEffect(() => {
    SetSchemes(schemesList);
    console.log(schemes);
  }, []);

  const handleSchemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedScheme(event.target.value);
  };

  const selectedSchemeData = schemes.find(
    (scheme) => scheme.name === selectedScheme
  );

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <form className="bg-[rgb(94,213,183)] shadow-md px-8 pt-6 pb-8 mb-4 rounded-2xl">
          <span className="text-2xl text-green-700 font-bold text-ellipsis overflow-hidden ">
            Let's get you started with your application
          </span>
          <div className="mb-3 mt-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Schemes
              <select
                className="shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="schemes"
                value={selectedScheme}
                onChange={handleSchemeChange}
              >
                {schemes.map((element) => (
                  <option value={element.name} key={element.name}>
                    {element.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {selectedSchemeData && (
            <div>
              {selectedSchemeData.certificates_required.map((certificate) => (
                <InputField key={certificate} certi={certificate} />
              ))}
            </div>
          )}

          <div className="flex flex-col items-center justify-between ">
            <button
              className="bg-[rgb(6,166,126)] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl  focus:outline-none focus:shadow-outline"
              type="button"
            >
              Verify and submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Application;
