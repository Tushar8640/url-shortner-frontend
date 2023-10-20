import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login
  //   const handleLogin = (e) => {
  //     e.preventDefault();

  //     if (email !== "" && password !== "") {
  //       login({
  //         email,
  //         password,
  //       });
  //     } else {
  //       Swal.fire("Sorry!", `Please fill up all required fields`, "info");
  //     }
  //   };

  return (
    <div className=" flex flex-col justify-center items-center mx-auto px-2 mt-5 md:mt-0 w-3/5">
      {/* login form  */}

      <div className="flex flex-col md:p-6 rounded-md sm:p-10 text-gray-800 w-full">
        <h2 className="font-bold text-center mx-auto"></h2>
        <div className="mb-8 text-center">
          <h1 className="my-4 text-4xl font-bold">Login</h1>
          <p className="text-sm text-gray-700">Login to access your account</p>
        </div>
        <form
          className=" ng-untouched ng-pristine ng-valid"
          //   onSubmit={handleLogin}
        >
          <div className="w-4/6 mx-auto">
            <div className="flex mb-6">
              <Input
                type="email"
                className="signup-input"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="input-right-icon ">
                {/* <MdEmail className="w-5 h-5" /> */}
              </span>
            </div>
            <div className="flex">
              <Input
                type="password"
                required
                placeholder="*****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-right-icon">
                {/* <MdPassword className="w-5 h-5" /> */}
              </span>
            </div>
          </div>
          <div className="space-y-2 w-4/6 mx-auto">
            <div>
              <Button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-gray-300 mt-8 flex justify-center items-center"
              >
                <span>Login</span>
              </Button>
            </div>
          </div>
        </form>
      </div>
      <p className="md:px-6 text-sm text-center text-gray-700 align-bottom mt-8 w-4/6 mx-auto">
        Don't have an account yet?
        <Link
          href="/register"
          className="hover:underline text-sky-500 ml-1 font-bold"
        >
          Quick Sign up here
        </Link>
        .
      </p>
    </div>
  );
};

export default LoginForm;
