"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "../style/globals.css";
import Inputbox from "../Components/InputBox/input-box";

interface GreviData {
  college: string;
  date: string;
}
const Grievance: React.FC = () => {
  const [greviData, setGreviData] = useState<GreviData>({
    college: "",
    date: Date().toString(),
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(greviData);
    alert("Report Submitted");
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ): void => {
    const { value } = event.target;
    setGreviData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="flex items-center justify-center ">
        <form
          className="bg-[rgb(94,213,183)] shadow-md px-8 pt-6 pb-8 mb-6 rounded-2xl text-center flex flex-col item-center justify-center"
          onSubmit={handleSubmit}
        >
          <span className="text-2xl text-green-700 font-bold text-center mt-3">
            Grievance Report
          </span>

          <div className="mb-3">
            <label
              htmlFor="tendid"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {" "}
              Name of College/Institute/University
            </label>
            <Inputbox
              name="tendid"
              type="text"
              placeholder="Eg. NITKKR"
              value={greviData.college}
              onChange={(e) => handleInputChange(e, "college")}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="twelvedid"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {" "}
              Date of pending Application
            </label>
            <Inputbox
              name="twelvedid"
              type="date"
              placeholder="Eg. 2021-09-01"
              value={greviData.date}
              onChange={(e) => handleInputChange(e, "date")}
            />
          </div>
          <div className="flex flex-col items-center justify-between ">
            <button
              className="bg-[rgb(6,166,126)] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Report Now!!
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Grievance;
