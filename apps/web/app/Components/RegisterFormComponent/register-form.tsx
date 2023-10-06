import { ChangeEvent } from "react";
import Inputbox from "../InputBox/input-box";
import Dropdown from "../Dropdown/dropdown";
import Link from "next/link";

// interface FormData {
//   name: string;
//   state: string;
//   email: string;
//   password: string;
// }

// interface FormProps {
//   formData: FormData;
//   onInputChange: (event: ChangeEvent<HTMLInputElement>, name: string) => void;
//   onDropdownChange: (event: ChangeEvent<HTMLSelectElement>) => void;
//   onSignUp: (e: React.FormEvent) => void;
// }

const RegisterForm: React.FC<{
  formData: {
    name: string;
    state: string;
    email: string;
    password: string;
  };
  onInputChange: (event: ChangeEvent<HTMLInputElement>, name: string) => void;
  onDropdownChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSignUp: (e: React.FormEvent) => void;
}> = ({ formData, onInputChange, onSignUp, onDropdownChange }) => {
  return (
    <>
      <form
        className="flex flex-col justify-center self-center gap-y-2"
        onSubmit={onSignUp}
      >
        <h1
          className="heading self-center text-5xl my-2 font-bold text-[#38B593]"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          CREATE ACCOUNT
        </h1>
        <Inputbox
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(event) => {
            onInputChange(event, "name");
          }}
        />
        <Inputbox
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) => {
            onInputChange(event, "email");
          }}
        />
        <Inputbox
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(event) => {
            onInputChange(event, "password");
          }}
        />
        <Dropdown
          selectedState={formData.state}
          onDropdownChange={onDropdownChange}
        />
        <button className="w-[200px] self-center bg-[#38B593] hover:bg-[#38D593] text-white font-bold py-2 px-4 my-3 rounded-full h-12">
          Register
        </button>
        <h2 className="self-center">
          Already have an Account?{" "}
          <Link href="../Login">
            <span className="text-blue-700 cursor-pointer">Login</span>
          </Link>
        </h2>
      </form>
    </>
  );
};

export default RegisterForm;
