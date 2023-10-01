"use client";
import Link from "next/link";
import Image from "next/image";
import "../style/globals.css";
import React from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";
export default function Login() {
  const router = useRouter();
  const handle = () => {
    router.push("/DashBoard");
  };
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
          <div className="form flex flex-col justify-center self-center gap-y-2">
            <h1
              className="heading self-center text-5xl font-bold text-[#38B593]"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              LOGIN ACCOUNT
            </h1>
            <input
              id="mail"
              className="self-center w-[400px] h-[60px] placeholder:p-3"
              type="email"
              placeholder="Email"
              required
            />
            <input
              id="pass"
              className="self-center w-[400px] h-[60px] placeholder:p-3"
              type="password"
              placeholder="Password"
              required
            />
            <button
              className=" w-[200px] self-center bg-[#38B593] hover:bg-[#38D593] text-white font-bold py-2 px-4 rounded-full h-12"
              style={{
                fontFamily: "Montserrat",
              }}
              onClick={handle}
            >
              LOGIN
            </button>
            <h2 className="self-center">
              Not a member?{" "}
              <Link href="../Register">
                <span className="text-blue-700 cursor-pointer">SignUp</span>
              </Link>
            </h2>
            <div className="self-center">
              <button
                className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                onClick={() => signIn("google")}
              >
                <Image
                  width={25}
                  height={25}
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
