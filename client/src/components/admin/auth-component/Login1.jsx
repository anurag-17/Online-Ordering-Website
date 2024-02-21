"use client";
import React, { useState } from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import RightSection from "./RightSection";

// import { removeToken, setToken, setUserDetails } from "../../redux/action/authAction";

const Login = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const InputHandler = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await axios.post("/api/auth/adminLogin", loginDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Login successfully!");
        setLoading(false);
        // dispatch(setToken(res?.data?.user?.token));
        // navigate("/admin-dashboard");
      } else {
        toast.error("Login failed please try later!");
        // dispatch(removeToken());
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error?.response?.data?.error || "server error !");
      //   dispatch(removeToken());
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            //  src={loginImg}  
            alt=""
          />
        </div>

        <div className="bg-white flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto bg-white p-4">
            <h2 className="text-4xl font-bold text-center py-6">
              Welcome Admin
            </h2>
            <div className="flex flex-col py-2">
              {/* <label>Username</label> */}
              <input
                name="email"
                type="email"
                className="border p-2 rounded"
                onChange={InputHandler}
                title="enter valid email ex. abc@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col py-2">
               {/* <label>Password</label> */}
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="border p-2 rounded"
                onChange={InputHandler}
                minLength={8}
                required
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="border w-full my-5 py-2 bg-black hover:bg-black text-white rounded"
            >
              {isLoading ? "Loading.." : "Sign In"}
            </button>
            <div className="flex justify-between">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Create an account</p>
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
