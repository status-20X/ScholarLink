"use client"
import { usePathname } from "next/navigation";
import Navbar from "./Navbar/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const hiddenPages = ["/Login", "/Register","/Aadhar","/Otp","/"];
  const pathname = usePathname(); 
  return (
    <html lang="en">
      <body className="flex flex-row h-screen">
      {hiddenPages.includes(pathname) ? null : <Navbar />}
      <div className="overflow-y-auto flex justify-center items-center w-screen h-screen">
        {children}
      </div>
        </body>
    </html>
  )
}
