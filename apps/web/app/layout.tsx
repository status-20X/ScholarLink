"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Components/Navbar/navbar";
import Authprovider from "./Components/Authprovider/authprovider";

export default function RootLayout({ children }) {
  const hiddenPages = ["/Login", "/Register", "/Aadhar", "/Otp", "/"];
  const pathname = usePathname();
  return (
    <>
      <Authprovider>
        <html lang="en">
          <body className="flex flex-row h-screen">
            {hiddenPages.includes(pathname) ? null : <Navbar />}
            <div className="overflow-y-auto flex justify-center w-screen">
              {children}
            </div>
          </body>
        </html>
      </Authprovider>
    </>
  );
}
