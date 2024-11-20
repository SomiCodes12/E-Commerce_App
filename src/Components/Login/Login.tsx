import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(true);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign-up");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await axios
      .post(`${server}/login`, {
        email,
        password,
      })
      .then((res: any) => {
        toast.success(res.data.message || "Login successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);

        toast.error(error.response?.data?.message || "Login failed. Please try again.");
      });
  };
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-3xl text-center font-extrabold text-gray-500 mt-6 font-serif">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id=""
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-auto block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                password
              </label>
              <div className="mt-1 relative flex">
                {value ? (
                  <input
                    type="text"
                    name="password"
                    id=""
                    autoComplete="current password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-auto block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                  />
                ) : (
                  <input
                    type="password"
                    name="password"
                    id=""
                    autoComplete="current password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-auto block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                  />
                )}

                {value ? (
                  <AiOutlineEye
                    className="absolute right-2 top-[12px] cursor-pointer"
                    size={25}
                    onClick={() => {
                      setValue(false);
                    }}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-[12px] cursor-pointer"
                    size={25}
                    onClick={() => {
                      setValue(true);
                    }}
                  />
                )}
                <img
                  src="../assets/grad3-removebg-preview.png"
                  alt=""
                  className="absolute right-2 top-2 cursor-pointer text-[30px]"
                />
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  name="remind-me"
                  id="remind-me"
                  className="py-4 px-4 border-gray-300 rounded"
                />
                <label htmlFor="remind-me" className="ml-2 text-lg">
                  Remind me
                </label>
              </div>
              <div>
                <a href="remind-me" className="ml-2 text-auto text-blue-500">
                  Forgot your pasword?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full relative h-[40px] flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 "
              >
                Submit
              </button>
            </div>
            <div className="flex">
              <h4> Don't have an account?</h4>
              <span
                className="text-blue-600 pl-2 hover:cursor-pointer"
                onClick={handleClick}
              >
                SignUp
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
