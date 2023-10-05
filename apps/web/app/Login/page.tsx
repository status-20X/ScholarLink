"use client";
// import Link from "next/link";
// import Image from "next/image";
import "../style/globals.css";
import React from "react";
import { useSession } from "next-auth/react";
import LoginForm from "../Components/LoginFormComponent/login-form";

export default function Login() {
  const session = useSession();
  console.log(session);
  // if(session.status==="loading")
  // return <p>Loading......</p>
  // if(session.status==="authenticated")
  // return <button onClick={() => signOut("google")}>Logout</button>
  // if(session.status==="unauthenticated")
  // return <p>user Unauthenticated</p>

  return (
    <div className="w-screen h-screen flex justify-center bg-[#F0F9F3]">
      <div className="container flex flex-row h-[80%] self-center shadow-lg rounded-md">
        <div className="Lcontainer flex justify-center w-[60%] h-full self-center bg-[#06A67E] rounded-md">
          <div className="w-[60%] self-center ">
            <h1 className="text-center text-blue-100 font-black text-3xl font-montserrat py-4">
              WELCOME BACK!
            </h1>

            <h2 className="text-center text-blue-100 font-light text-1xl font-montserrat">
              To keep connected with us please login with your personal info
            </h2>
          </div>
        </div>
        <div className="Rcontainer flex justify-center w-full rounded-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
