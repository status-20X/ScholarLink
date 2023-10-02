"use client";
import React, { useState } from "react";
import "../style/globals.css";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

export default function Register() {
  const router = useRouter();
  const [aadhar, setAadhar] = useState("");
  const crypto = require("crypto");

  const handleAadharChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAadhar(event.target.value);
  };

  function generateRandomOTP() {
    const min = 100000; // Minimum value for a 6-digit number
    const max = 999999; // Maximum value for a 6-digit number
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  async function handleOnclick(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (aadhar.length === 12) {
      try {
        await sendEmail();
        router.push("/Otp");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      alert("Aadhaar number must be 12 digits long.");
    }
  }

  const otp = generateRandomOTP();

  const templateParams = {
    OTP: otp,
  };

  const sendEmail = async () => {
    console.log(templateParams);
    try {
      emailjs.send(
        "service_5lzk86j",
        "template_15v00km",
        templateParams,
        "LQgJoiy1g4e-Pe70y"
      );
      console.log("Email sent successfully.");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-[#F0F9F3]">
      <div className="container flex flex-row h-[80%] self-center shadow-lg rounded-md">
        <div className="Lcontainer flex justify-center w-[60%] h-full self-center bg-[#06A67E] rounded-md">
          <div className="w-[60%] self-center ">
            <h1 className="text-center text-blue-100 font-black text-3xl font-montserrat py-4">
              Verify Aadhar Now!!
            </h1>

            <h2 className="text-center text-blue-100 font-light text-1xl font-montserrat">
              To keep connected with us please login with your Aadhar info
            </h2>
          </div>
        </div>
        <div className="Rcontainer flex justify-center w-full rounded-md">
          <div className="form flex flex-col justify-center self-center gap-y-2">
            <h1
              className="heading self-center text-5xl font-bold text-[#38B593]"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              Verify Aadhar
            </h1>
            <input
              className="self-center w-[400px] h-[60px] placeholder:p-3"
              type="number"
              placeholder="Aadhar"
              onChange={handleAadharChange}
            />
            <button
              onClick={handleOnclick}
              className=" w-[200px] self-center bg-[#38B593] hover:bg-[#38D593] text-white font-bold py-2 px-4 rounded-full h-12"
            >
              Genrate OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
