import React from "react";

export default function Signup() {
  return (
    <div className="flex items-center justify-center flex-col p-12">
      <img src="./signup_page.png" alt="" className="w-72 h-52" />
      <form
        action=""
        className="flex items-center flex-wrap font-normal flex-col justify-center w-96"
      >
        <div className="text-lg self-start mb-2 font-semibold">Signup</div>
        <div className="userSignupNameContainer flex flex-col items-center self-start w-full mb-2">
          <label htmlFor="userSignupName" className="self-start mb-2">
            Name
          </label>
          <input
            type="text"
            name="userSignupName"
            id="userSignupName"
            className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50 mb-2 transition-all"
            placeholder="Enter your full name"
          />
        </div>
        <div className="userSignupEmailContainer flex flex-col items-center self-start w-full mb-2">
          <label htmlFor="userSignupEmail" className="self-start mb-2">
            Email
          </label>
          <input
            type="email"
            name="userSignupEmail"
            id="userSignupEmail"
            className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50 mb-2 transition-all"
            placeholder="Enter your email id"
          />
        </div>
        <div className="userSignupPasswordContainer flex flex-col items-center self-start w-full mb-2">
          <label htmlFor="userSignupPassword" className="self-start mb-2">
            Password
          </label>
          <input
            type="password"
            name="userSignupPassword"
            id="userSignupPassword"
            className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50 mb-2 transition-all"
            placeholder="Create a new password"
          />
        </div>
        <div className="userSignupCpasswordContainer flex flex-col items-center self-start w-full mb-2">
          <label htmlFor="userSignupCpassword" className="self-start mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="userSignupCpassword"
            id="userSignupCpassword"
            className="w-full rounded  p-2 border border-solid border-black shadow-sm hover:shadow-lg focus:border-amber-500  focus:ring-amber-500 appearance-none focus:outline-none focus:ring-2 focus:bg-blue-50 mb-2 transition-all"
            placeholder="confirm password"
          />
        </div>

        <button className="SignupButtonContainer bg-amber-200 py-2 px-3  hover:bg-green-200 hover:shadow-lg rounded text-base font-semibold w-full flex items-center justify-center transition-all">
          <span class="material-symbols-outlined mr-2">how_to_reg</span>
          <span className="">Signup</span>
        </button>
      </form>
    </div>
  );
}
