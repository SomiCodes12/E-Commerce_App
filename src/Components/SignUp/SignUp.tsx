import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { AiOutlineEye } from "react-icons/ai";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState(true);
  const [avatar, setAvatar] : any = useState(null);

  const newForm = new FormData();
  newForm.append("avatar", avatar)
  newForm.append("name", name)
  newForm.append("email", email)
  newForm.append("password", password)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/login")
  }
  const handleInput = (e : any) => {
    const file = e.target.files[0]
    setAvatar(file)
}

const config = {
  "headers" : {"Content-Type" : "multipart/form-data"}
}

const handleSubmit = () => {
  axios.post(`${server}/create-user` , newForm , config).then((res) => {
    console.log("res" , res);
    toast.success("Cool!!!");
    setName("")
    setEmail("")
    setPassword("")
    setAvatar()
  }).catch((err : any) => {
    console.log(err);
    toast.error("Error")
  })
}
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-3xl text-center font-extrabold text-gray-500 mt-6 font-serif">
         SignUp
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-2 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium tex t-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-auto block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
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
                  className="appearance-auto block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                    className="appearance-auto block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
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
                <img src="../assets/grad3-removebg-preview.png" alt="" 
                className="absolute right-2 top-2 cursor-pointer text-[30px]"/>
              </div>
            </div>
            <div>
                <label htmlFor="avatar" className="block text-lg font-medium text-gray-700"></label>
                <div className="flex items-center mt-2">
                <span className=" h-8 w-8 rounded-full overflow-hidden border flex justify-center items-center font-bold">
                    {
                        avatar ? <img src={URL.createObjectURL(avatar)} alt=""  className="w-full h-full object-cover rounded-full"/> : "A"
                    }
                </span>
                <label htmlFor="file-input" className="ml-3 items-center justify-center px-4 py-2 border-gray-400 border rounded-md text-lg text-gray-700 font-medium shadow-sm bg-white hover:bg-gray-50 hover:cursor-pointer">
                    <span>Upload a file</span>
                    <input type="file" name="avatar" id="file-input" onChange={handleInput} className="sr-only"/>
                </label>
                </div>
            </div>
          <div>
            <button type="submit" className="w-full relative h-[40px] flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 ">Submit</button>
          </div>
          <div className="flex">
            <h4>Already have an account?</h4>
            <span className="text-blue-600 pl-2 hover:cursor-pointer" onClick={handleClick}>SignIn</span>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
