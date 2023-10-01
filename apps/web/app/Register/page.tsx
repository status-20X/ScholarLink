"use client";
import "../style/globals.css";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Authprovider from "../component/Authprovider/Authprovider";
import RegisterForm from "../RegisterFormComponent/page";

interface FormData {
  name: string;
  email: string;
  password: string;
  state: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    state: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFormData((formData) => ({
      ...formData,
      state: value,
    }));
  };

  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.state) {
      console.log(formData);
      window.alert("Please Select a State");
    } else {
      // TODO: integrate with backend
      console.log(formData);
      router.push("/Aadhar");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-[#F0F9F3]">
      <div className="container flex flex-row h-[80%] self-center shadow-lg rounded-md">
        <div className="Lcontainer flex justify-center w-[60%] h-full self-center bg-[#06A67E] rounded-md">
          <div className="w-[60%] self-center ">
            <h1 className="text-center text-blue-100 font-black text-3xl font-montserrat py-4">
              Holllaaaaa!!!!!!!!!!!
            </h1>

            <h2 className="text-center text-blue-100 font-light text-1xl font-montserrat">
              To keep connected with us please login with your personal info
            </h2>
          </div>
        </div>
        <div className="Rcontainer flex justify-center w-full rounded-md ">
          <RegisterForm
            formData={formData}
            onInputChange={handleInputChange}
            onDropdownChange={handleDropdownChange}
            onSignUp={handleSignUp}
          />
        </div>
      </div>
    </div>
  );
}
