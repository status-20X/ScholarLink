import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Inputbox from "../../component/InputBox/InputBox";
import { useState } from "react";

interface formData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push("/DashBoard");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center self-center gap-y-2"
      >
        <h1
          className="heading self-center text-5xl font-bold text-[#38B593]"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          LOGIN ACCOUNT
        </h1>
        <Inputbox
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <Inputbox
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        <button
          className=" w-[200px] self-center bg-[#38B593] hover:bg-[#38D593] text-white font-bold py-2 px-4 rounded-full h-12"
          style={{
            fontFamily: "Montserrat",
          }}
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
      </form>
    </>
  );
}
