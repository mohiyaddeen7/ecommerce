import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex items-center justify-center flex-col p-12">
      <img src="./login_page.png" alt="" className="w-72 h-52" />

      <form
        action=""
        className="flex items-center flex-wrap font-normal flex-col justify-center w-96"
      >
        <div className="text-lg self-start mb-2 font-semibold">Login</div>
        <div className="userLoginEmailContainer flex flex-col items-center self-start w-full mb-2">
          <label htmlFor="userLoginEmail" className="self-start mb-2">
            Email
          </label>
          <input
            type="email"
            name="userLoginEmail"
            id="userLoginEmail"
            className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50 mb-2 transition-all"
            placeholder="Enter your name"
          />
        </div>
        <div className="userLoginPassswordContainer flex flex-col items-center self-start w-full mb-2">
          <label htmlFor="userLoginPassword" className="self-start mb-2">
            Password
          </label>
          <input
            type="password"
            name="userLoginPassword"
            id="userLoginPassword"
            className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50 mb-2 transition-all"
            placeholder="Enter your email id"
          />
        </div>

        <div className="loginSignupForgotPContainer flex items-center justify-between mb-4 w-full">
          <NavLink to={"/PhoneVerification"}>
            <div className="signup  text-blue-800">Signup?</div>
          </NavLink>
          <div className="forgotPassword  text-blue-800">Forgot Password</div>
        </div>
        <button className="loginButtonContainer bg-amber-200 py-2 px-3  hover:bg-green-200 hover:shadow-lg rounded text-base font-semibold w-full flex items-center justify-center transition-all">
          <span className="material-symbols-outlined mr-2">login</span>
          <span className="">Login</span>
        </button>
      </form>
    </div>
  );
}
